// Public test vectors and advisory regressions. Runs without RPC or credentials.
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { createRequire } from 'node:module'
import { readdirSync, readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = process.cwd()
const web = createRequire(path.join(root, 'apps/web/package.json'))
const store = path.join(root, 'node_modules/.pnpm')
const packages = readdirSync(store)
const ethersRequire = createRequire(web.resolve('ethers/package.json'))
const signingRequire = createRequire(ethersRequire.resolve('@ethersproject/signing-key/package.json'))
const elliptic = signingRequire('elliptic')
assert.equal(signingRequire('elliptic/package.json').version, '6.6.1')
const ec = new elliptic.ec('secp256k1')
const key = ec.keyFromPrivate('1', 'hex')
assert.equal(key.getPublic(true, 'hex'), '0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798')
const hex = '01'.repeat(32)
assert.equal(ec.sign(Buffer.alloc(32, 1), key).toDER('hex'), ec.sign(hex, key).toDER('hex'))
for (const input of ['-' + hex, -1, [256], [-1], [1.5], { length: -1 }]) {
  assert.throws(() => ec.sign(input, key))
}
const p256 = new elliptic.ec('p256')
const p256Key = p256.keyFromPrivate('c9afa9d845ba75166b5c215767b1d6934e50c3db36e89b127b8a622b120f6721', 'hex')
const digest = createHash('sha256').update('sample').digest()
const signature = p256.sign(digest, p256Key)
assert.equal(signature.r.toString(16), 'efd48b2aacb6a8fd1140dd9cd45e81d69d2c877b56aaf991c34d0ea84eaf3716')
assert.equal(signature.s.toString(16), 'f7cb1c942d657c41d436c7a1b6e29f65f3e900dbb9aff4064dc4ab2f843acda8')
assert(p256.verify(digest, signature, p256Key))
assert(!p256.verify(createHash('sha256').update('changed').digest(), signature, p256Key))
const ethers = web('ethers')
const wallet = new ethers.Wallet('0x' + '1'.padStart(64, '0'))
assert.equal(wallet.address, '0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf')
const message = 'cl8y public security test vector'
const signed = await wallet.signMessage(message)
assert.equal(signed, await wallet.signMessage(message))
assert.equal(ethers.utils.verifyMessage(message, signed), wallet.address)
const viem = await import(pathToFileURL(web.resolve('viem')).href)
assert(await viem.verifyMessage({ address: wallet.address, message, signature: signed }))

const shaEntries = packages.filter(name => name.startsWith('sha.js@'))
assert(shaEntries.length)
for (const name of shaEntries) {
  const requireSha = createRequire(path.join(store, name, 'node_modules/sha.js/package.json'))
  assert.equal(requireSha('./package.json').version, '2.4.12')
  const sha = requireSha('.')
  for (const algorithm of ['sha1', 'sha256']) {
    for (const input of [{}, { length: 20 }, { length: -3 }, [NaN], [[]], [1, 1.5], [1, 256], [-1, 0]]) {
      assert.throws(() => sha(algorithm).update('fooabc').update(input))
    }
    for (const input of ['', 'abc', Buffer.alloc(1024, 173)]) {
      assert.equal(sha(algorithm).update(input).digest('hex'), createHash(algorithm).update(input).digest('hex'))
    }
    assert.equal(sha(algorithm).update('a').update('bc').digest('hex'), createHash(algorithm).update('abc').digest('hex'))
  }
}

for (const major of [3, 4]) {
  const entries = packages.filter(name => name.startsWith(`form-data@${major}.`))
  assert(entries.length)
  for (const name of entries) {
    const requireForm = createRequire(path.join(store, name, 'node_modules/form-data/package.json'))
    assert.equal(requireForm('./package.json').version, major === 3 ? '3.0.5' : '4.0.6')
    const FormData = requireForm('.')
    const random = Math.random
    try {
      Math.random = () => 0
      assert.notEqual(new FormData().getBoundary(), new FormData().getBoundary())
    } finally { Math.random = random }
    const valid = new FormData(); valid.append('field', 'safe-value')
    assert(valid.getBuffer().includes(Buffer.from('safe-value')))
    try {
      const hostile = new FormData(); hostile.append('field"\r\nX-Injected: yes\r\n"', 'safe-value')
      assert(!hostile.getBuffer().includes(Buffer.from('\r\nX-Injected:')))
    } catch (error) { if (error.code === 'ERR_ASSERTION') throw error }
  }
}

const swiperRoot = path.dirname(web.resolve('swiper'))
for (const variant of ['swiper.mjs', 'swiper-bundle.mjs', 'swiper.js', 'swiper.min.js', 'swiper-bundle.js', 'swiper-bundle.min.js']) {
  const attack = `
const original = Array.prototype.indexOf;
try {
 Array.prototype.indexOf = () => -1;
 Swiper.extendDefaults(JSON.parse('{"__proto__":{"securityPolluted":"yes"},"constructor":{"prototype":{"securityPolluted":"yes"}},"safe":{"nested":{"__proto__":{"securityPollutedNested":"yes"}}}}'));
 assert.equal(({}).securityPolluted, undefined);
 assert.equal(({}).securityPollutedNested, undefined);
 Swiper.extendDefaults({ speed:345, navigation:{ enabled:true } });
 assert.equal(Swiper.extendedDefaults.speed,345);
 assert.equal(Swiper.extendedDefaults.navigation.enabled,true);
} finally { Array.prototype.indexOf=original;delete Object.prototype.securityPolluted;delete Object.prototype.securityPollutedNested; }
`
  const filename=path.join(swiperRoot,variant)
  const script=variant.endsWith('.mjs')
    ? `import assert from 'node:assert/strict';const Swiper=(await import(${JSON.stringify(pathToFileURL(filename).href)})).default;${attack}`
    : `import assert from 'node:assert/strict';import vm from 'node:vm';import fs from 'node:fs';const context=vm.createContext({assert,console,setTimeout,clearTimeout});vm.runInContext(fs.readFileSync(${JSON.stringify(filename)},'utf8'),context);vm.runInContext(${JSON.stringify(attack)},context);`
  const result = spawnSync(process.execPath, ['--input-type=module', '-e', script], { encoding: 'utf8', timeout: 10000 })
  assert.equal(result.status, 0, variant + ': ' + result.stderr)
}
const manifest = JSON.parse(readFileSync(path.join(root, 'package.json')))
assert.equal(manifest.pnpm.patchedDependencies['@ledgerhq/connect-kit-loader@1.1.2'], 'patches/@ledgerhq__connect-kit-loader@1.1.2.patch')
console.log(JSON.stringify({ ellipticAdvisory: true, p256Rfc6979: true, walletSigningAndViemRecovery: true,
  shaAdvisoryAndVectors: true, multipartRandomnessAndHeaders: true, swiperVariants: 6, ledgerPatchPreserved: true }))

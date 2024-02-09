'use strict';

var chains = require('@pancakeswap/chains');
var tokens = require('@pancakeswap/tokens');
var viem = require('viem');
var BigNumber7 = require('bignumber.js');
var fromPairs2 = require('lodash/fromPairs');
var chunk = require('lodash/chunk');
var wagmi = require('wagmi');
var uniq = require('lodash/uniq');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var BigNumber7__default = /*#__PURE__*/_interopDefault(BigNumber7);
var fromPairs2__default = /*#__PURE__*/_interopDefault(fromPairs2);
var chunk__default = /*#__PURE__*/_interopDefault(chunk);
var uniq__default = /*#__PURE__*/_interopDefault(uniq);

// src/constants/pools/index.ts

// src/types.ts
var PoolCategory = /* @__PURE__ */ ((PoolCategory2) => {
  PoolCategory2["COMMUNITY"] = "Community";
  PoolCategory2["CORE"] = "Core";
  PoolCategory2["BINANCE"] = "Binance";
  PoolCategory2["AUTO"] = "Auto";
  return PoolCategory2;
})(PoolCategory || {});
var VaultKey = /* @__PURE__ */ ((VaultKey2) => {
  VaultKey2["CakeVaultV1"] = "cakeVaultV1";
  VaultKey2["CakeVault"] = "cakeVault";
  VaultKey2["CakeFlexibleSideVault"] = "cakeFlexibleSideVault";
  VaultKey2["IfoPool"] = "ifoPool";
  return VaultKey2;
})(VaultKey || {});

// src/constants/pools/1.ts
var livePools = [];
var finishedPools = [
  {
    sousId: 9,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.rpl,
    contractAddress: "0x3B30A93D056e9A1156D0f17CBd05B711c4232C84",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.0006045"
  },
  {
    sousId: 8,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.wstETH,
    contractAddress: "0x3C6452d5a217Cc65b98F0803c6D1BD7Fe588389A",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.00000271"
  },
  {
    sousId: 7,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.rpl,
    contractAddress: "0x3df19692a70fc55Ec8BfE1C9593E584D8F69c510",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.0005623"
  },
  {
    sousId: 6,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.rpl,
    contractAddress: "0x3f0bCCa8f5aA37e184B22e3A2ca8C292fe6B716B",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.0005093"
  },
  {
    sousId: 5,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.rpl,
    contractAddress: "0x0A150c0AbbbD852ec8940AeE67A1aB59d9Fe76d1",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.000331"
  },
  {
    sousId: 1,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.wncg,
    contractAddress: "0x5eC855219e236b75E7cfba0D56105b9Cc88B4A18",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.04061"
  },
  {
    sousId: 4,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.rpl,
    contractAddress: "0xd7136B50E641CfFf9D0aeB5c4617c779A80F0c8b",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.000282"
  },
  {
    sousId: 3,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.alcx,
    contractAddress: "0x5A8C87047c290dD8A2e1a1a2D2341Da41d1Aa009",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.0002989"
  },
  {
    sousId: 2,
    stakingToken: tokens.ethereumTokens.cake,
    earningToken: tokens.ethereumTokens.ush,
    contractAddress: "0x3Bb1CCa68756a7E0ffEBf59d52174784047f3dE8",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.04629"
  }
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var pools = [...livePools, ...finishedPools];

// src/constants/pools/1101.ts
var livePools2 = [];
var finishedPools2 = [];
var pools2 = [...livePools2, ...finishedPools2];
var livePools3 = [
  {
    sousId: 4,
    stakingToken: tokens.polygonZkEvmTestnetTokens.cake,
    earningToken: tokens.polygonZkEvmTestnetTokens.mockA,
    contractAddress: "0x6e9Cf632243070984A44743d9009CD48cb232F83",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 3,
    stakingToken: tokens.polygonZkEvmTestnetTokens.cake,
    earningToken: tokens.polygonZkEvmTestnetTokens.mockA,
    contractAddress: "0x6C9ffC1FE0f6aD00eeedbF99384E60517CA3E706",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 2,
    stakingToken: tokens.polygonZkEvmTestnetTokens.cake,
    earningToken: tokens.polygonZkEvmTestnetTokens.mockA,
    contractAddress: "0x452ED06e65aF886Ff778E9aF319fdC0ffaFA9d85",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 1,
    stakingToken: tokens.polygonZkEvmTestnetTokens.cake,
    earningToken: tokens.polygonZkEvmTestnetTokens.mockA,
    contractAddress: "0xd6bF7f0C9B1A19A7124625ECF7d6Db8b5610444A",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools3 = [];
var pools3 = [...livePools3, ...finishedPools3];
var livePools4 = [
  {
    sousId: 1,
    stakingToken: tokens.opBnbTokens.alp,
    earningToken: tokens.opBnbTokens.cake,
    contractAddress: "0xa1B46Cb13b43fb8Ae5dC7222e3294fcd10024168",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.005787",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools4 = [];
var pools4 = [...livePools4, ...finishedPools4];
var livePools5 = [
  {
    sousId: 4,
    stakingToken: tokens.zkSyncTestnetTokens.cake,
    earningToken: tokens.zkSyncTestnetTokens.mock,
    contractAddress: "0x4BDFF8A608be623077E54F6916761f631e87D884",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 3,
    stakingToken: tokens.zkSyncTestnetTokens.cake,
    earningToken: tokens.zkSyncTestnetTokens.mock,
    contractAddress: "0x926E99bad2BC7dA5c0880f0bebD7f448Be86562B",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 2,
    stakingToken: tokens.zkSyncTestnetTokens.cake,
    earningToken: tokens.zkSyncTestnetTokens.mock,
    contractAddress: "0x5F7Cc0C5E3FC6e26bC98d392fa3516D4F33Df8aD",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 1,
    stakingToken: tokens.zkSyncTestnetTokens.cake,
    earningToken: tokens.zkSyncTestnetTokens.mock,
    contractAddress: "0x455d2eBbfb172CDba2D499cAf36cBbF5366F976D",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools5 = [];
var pools5 = [...livePools5, ...finishedPools5];
var livePools6 = [];
var finishedPools6 = [
  {
    sousId: 1,
    stakingToken: tokens.zksyncTokens.cake,
    earningToken: tokens.zksyncTokens.tes,
    contractAddress: "0xedB2E9eB4fc47d57c08B387775e09E5fC9e21EBE",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.02546",
    version: 3
  }
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var pools6 = [...livePools6, ...finishedPools6];
var livePools7 = [];
var finishedPools7 = [
  {
    sousId: 3,
    stakingToken: tokens.arbitrumTokens.alp,
    earningToken: tokens.arbitrumTokens.cake,
    contractAddress: "0x85146C0c5968d9640121eebd13030c99298f87b3",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.00615",
    version: 3
  },
  {
    sousId: 2,
    stakingToken: tokens.arbitrumTokens.alp,
    earningToken: tokens.arbitrumTokens.cake,
    contractAddress: "0x0639c5715EC308E16f089c96C0C109302d76FA81",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01177",
    version: 3
  },
  {
    sousId: 1,
    stakingToken: tokens.arbitrumTokens.alp,
    earningToken: tokens.arbitrumTokens.cake,
    contractAddress: "0x3dBdE2682330105902fb482d9849C270aa8E0881",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01135",
    version: 3
  }
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var pools7 = [...livePools7, ...finishedPools7];
var livePools8 = [
  {
    sousId: 5,
    stakingToken: tokens.arbitrumGoerliTokens.cake,
    earningToken: tokens.arbitrumGoerliTokens.mockA,
    contractAddress: "0x291f459243621E7d7c83a67644D87022F1FC39F5",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 4,
    stakingToken: tokens.arbitrumGoerliTokens.cake,
    earningToken: tokens.arbitrumGoerliTokens.mockA,
    contractAddress: "0xbA17c9f21bDea078c54F263a8cc63227F28EBfF8",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 3,
    stakingToken: tokens.arbitrumGoerliTokens.cake,
    earningToken: tokens.arbitrumGoerliTokens.mockA,
    contractAddress: "0xdDa7E82fF3c7b308c7f91a7080e474e41173F7f1",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools8 = [
  {
    sousId: 2,
    stakingToken: tokens.arbitrumGoerliTokens.cake,
    earningToken: tokens.arbitrumGoerliTokens.mockA,
    contractAddress: "0x4aB4ec9EC094E6042E822A73Cd3979A946280E56",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 1,
    stakingToken: tokens.arbitrumGoerliTokens.cake,
    earningToken: tokens.arbitrumGoerliTokens.mockA,
    contractAddress: "0x5b37404299Ef7DCABA32B00A8f36f0F43eC28E92",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  }
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var pools8 = [...livePools8, ...finishedPools8];
var livePools9 = [
  {
    sousId: 0,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "10",
    isFinished: false
  },
  {
    sousId: 368,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cgpt,
    contractAddress: "0x55c8BcEc0df2A61B6eF24815B3462293A27366a2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.038",
    version: 3
  },
  {
    sousId: 367,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.irl,
    contractAddress: "0x41cD0Fad28F8531De22617959bc943F1B3E12Bd8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0694444444444445",
    version: 3
  },
  {
    sousId: 366,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ckp,
    contractAddress: "0x87f0210c658c81e854e6022315cD68804944acaE",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.001929",
    version: 3
  },
  {
    sousId: 365,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ace,
    contractAddress: "0xafB6d6B64fe5007EeE87210B91638ddCeb9f326B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.003858",
    isFinished: false,
    version: 3
  },
  {
    sousId: 364,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.csix,
    contractAddress: "0x692dF8297495f02f31a24A93D10Bd77D072840d7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5131",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools9 = [
  {
    sousId: 363,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.play,
    contractAddress: "0x17D87e825A2231628bCBf1aF1aaEaD419dd3a53D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5902",
    version: 3
  },
  {
    sousId: 362,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xcad,
    contractAddress: "0x1328F684569cE0Cb0F13ce023e1C910f23CaBcA8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01658",
    version: 3
  },
  {
    sousId: 361,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mbx,
    contractAddress: "0x51ebC2F8D7Af302835A1C2Bd02111a3af573e399",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1118",
    version: 3
  },
  {
    sousId: 359,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.wncg,
    contractAddress: "0xBA75a11EC6e8AFcDAb95E46F5E39941d6bB7334F",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.7716",
    version: 3
  },
  {
    sousId: 347,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.tusd,
    contractAddress: "0x72cd910eE115E494485Dd32Ce7bC5dE563eceA51",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02314",
    version: 3
  },
  {
    sousId: 360,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.axl,
    contractAddress: "0x32f0414a4e970a3edd9e7db367A43348F25D74cD",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.05358",
    version: 3
  },
  {
    sousId: 357,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ush,
    contractAddress: "0x3408367d6d4F379e1dfb2bb61664c4833Ec3588c",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1157",
    version: 3
  },
  {
    sousId: 356,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dck,
    contractAddress: "0x3171DeA40dB52081999Cd589972EF55D5D5B4777",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5594",
    version: 3
  },
  {
    sousId: 352,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sable,
    contractAddress: "0x40757a3F2BC322f411D905cD489eaf4Eb84C50Aa",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.192",
    version: 3
  },
  {
    sousId: 351,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.eqb,
    contractAddress: "0x283812B4F4c77A0f169b6F8a79d1d7d996770477",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02411",
    version: 3
  },
  {
    sousId: 354,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.snbnb,
    contractAddress: "0x854906693F7bAc4E4c8C31c001b6a42b3d93493E",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00004813",
    version: 3
  },
  {
    sousId: 350,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xalgo,
    contractAddress: "0x0Cb99886e31FCe86Fc411A2D744d63E6748133b5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.05865",
    version: 3
  },
  {
    sousId: 349,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pendle,
    contractAddress: "0x658136728Cf2D0845BEE552B07cA7FE82D1B7938",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01426",
    version: 3
  },
  {
    sousId: 348,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xalgo,
    contractAddress: "0x4b5A6BA2cAf4B6FD04407513172D3e01c288f9bD",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.07716",
    version: 3
  },
  {
    sousId: 353,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hay,
    contractAddress: "0x8c41046b3C0D7b7C80316a57C39C74c9F5133852",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02314",
    version: 3
  },
  {
    sousId: 346,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.csix,
    contractAddress: "0x5250320d765F366E2B96Cd5c7d08F1902422195e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.017"
  },
  {
    sousId: 355,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.planet,
    contractAddress: "0x69Aeec4EBA2333deC563E378a6AFD5eF23437677",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "150.4",
    version: 3
  },
  {
    sousId: 325,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lvl,
    contractAddress: "0x1394a09F868bE27B1c8D39D79F0b0D6f112bddAf",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.009765",
    version: 3
  },
  {
    sousId: 345,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.axl,
    contractAddress: "0x0592c701fE5DE53d534AFBaf3A11A8F1bbEE9E91",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.05173",
    version: 3
  },
  {
    sousId: 343,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.edu,
    contractAddress: "0x3d2d34Ea77B3702B7634C8D208feC5E08CEa88B6",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.05425",
    version: 3
  },
  {
    sousId: 342,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ush,
    contractAddress: "0x6Db79ba7c0A6DDC48cFDd79Df6cb757b9E8B51DD",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1851",
    version: 3
  },
  {
    sousId: 341,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pstake,
    contractAddress: "0x17086aF09D63852aD4646f1f837b34e171bEa99B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5497",
    version: 3
  },
  {
    sousId: 327,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.id,
    contractAddress: "0x7aCcC054bB199ca976C95aee495C9888f566AaAA",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.07716",
    version: 3
  },
  {
    sousId: 326,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.unw,
    contractAddress: "0x929641DF8F11b6460efAdb09db357717C60003E1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.7716",
    version: 3
  },
  {
    sousId: 329,
    stakingToken: tokens.bscTokens.hay,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x1c7D573D9614187096276a01Ec15263FCa820BDD",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0121",
    version: 3
  },
  {
    sousId: 324,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.caps,
    contractAddress: "0xA31a351e3FBE3278949242Ff152317c12cd786e2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.7",
    version: 3
  },
  {
    sousId: 321,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.csix,
    contractAddress: "0x8BD7b0d392D2dE8F682704A3186A48467FcDC7AC",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "8.68",
    version: 3
  },
  {
    sousId: 323,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sd,
    contractAddress: "0xaEC63F134a7853C6DaC9BA428d7962cD7C6c5e30",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01022",
    version: 3
  },
  {
    sousId: 328,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.rdnt,
    contractAddress: "0xb87d170eC2C22F6078C9ed3214aB6f47f4A924D2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3342",
    version: 3
  },
  {
    sousId: 339,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.axl,
    contractAddress: "0xC0878B7907De5d332C6C296E30d14d604AA6ada6",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01041",
    version: 3
  },
  {
    sousId: 320,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.axlusdc,
    contractAddress: "0x08287F4942A7B68DDb87D20Becd4fdadF4aE206e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0135",
    version: 3
  },
  {
    sousId: 344,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.peel,
    contractAddress: "0xeBc4E95DF515a34c173530b231EDa53E6a786944",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.9186",
    version: 3
  },
  {
    sousId: 322,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pstake,
    contractAddress: "0x98AC153577d65f2eEF2256f3AeF8ba9D7E4B756B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1186",
    version: 3
  },
  {
    sousId: 340,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.champ,
    contractAddress: "0x731Aa0b17143A3095430bf322D6aB132cA32b99F",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.432",
    version: 3
  },
  {
    sousId: 336,
    stakingToken: tokens.bscTokens.xcad,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x548e422031E9063c21c84C7478EBa0f7ae9641B7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.009548",
    version: 3
  },
  {
    sousId: 338,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sfund,
    contractAddress: "0x4809d86700E1f6be32992172Bd57fD3d954993e7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.06145",
    version: 3
  },
  {
    sousId: 337,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.moni,
    contractAddress: "0x47EF9D0A1ff91b4398Ff622eEaf111874d2e0870",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.366",
    version: 3
  },
  {
    sousId: 335,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sis,
    contractAddress: "0xFBA59bA5485670ec243EFA8903564aa5C0AD2373",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5704",
    version: 3
  },
  {
    sousId: 334,
    stakingToken: tokens.bscTokens.rdnt,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0xaaFf0B9fdC503087764Ee7155039015d74fE79B1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.009409",
    version: 3
  },
  {
    sousId: 333,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gq,
    contractAddress: "0x2F50D0010d408e0C299BE8e1a8d553B8eb3E96ED",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "7.093",
    version: 3
  },
  {
    sousId: 306,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.squad,
    contractAddress: "0x08C9d626a2F0CC1ed9BD07eBEdeF8929F45B83d3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.459",
    version: 3
  },
  {
    sousId: 332,
    stakingToken: tokens.bscTokens.csix,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x6fBD8a65c844a3565cA4e71Eb577a2a8F821ABB4",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0124",
    version: 3
  },
  {
    sousId: 331,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mgp,
    contractAddress: "0xCA4A503c79cfDa91246f2084fE315F1cA54694D8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "5.704",
    version: 3
  },
  {
    sousId: 330,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deprecated_8pay,
    contractAddress: "0x67c7014b1C6B6a2d811687d4c5a53de518fA705f",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.48",
    version: 3
  },
  {
    sousId: 310,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.champ,
    contractAddress: "0x3B48325b7CA831ca7D5b649B074fF697c66166c3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.961",
    version: 3
  },
  {
    sousId: 303,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mgp,
    contractAddress: "0x365F744c8b7608253697cA2Ed561537B65a3438B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "6.944",
    version: 3
  },
  {
    sousId: 309,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.arena,
    contractAddress: "0xDe9FC6485b5f4A1905d8011fcd201EB78CF34073",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.893",
    version: 3
  },
  {
    sousId: 307,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.zbc,
    contractAddress: "0xa683C30d47BCd31fB1399b80A4475bc960b903e3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "10.52",
    version: 3
  },
  {
    sousId: 308,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.primal,
    contractAddress: "0x7cE7A5C3241629763899474500D8db1fDFf1dab6",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "30.86",
    version: 3
  },
  {
    sousId: 304,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xcad,
    contractAddress: "0x68Cc90351a79A4c10078FE021bE430b7a12aaA09",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1102",
    version: 3
  },
  {
    sousId: 302,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.wmx,
    contractAddress: "0xaEd58Af2c98dbF05d26B3E5b3cc809fc70D203ce",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5787",
    version: 3
  },
  {
    sousId: 305,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hft,
    contractAddress: "0x92465602f35bb0F22aA1Cf2102B17B563B0a26Dd",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6319",
    version: 3
  },
  {
    sousId: 301,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.krs,
    contractAddress: "0x067F926EB8f2a95f260327B01C29B2034A785029",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.96",
    version: 3
  },
  {
    sousId: 299,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.co,
    contractAddress: "0x31736A52bBdda4eaf0117B17736306Bbecb711ca",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.6296",
    version: 3
  },
  {
    sousId: 298,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hoop,
    contractAddress: "0x6C254E3AB3e4B909A2CfAA3E0b9d2B3F7887CFae",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.146",
    version: 3
  },
  {
    sousId: 297,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.moni,
    contractAddress: "0xB5e36D441016016f251223EBD5E946cdeFe0E2E1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.411",
    version: 3
  },
  {
    sousId: 296,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gq,
    contractAddress: "0x983A241Bfe910fcFa3E70744AA21AAe5f45861f0",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "55.6446",
    version: 3
  },
  {
    sousId: 300,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.arv,
    contractAddress: "0x420Cd06440d8845FBcde9a396d9Aa211FE78C03d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1335.47",
    version: 3
  },
  {
    sousId: 295,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.wom,
    contractAddress: "0xf78DB5b635bA108212C9D84c124a52D7B1596b97",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.4722",
    version: 3
  },
  {
    sousId: 294,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ankr,
    contractAddress: "0x985A20998c7C59e98005c556393215e39c9A4978",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "6.0763",
    version: 3
  },
  {
    sousId: 293,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hay,
    contractAddress: "0x8cBCf2f2be93D154be5135f465369Ee6dD84314B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.2604",
    version: 3
  },
  {
    sousId: 292,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sfund,
    contractAddress: "0x449EC6B2779A3F63E6c2527CBB162A38Ef199d7D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1071",
    version: 3
  },
  {
    sousId: 291,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pstake,
    contractAddress: "0x56D6955Ba6404647191DD7A5D65A5c9Fe43905e1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.1574",
    version: 3
  },
  {
    sousId: 290,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.peel,
    contractAddress: "0x288d1aD79c113552B618765B4986f7DE679367Da",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.34",
    version: 3
  },
  {
    sousId: 289,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.shell,
    contractAddress: "0x595B7AF4F1828AB4953792482b01B2AFC4A46b72",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "89.699",
    version: 3
  },
  {
    sousId: 288,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.high,
    contractAddress: "0x28cc814bE3B994187B7f8Bfed10516A84A671119",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1332",
    version: 3
  },
  {
    sousId: 287,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ole,
    contractAddress: "0xda6F750be1331963E5772BEe757062f6bddcEA4C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.2569",
    version: 3
  },
  {
    sousId: 286,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.trivia,
    contractAddress: "0x86471019Bf3f403083390AC47643062e15B0256e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.976",
    version: 3
  },
  {
    sousId: 285,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sdao,
    contractAddress: "0x168eF2e470bfeAEB32BE52FB218A41483904851c",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.405",
    version: 3
  },
  {
    sousId: 284,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.antex,
    contractAddress: "0xdC37A2B2A6a62008beEe029E36153dF8055a8ADa",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1937.62",
    version: 3
  },
  {
    sousId: 283,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xcn,
    contractAddress: "0xa79D37ce9DF9443eF4B6DEC2e38a8ecd35303adc",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.2505",
    version: 3
  },
  {
    sousId: 282,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.chr,
    contractAddress: "0x2D17ec6cd0AF737B2adE40ea527d41ceEedc166f",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.58",
    version: 3
  },
  {
    sousId: 281,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deprecated_MIX,
    contractAddress: "0x0F96E19Bdc787e767BA1e8F1aDD0f62cbdad87C8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "63.136",
    version: 3
  },
  {
    sousId: 280,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.metis,
    contractAddress: "0xC0A94bFF88EdCae7D5d79294C0e9954Ed75CBCb7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01331",
    version: 3
  },
  {
    sousId: 279,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gal,
    contractAddress: "0xa5D57C5dca083a7051797920c78fb2b19564176B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.09645",
    version: 3
  },
  {
    sousId: 278,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deprecated_rpg,
    contractAddress: "0xD1c395BCdC2d64ac6544A34A36185483B00530a1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.06794",
    version: 3
  },
  {
    sousId: 277,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ankr,
    contractAddress: "0xc581345e1648CcE154978eA80bF8A584EC8aFDe0",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.6296",
    version: 3
  },
  {
    sousId: 276,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ceek,
    contractAddress: "0xED53944b1c0cEecDe1a413fDb4D0496e1a08ab58",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.8078",
    version: 3
  },
  {
    sousId: 275,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.tinc,
    contractAddress: "0x9593462fF51A14633b243Ba3d054A8183d057A02",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4677",
    version: 3
  },
  {
    sousId: 274,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pex,
    contractAddress: "0x641B1F2781B34a493E4308A0A3F1c7E042A9B952",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3865",
    version: 3
  },
  {
    sousId: 273,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gmi,
    contractAddress: "0x0D53E0f2Eb384777442e4EB813d8f5fAcC742206",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "17.939",
    version: 3
  },
  {
    sousId: 272,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.froyo,
    contractAddress: "0x84e3208578eE7db397a3d584d97Fea107b15bF35",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.404",
    version: 3
  },
  {
    sousId: 271,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bsw,
    contractAddress: "0x7092e029E4ce660F9AC081BF6D8a339BE602398b",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.157",
    version: 3
  },
  {
    sousId: 270,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.duet,
    contractAddress: "0xA581349F26dE887700045F9B7d148775d422fDA2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4861",
    version: 3
  },
  {
    sousId: 269,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gmt,
    contractAddress: "0xe76a31cF974BA5819ce86cB4667a4bf05174bC59",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.629",
    version: 3
  },
  {
    sousId: 268,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xwg,
    contractAddress: "0x6e0272A70075f6782F6842730107E9ABf74C5CC7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "5.106",
    version: 3
  },
  {
    sousId: 267,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.high,
    contractAddress: "0x60c4998C058BaC8042712B54E7e43b892Ab0B0c4",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.09756",
    version: 3
  },
  {
    sousId: 266,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.thg,
    contractAddress: "0xD1D03A3D4C27884a8703Cdb78504737C9E9A159e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.162",
    version: 3
  },
  {
    sousId: 265,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.era,
    contractAddress: "0x260F95f5b7FD8eda720ED9d0829164dE35B048ab",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.608",
    version: 3
  },
  {
    sousId: 264,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.btt,
    contractAddress: "0x346a1b672C5Cbb6AE21715428f77A0049B29B332",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "157829"
  },
  {
    sousId: 263,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ach,
    contractAddress: "0xcD1Be742b04DB005e2C445A11BDe6d13DD9dd454",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "7.502"
  },
  {
    sousId: 261,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sfund,
    contractAddress: "0x80762101bd79D6e7A175E9678d05c7f815b8D7d7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.06481"
  },
  {
    sousId: 260,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.raca,
    contractAddress: "0xAaF43935a526DF88AB57FC69b1d80a8d35e1De82",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "204.2"
  },
  {
    sousId: 259,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ertha,
    contractAddress: "0x921Ea7e12A66025F2BD287eDbff6dc5cEABd6477",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.585"
  },
  {
    sousId: 258,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.fuse,
    contractAddress: "0xeAd7b8fc5F2E5672FAe9dCf14E902287F35CB169",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.19"
  },
  {
    sousId: 257,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.froyo,
    contractAddress: "0x1c9E3972fdBa29b40954Bb7594Da6611998F8830",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.893"
  },
  {
    sousId: 256,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.aog,
    contractAddress: "0xa34832efe74133763A85060a64103542031B0A7E",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6435"
  },
  {
    sousId: 255,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.apx,
    contractAddress: "0x92c07c325cE7b340Da2591F5e9CbB1F5Bab73FCF",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.035"
  },
  {
    sousId: 254,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bcoin,
    contractAddress: "0x25ca61796D786014FfE15E42aC11C7721d46E120",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1493"
  },
  {
    sousId: 253,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bcoin,
    contractAddress: "0xad8F6A9d58012DCa2303226B287E80e5fE27eff0",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1493"
  },
  {
    sousId: 252,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.insur,
    contractAddress: "0x1A777aE604CfBC265807A46Db2d228d4CC84E09D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3281"
  },
  {
    sousId: 251,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gm,
    contractAddress: "0x09e727c83a75fFdB729280639eDBf947dB76EeB7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "7893"
  },
  {
    sousId: 250,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.woop,
    contractAddress: "0x2718D56aE2b8F08B3076A409bBF729542233E451",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.226"
  },
  {
    sousId: 249,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.high,
    contractAddress: "0x2461ea28907A2028b2bCa40040396F64B4141004",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02679"
  },
  {
    sousId: 247,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dpt,
    contractAddress: "0x1c0C7F3B07a42efb4e15679a9ed7e70B2d7Cc157",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.62962963"
  },
  {
    sousId: 246,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.thg,
    contractAddress: "0x56Bfb98EBEF4344dF2d88c6b80694Cba5EfC56c8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.03761"
  },
  {
    sousId: 245,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.idia,
    contractAddress: "0x07984aBb7489CD436d27875c07Eb532d4116795a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1262"
  },
  {
    sousId: 244,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xcv,
    contractAddress: "0xF1fA41f593547E406a203b681df18acCC3971A43",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.7413"
  },
  {
    sousId: 243,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.nabox,
    contractAddress: "0x13A40BFab005D9284f8938FBb70Bf39982580e4D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1271"
  },
  {
    sousId: 242,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.santos,
    contractAddress: "0x0914b2d9D4DD7043893DEF53ecFC0F1179F87d5c",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0578"
  },
  {
    sousId: 241,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.quidd,
    contractAddress: "0xD97Ee2bFE79A4d4ab388553411c462fbb536A88C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.07471"
  },
  {
    sousId: 240,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.zoo,
    contractAddress: "0x2EfE8772EB97B74be742d578A654AB6C95bF18db",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4516"
  },
  {
    sousId: 239,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sfund,
    contractAddress: "0x7F103689cabe17C2F70DA6faa298045d72a943b8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0311"
  },
  {
    sousId: 238,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.qi,
    contractAddress: "0xbd52ef04DB1ad1c68A8FA24Fa71f2188978ba617",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.736"
  },
  {
    sousId: 237,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.kart,
    contractAddress: "0x73bB10B89091f15e8FeD4d6e9EBa6415df6acb21",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1897"
  },
  {
    sousId: 236,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.porto,
    contractAddress: "0xdD52FAB121376432DBCBb47592742F9d86CF8952",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0578"
  },
  {
    sousId: 235,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dvi,
    contractAddress: "0x2b8751B7141Efa7a9917f9C6fea2CEA071af5eE7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.2516"
  },
  {
    sousId: 234,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.jgn,
    contractAddress: "0xfDFb4DbE94916F9f55dBC2c14Ea8B3e386eCD9F9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5233"
  },
  {
    sousId: 232,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xwg,
    contractAddress: "0x79f5f7DDADeFa0A9e850DFFC4fBa77e5172Fe701",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.3379"
  },
  {
    sousId: 231,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dar,
    contractAddress: "0x9b861A078B2583373A7a3EEf815bE1A39125Ae08",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.3148"
  },
  {
    sousId: 230,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.fina,
    contractAddress: "0xa35caA9509a2337E22C54C929146D5F7f6515794",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.06944"
  },
  {
    sousId: 229,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bmon,
    contractAddress: "0x6e63B2B96c77532ea7ec2B3D3BFA9C8e1d383f3C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.0254"
  },
  {
    sousId: 228,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dkt,
    contractAddress: "0xFef4B7a0194159d89717Efa592384d42B28D3926",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.09838"
  },
  {
    sousId: 227,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ramp,
    contractAddress: "0x2D26e4b9a5F19eD5BB7AF221DC02432D31DEB4dA",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.2152"
  },
  {
    sousId: 226,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lazio,
    contractAddress: "0xd008416C2C9cF23843BD179AA3cefedB4c8D1607",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0694"
  },
  {
    sousId: 225,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sps,
    contractAddress: "0xD9B63Bb6C62FE2E9a641699A91e680994b8b0081",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.40046"
  },
  {
    sousId: 224,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mcb,
    contractAddress: "0xCc2D359c3a99d9cfe8e6F31230142efF1C828e6D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00706"
  },
  {
    sousId: 223,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deprecated_rpg,
    contractAddress: "0x65C0940C50A3C98AEEc95a115Ae62E9804588713",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01863"
  },
  {
    sousId: 222,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.beta,
    contractAddress: "0x6f660C58723922c6f866a058199FF4881019B4B5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.7361"
  },
  {
    sousId: 233,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.eternal,
    contractAddress: "0xc28c400F2B675b25894FA632205ddec71E432288",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.002893"
  },
  {
    sousId: 221,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.nft,
    contractAddress: "0x8d018823d13C56D62fFB795151a9e629C21E047b",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "173727"
  },
  {
    sousId: 220,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.chess,
    contractAddress: "0x4D1Ec426d0d7fb6bF344Dd372d0502EDD71c8d88",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0861"
  },
  {
    sousId: 219,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.tlos,
    contractAddress: "0xCB41a72067c227D6Ed7bc7CFAcd13eCe47Dfe5E9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3616"
  },
  {
    sousId: 218,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.stephero,
    contractAddress: "0xcECBa456Fefe5b18D43DF23419e7AB755b436655",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1851"
  },
  {
    sousId: 217,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bp,
    contractAddress: "0x8eD7aCF12b08274D5CdAF03d43D0E54bCbDD487e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.217"
  },
  {
    sousId: 216,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cvp,
    contractAddress: "0xC4b15117BC0be030c20754FF36197641477af5d1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.14"
  },
  {
    sousId: 215,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.qbt,
    contractAddress: "0xB72dEf58D0832f747d6B7197471Fe20AeA7EB463",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.412"
  },
  {
    sousId: 214,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.naos,
    contractAddress: "0xb38b78529bCc895dA16CE2978D6cD6C56e8CfFC3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1736"
  },
  {
    sousId: 213,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pha,
    contractAddress: "0x2E101b5F7f910F2609e5AcE5f43bD274b1DE09AA",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.28"
  },
  {
    sousId: 212,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bel,
    contractAddress: "0x52733Ad7b4D09BF613b0389045e33E2F287afa04",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.101"
  },
  {
    sousId: 211,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ramp,
    contractAddress: "0x401B9B97bDbC3197C1adFaB9652dC78040bd1E13",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.9837"
  },
  {
    sousId: 210,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pots,
    contractAddress: "0xBeDb490970204cb3CC7B0fea94463BeD67d5364D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0868"
  },
  {
    sousId: 209,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deprecated_tusd,
    contractAddress: "0xb6e510AE2Da1AB4E350f837c70823ab75091780e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5787"
  },
  {
    sousId: 208,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.revv,
    contractAddress: "0x8aA5B2C67852ED5334c8A7F0b5eB0eF975106793",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.331"
  },
  {
    sousId: 207,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bttold,
    contractAddress: "0x3b804460C3C62f0F565aF593984159f13B1AC976",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "263"
  },
  {
    sousId: 206,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.skill,
    contractAddress: "0x455F4d4Cc4d6CA15441a93c631E82aAF338ad843",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00289"
  },
  {
    sousId: 205,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.win,
    contractAddress: "0xDe4AEf42Bb27a2cb45c746aCDe4e4D8aB711D27C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1815.39"
  },
  {
    sousId: 204,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.if,
    contractAddress: "0x57d3524888Ded4085D9124A422F13b27C8a43DE7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02835"
  },
  {
    sousId: 203,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sps,
    contractAddress: "0xB56299d8FBF46C509014b103a164ad1fC65EA222",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "12.86"
  },
  {
    sousId: 202,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.c98,
    contractAddress: "0x5e49531BA07bE577323e55666D46C6217164119E",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.7361"
  },
  {
    sousId: 201,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.axs,
    contractAddress: "0xBB472601B3CB32723d0755094BA80B73F67f2AF3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00744"
  },
  {
    sousId: 200,
    stakingToken: tokens.bscTokens.axs,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x583A36816F3b8401C4fdf682203E0caDA6997740",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00992"
  },
  {
    sousId: 199,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pmon,
    contractAddress: "0x28050E8F024E05F9DdBeF5f60dD49F536DBA0cF0",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02696"
  },
  {
    sousId: 198,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.trx,
    contractAddress: "0xb2B62f88AB82ed0bB4aB4dA60D9Dc9ACF9e816e5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "9.6643"
  },
  {
    sousId: 197,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.chess,
    contractAddress: "0xD1812e7E28C39e78727592de030fC0e7c366D61a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4286"
  },
  {
    sousId: 196,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.titan,
    contractAddress: "0x97058CF9B36c9Ef1622485ceF22E72d6fEA32a36",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.08912"
  },
  {
    sousId: 195,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.harmony,
    contractAddress: "0xe595456846155E23B24cc9cbEe910ee97027DB6d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.0092"
  },
  {
    sousId: 194,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mask,
    contractAddress: "0xAE611C6D4D3cA2CeE44cd34EB7aAc29D5A387fcf",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.06423"
  },
  {
    sousId: 193,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dvi,
    contractAddress: "0x135827eaF9746573C0B013F18EE12f138B9b0384",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.7233"
  },
  {
    sousId: 192,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gum,
    contractAddress: "0x09b8a5f51c9e245402057851ADA274174Fa00E2A",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.67129"
  },
  {
    sousId: 191,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.adx,
    contractAddress: "0x53A2D1db049b5271c6b6dB020dBa0e8A7C4Eb90d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.7523"
  },
  {
    sousId: 190,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.suter,
    contractAddress: "0x4dA8Da81647ee0Aa7350e9959f3e4771eB753Da0",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "69.9074"
  },
  {
    sousId: 189,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bscpad,
    contractAddress: "0x0446b8F8474C590d2249a4ACDD6Eedbc2e004bca",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3877"
  },
  {
    sousId: 188,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.rabbit,
    contractAddress: "0x391240A007Bfd8A59bA74978D691219a76c64c5C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.993"
  },
  {
    sousId: 187,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.waultx,
    contractAddress: "0x017DEa5C58c2Bcf57FA73945073dF7AD4052a71C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "7.9108"
  },
  {
    sousId: 186,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.wex,
    contractAddress: "0x6Bd94783caCef3fb7eAa9284f1631c464479829f",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "11.574"
  },
  {
    sousId: 185,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.form,
    contractAddress: "0x7c71723fB1F9Cfb250B702cfc4eBd5D9Ab2E83d9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.4467"
  },
  {
    sousId: 184,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.orbs,
    contractAddress: "0x9C8813d7D0A61d30610a7A5FdEF9109e196a3D77",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.8946"
  },
  {
    sousId: 183,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.$dg,
    contractAddress: "0xa07a91DA6D10173f33c294803684bCeEde325957",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00135"
  },
  {
    sousId: 182,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.woo,
    contractAddress: "0x88c321D444C88acF3e747dC90F20421b97648903",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3854"
  },
  {
    sousId: 181,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.woo,
    contractAddress: "0x3C7234c496d76133b48bD6A342E7aEa4f8d87fC8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0003854"
  },
  {
    sousId: 180,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.htb,
    contractAddress: "0x64473c33c360f315cAb38674F1633505d1d8dcb2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "5.2083"
  },
  {
    sousId: 179,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.jgn,
    contractAddress: "0x5cC7a19a50bE2A6b2540EbCd55Bd728E732e59C3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1001"
  },
  {
    sousId: 178,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dft,
    contractAddress: "0x2666E2494E742301fFC8026e476Acc1710a775Ed",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.7361"
  },
  {
    sousId: 177,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hai,
    contractAddress: "0x6ac2213F09A404c86AFf506Aa51B6a5BF1F6e24E",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.3078"
  },
  {
    sousId: 176,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.o3,
    contractAddress: "0x35BD47263f7E57368Df76339903C53bAa99076e1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.107638"
  },
  {
    sousId: 175,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ampl,
    contractAddress: "0x62dEc3A560D2e8A84D30752bA454f97b26757877",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.398"
  },
  {
    sousId: 174,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.oddz,
    contractAddress: "0x44D1F81e80E43e935d66d65874354eF91E5E49f6",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4843"
  },
  {
    sousId: 173,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bondly,
    contractAddress: "0x4Ea43FCE546975aAe120C9eECeB172500BE4a02b",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6741"
  },
  {
    sousId: 172,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.marsh,
    contractAddress: "0x567fd708e788e51b68666b9310Ee9dF163D60fAE",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1108"
  },
  {
    sousId: 171,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mbox,
    contractAddress: "0x36F9452083fC9bC469a31e7966B873F402292433",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4803"
  },
  {
    sousId: 170,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ata,
    contractAddress: "0xC612680457751D0D01B5d901AD08132a3B001900",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.7361"
  },
  {
    sousId: 169,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mx,
    contractAddress: "0x336bcd59f2B6Eb7221a99F7A50fd03c6bf9A306b",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.27777"
  },
  {
    sousId: 168,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bcfx,
    contractAddress: "0x2b3974DDa76B2d408B7D680a27fbb0393E3CF0e1",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6944"
  },
  {
    sousId: 167,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.qkc,
    contractAddress: "0xFa67f97eEEE6De55d179eCAbBfE701F27D9A1Ed9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "15.9143"
  },
  {
    sousId: 166,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ktn,
    contractAddress: "0x48852322a185DC5Fc733ff8C8D7c6DCBd2B3b2A2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01215"
  },
  {
    sousId: 165,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mtrg,
    contractAddress: "0xf4D0F71698f58f221911515781B05E808a8635cB",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.05613"
  },
  {
    sousId: 164,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deprecated_tusd,
    contractAddress: "0x9DCeB1d92f7e0361d0766f3D98482424DF857654",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5787"
  },
  {
    sousId: 163,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.vrt,
    contractAddress: "0xB77F1425eC3A7C78b1A1E892f72332C8b5e8FFcb",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "40.5092"
  },
  {
    sousId: 162,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.kalm,
    contractAddress: "0xB9FF4dA0954B300542E722097671EaD8cf337C17",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0868"
  },
  {
    sousId: 161,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ez,
    contractAddress: "0xB19395702460261e51Edf7A7B130109c64f13AF9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01736"
  },
  {
    sousId: 160,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.kalm,
    contractAddress: "0x6E113ecB9Ff2d271140f124C2CC5b5e4B5700c9f",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00868"
  },
  {
    sousId: 159,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.popen,
    contractAddress: "0x7Baf1763CE5d0Da8c9d85927F08a8be9c481ce50",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.19097"
  },
  {
    sousId: 158,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lien,
    contractAddress: "0x2b8d6C9C62bFc1BeD84724165D3000e61D332caB",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.023148"
  },
  {
    sousId: 157,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.well,
    contractAddress: "0x8a06ff2748eDCBa3FB4e44a6bfDA4e46769e557b",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.2025"
  },
  {
    sousId: 156,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.deri,
    contractAddress: "0x3eba95F5493349bbe0CaD33EAAe05DC6a7E26b90",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.6087"
  },
  {
    sousId: 155,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.chr,
    contractAddress: "0x593EDbD14A5B7eEc828336ACCCA9C16CC12F04be",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.655"
  },
  {
    sousId: 154,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cyc,
    contractAddress: "0xD714738837944C3c592477249E8edB724A76e068",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00015914"
  },
  {
    sousId: 153,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xend,
    contractAddress: "0x8EA9f2482B2f7b12744a831F81F8d08714adc093",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.31828"
  },
  {
    sousId: 152,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hget,
    contractAddress: "0x8E8125f871eb5bA9D55361365F5391Ab437f9acc",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.03553"
  },
  {
    sousId: 151,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hotcross,
    contractAddress: "0x0E09205E993f78cd5B3A5df355Ae98eE7D0b5834",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.4722"
  },
  {
    sousId: 150,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.rfox,
    contractAddress: "0xF9F00d41b1f4b3c531ff750a9b986C1a530F33d9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.7361"
  },
  {
    sousId: 149,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.wmass,
    contractAddress: "0x4Af531EcD50167a9402Ce921ee6436dd4cFC04FD",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.24942"
  },
  {
    sousId: 148,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ubxt,
    contractAddress: "0x9B4BaC2d8F69853Aa29cb45478C77FC54532aC22",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.4074"
  },
  {
    sousId: 147,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.btr,
    contractAddress: "0x20EE70a07ae1B475cB150dEC27930D97915726Ea",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.8935"
  },
  {
    sousId: 146,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.\u03C4doge,
    contractAddress: "0x017556dFFb8C6a52Fd7F4788aDF6fb339309C81B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.868"
  },
  {
    sousId: 145,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pmon,
    contractAddress: "0xDaa711ecf2Ac0BFf5C82fCEEAE96d0008791cC49",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01261"
  },
  {
    sousId: 144,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.one,
    contractAddress: "0x74AF842ecD0B6588ADd455A47aa21ED9bA794108",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "57.87"
  },
  {
    sousId: 143,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.fine,
    contractAddress: "0x42D41749d6e9a1c5b47e27F690D4531f181B2159",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1342"
  },
  {
    sousId: 142,
    stakingToken: tokens.bscTokens.doge,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0xBEbD44824631b55991Fa5f2bf5c7a4ec96ff805B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01388"
  },
  {
    sousId: 141,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bmxx,
    contractAddress: "0x55131f330c886E3f0CaE389CeDb23766aC9aA3ED",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01331"
  },
  {
    sousId: 140,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.oin,
    contractAddress: "0x01453A74a94687Fa3f99b80762435855a13664f4",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3472"
  },
  {
    sousId: 139,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hyfi,
    contractAddress: "0x0032CeB978FE5FC8A5D5D6f5ADfc005e76397E29",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.8935"
  },
  {
    sousId: 138,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.kun,
    contractAddress: "0x439B46D467402CEbC1a2FA05038B5b696B1f4417",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.23148"
  },
  {
    sousId: 137,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.math,
    contractAddress: "0x377AE5f933AA4CfA41fA03E2CAE8a2BEFCCF53B2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.15798"
  },
  {
    sousId: 136,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ust,
    contractAddress: "0xce3EbaC3F549ebf1A174A6aC3b390c179422B5f6",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.17361"
  },
  {
    sousId: 135,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.win,
    contractAddress: "0xD26DEc254C699935c286CD90E9841DCABF1aF72d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "462.96"
  },
  {
    sousId: 134,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.trx,
    contractAddress: "0x93E2867D9b74341C2D19101b7Fbb81d6063CcA4d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "4.0509"
  },
  {
    sousId: 133,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bttold,
    contractAddress: "0x3b644e44033cFF70BD6b771904225f3dd69DFb6d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "79.86"
  },
  {
    sousId: 132,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lmt,
    contractAddress: "0x0A687D7b951348D681f7Ed5Eea84C0Ba7b9566dC",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.66145"
  },
  {
    sousId: 131,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pnt,
    contractAddress: "0x417df1c0e6A498eB1F2247F99032A01D4faFe922",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.09548"
  },
  {
    sousId: 130,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xmark,
    contractAddress: "0xDC8943d806F9Dd64312D155284ABF780455fD345",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0298"
  },
  {
    sousId: 129,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ramp,
    contractAddress: "0xa90a894e5Bc20aB2bE46c7E033A38f8B8eaa771A",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4861",
    isFinished: true
  },
  {
    sousId: 128,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hakka,
    contractAddress: "0x34ac807E34e534Fe426Da1E11F816422774AAe1C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.4722"
  },
  {
    sousId: 127,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pbtc,
    contractAddress: "0x31FA2F516b77c4273168b284AC6D9def5AA6DaFb",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0000031"
  },
  {
    sousId: 126,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lien,
    contractAddress: "0x7112f8988f075C7784666ab071927AE4109a8076",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.003472"
  },
  {
    sousId: 125,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bbadger,
    contractAddress: "0x126dfBcef85c5Bf335F8BE99CA4006037f417892",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00265278"
  },
  {
    sousId: 124,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bdigg,
    contractAddress: "0x4F0AD2332B1F9983E8F63Cbee617523Bb7de5031",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00000403"
  },
  {
    sousId: 123,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bondly,
    contractAddress: "0x9483ca44324dE06802576866b9D296f7614f45Ac",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4629"
  },
  {
    sousId: 122,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xed,
    contractAddress: "0x72ceec6E2A142678E703aB0710DE78bc819F4cE0",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3472"
  },
  {
    sousId: 121,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cgg,
    contractAddress: "0x1C6eD21D3313822ae73ed0d94811FfbBE543f341",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.10918"
  },
  {
    sousId: 120,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.perl,
    contractAddress: "0x1aC0d0333640F57327c83053C581340ebC829E30",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.1574"
  },
  {
    sousId: 119,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.arpa,
    contractAddress: "0xC707e5589aeb1dC117B0BB5A3622362F1812D4fc",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.949"
  },
  {
    sousId: 118,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.oddz,
    contractAddress: "0x22106cdCF9787969e1672d8E6A9C03A889CdA9c5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.11284"
  },
  {
    sousId: 117,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dexe,
    contractAddress: "0x999B86E8BBA3D4F05afB8155963999db70aFA97F",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.009837",
    isFinished: true
  },
  {
    sousId: 116,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dfd,
    contractAddress: "0xAF3EfE5fCEeBc603Eada6A2b0172be11f7405102",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.46296"
  },
  {
    sousId: 115,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.alpaca,
    contractAddress: "0xF73FdEB26a8C7a4Abf3809d3DB11a06ba5c13D0e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.22743"
  },
  {
    sousId: 114,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.\u03C4btc,
    contractAddress: "0xAaC7171afC93f4b75e1268d208040B152ac65E32",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00000608"
  },
  {
    sousId: 113,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.\u03C4btc,
    contractAddress: "0x2c6017269B4324D016ca5d8e3267368652c18905",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00000608",
    isFinished: true
  },
  {
    sousId: 112,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.swingby,
    contractAddress: "0x675434C68F2672c983e36cF10Ed13a4014720B79",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.21527"
  },
  {
    sousId: 111,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xed,
    contractAddress: "0x05d6C2d1d687eACfb5E6440d5a3511E91F2201A8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3472",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 110,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hakka,
    contractAddress: "0xD623a32da4A632Ce01766C317D07Cb2CAD56949B",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.4722",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 109,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cgg,
    contractAddress: "0xdF75f38DBC98F9F26377414e567aBcb8D57CCa33",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.10918",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 108,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mix,
    contractAddress: "0xce64A930884B2c68CD93FC1C7c7Cdc221D427692",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3721"
  },
  {
    sousId: 107,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.suter,
    contractAddress: "0xc1E70edd0141c454b834Deac7ddDeA413424aEf9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "15.3356"
  },
  {
    sousId: 106,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.broobee,
    contractAddress: "0x189d8228CdfDc404Bd9e5bD65ff958cb5fd8855c",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "14.4675"
  },
  {
    sousId: 105,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hzn,
    contractAddress: "0x0196c582216e2463f052E2B07Ef8667Bec9Fb17a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6944"
  },
  {
    sousId: 104,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.alpa,
    contractAddress: "0x8f84106286c9c8A42bc3555C835E6e2090684ab7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.23495"
  },
  {
    sousId: 103,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.perl,
    contractAddress: "0xa8d32b31ECB5142f067548Bf0424389eE98FaF26",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.1574",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 102,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.tlm,
    contractAddress: "0xC59aa49aE508050c2dF653E77bE13822fFf02E9A",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "17.361"
  },
  {
    sousId: 101,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.jgn,
    contractAddress: "0x14AeA62384789EDA98f444cCb970F6730877d3F9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.08796"
  },
  {
    sousId: 100,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.eps,
    contractAddress: "0xebb87dF24D65977cbe62538E4B3cFBD5d0308642",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.07716"
  },
  {
    sousId: 99,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.arpa,
    contractAddress: "0x40918EF8efFF4aA061656013a81E0e5A8A702eA7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.949",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 98,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.itam,
    contractAddress: "0x44eC1B26035865D9A7C130fD872670CD7Ebac2bC",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.096"
  },
  {
    sousId: 97,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bondly,
    contractAddress: "0x1329ad151dE6C441184E32E108401126AE850937",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4629",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 96,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.tko,
    contractAddress: "0x9bbDc92474a7e7321B78dcDA5EF35f4981438760",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.1574"
  },
  {
    sousId: 95,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.apys,
    contractAddress: "0x46530d79b238f809e80313e73715b160c66677aF",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.09953"
  },
  {
    sousId: 94,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hoo,
    contractAddress: "0x47fD853D5baD391899172892F91FAa6d0cd8A2Aa",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.489"
  },
  {
    sousId: 93,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.oddz,
    contractAddress: "0xe25aB6F05BBF6C1be953BF2d7df15B3e01b8e5a5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.11284",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 92,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.easy,
    contractAddress: "0xEB8Fd597921E3Dd37B0F103a2625F855e2C9b9B5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0072338"
  },
  {
    sousId: 91,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.nrv,
    contractAddress: "0xABFd8d1942628124aB971937154f826Bce86DcbC",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.15046"
  },
  {
    sousId: 90,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dego,
    contractAddress: "0x526d3c204255f807C95a99b69596f2f9f72345e5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00405"
  },
  {
    sousId: 89,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.gum,
    contractAddress: "0xAa2082BeE04fc518300ec673F9497ffa6F669dB8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.08912"
  },
  {
    sousId: 88,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pbtc,
    contractAddress: "0x9096625Bc0d36F5EDa6d44e511641667d89C28f4",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0000031",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 87,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dft,
    contractAddress: "0x78BD4dB48F8983c3C36C8EAFbEF38f6aC7B55285",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6811"
  },
  {
    sousId: 86,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.swth,
    contractAddress: "0x35418e14F5aA615C4f020eFBa6e01C5DbF15AdD2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.3148"
  },
  {
    sousId: 85,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lien,
    contractAddress: "0x3c7cC49a35942fbD3C2ad428a6c22490cd709d03",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.003472",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 84,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.zil,
    contractAddress: "0xF795739737ABcFE0273f4Dced076460fdD024Dd9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "1.0995"
  },
  {
    sousId: 83,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.pcws,
    contractAddress: "0x06FF8960F7F4aE572A3f57FAe77B2882BE94Bf90",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00434"
  },
  {
    sousId: 82,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bbadger,
    contractAddress: "0xe4dD0C50fb314A8B2e84D211546F5B57eDd7c2b9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00265278",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 81,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bdigg,
    contractAddress: "0xb627A7e33Db571bE792B0b69c5C2f5a8160d5500",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00000403",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 80,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lto,
    contractAddress: "0xadBfFA25594AF8Bc421ecaDF54D057236a99781e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.2893"
  },
  {
    sousId: 79,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mir,
    contractAddress: "0x3e31488f08EBcE6F2D8a2AA512aeFa49a3C7dFa7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01273"
  },
  {
    sousId: 78,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.mir,
    contractAddress: "0x453a75908fb5A36D482D5F8fe88ECA836f32eAd5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01273",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 77,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.trade,
    contractAddress: "0x509C99D73FB54b2c20689708b3F824147292D38e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4484"
  },
  {
    sousId: 76,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dusk,
    contractAddress: "0xF1bd5673Ea4a1C415ec84fa3E402F2F7788E7717",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4629"
  },
  {
    sousId: 75,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bifi,
    contractAddress: "0xB4C68A1C565298834360BbFF1652284275120D47",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00007234"
  },
  {
    sousId: 74,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.txl,
    contractAddress: "0x153e62257F1AAe05d5d253a670Ca7585c8D3F94F",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.434027"
  },
  {
    sousId: 73,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.cos,
    contractAddress: "0xF682D186168b4114ffDbF1291F19429310727151",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "5.787"
  },
  {
    sousId: 72,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bunny,
    contractAddress: "0xaDdAE5f4dB84847ac9d947AED1304A8e7D19f7cA",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00289"
  },
  {
    sousId: 71,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.alice,
    contractAddress: "0x4C32048628D0d32d4D6c52662FB4A92747782B56",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.14467"
  },
  {
    sousId: 70,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.for,
    contractAddress: "0x47642101e8D8578C42765d7AbcFd0bA31868c523",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "2.8935"
  },
  {
    sousId: 69,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bux,
    contractAddress: "0x07F8217c68ed9b838b0b8B58C19c79bACE746e9A",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5787"
  },
  {
    sousId: 68,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.nuls,
    contractAddress: "0x580DC9bB9260A922E3A4355b9119dB990F09410d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0868"
  },
  {
    sousId: 67,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.belt,
    contractAddress: "0x6f0037d158eD1AeE395e1c12d21aE8583842F472",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00868",
    isFinished: true
  },
  {
    sousId: 66,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ramp,
    contractAddress: "0x423382f989C6C289c8D441000e1045e231bd7d90",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4861",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 65,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bfi,
    contractAddress: "0x0A595623b58dFDe6eB468b613C11A7A8E84F09b9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0001157"
  },
  {
    sousId: 64,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dexe,
    contractAddress: "0x9E6dA246d369a41DC44673ce658966cAf487f7b2",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.009837",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 63,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bel,
    contractAddress: "0x2C0f449387b15793B9da27c2d945dBed83ab1B07",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0549"
  },
  {
    sousId: 62,
    stakingToken: tokens.bscTokens.tpt,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x0c3D6892aa3b23811Af3bd1bbeA8b0740E8e4528",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0462",
    isFinished: true
  },
  {
    sousId: 61,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.tpt,
    contractAddress: "0x75C91844c5383A68b7d3A427A44C32E3ba66Fe45",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "3.616",
    isFinished: true
  },
  {
    sousId: 60,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.watch,
    contractAddress: "0xC58954199E268505fa3D3Cb0A00b7207af8C2D1d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.3472",
    isFinished: true
  },
  {
    sousId: 59,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.xmark,
    contractAddress: "0xA5137e08C48167E363Be8Ec42A68f4F54330964E",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0413",
    isFinished: true
  },
  {
    sousId: 58,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bmxx,
    contractAddress: "0x6F31B87f51654424Ce57E9F8243E27ed13846CDB",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.00248",
    isFinished: true
  },
  {
    sousId: 57,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.iotx,
    contractAddress: "0xCE54BA909d23B9d4BE0Ff0d84e5aE83F0ADD8D9a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "6.365",
    isFinished: true
  },
  {
    sousId: 56,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bor,
    contractAddress: "0x3e677dC00668d69c2A7724b9AFA7363e8A56994e",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.000395",
    isFinished: true
  },
  {
    sousId: 55,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bopen,
    contractAddress: "0x5Ac8406498dC1921735d559CeC271bEd23B294A7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0723",
    isFinished: true
  },
  {
    sousId: 54,
    stakingToken: tokens.bscTokens.sushi,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0xb69b6e390cba1F68442A886bC89E955048DAe7E3",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0367",
    isFinished: true
  },
  {
    sousId: 53,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.dodo,
    contractAddress: "0xae3001ddb18A6A57BEC2C19D71680437CA87bA1D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0578",
    isFinished: true
  },
  {
    sousId: 52,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.swingby,
    contractAddress: "0x02aa767e855b8e80506fb47176202aA58A95315a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.13",
    isFinished: true
  },
  {
    sousId: 51,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bry,
    contractAddress: "0x1c736F4FB20C7742Ee83a4099fE92abA61dFca41",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1157",
    isFinished: true
  },
  {
    sousId: 50,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.zee,
    contractAddress: "0x02861B607a5E87daf3FD6ec19DFB715F1b371379",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1736",
    isFinished: true
  },
  {
    sousId: 49,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.swgb,
    contractAddress: "0x73e4E8d010289267dEe3d1Fc48974B60363963CE",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.899",
    isFinished: true
  },
  {
    sousId: 48,
    stakingToken: tokens.bscTokens.comp,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0xE0565fBb109A3f3f8097D8A9D931277bfd795072",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.055",
    isFinished: true
  },
  {
    sousId: 47,
    stakingToken: tokens.bscTokens.comp,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0xc3693e3cbc3514d5d07EA5b27A721F184F617900",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.55",
    isFinished: true
  },
  {
    sousId: 46,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.sfp,
    contractAddress: "0x2B02d43967765b18E31a9621da640588f3550EFD",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6",
    isFinished: true
  },
  {
    sousId: 45,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lina,
    contractAddress: "0x212bb602418C399c29D52C55100fD6bBa12bea05",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.983",
    isFinished: true
  },
  {
    sousId: 44,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lina,
    contractAddress: "0x04aE8ca68A116278026fB721c06dCe709eD7013C",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0983",
    isFinished: true
  },
  {
    sousId: 43,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.lit,
    contractAddress: "0x1714bAAE9DD4738CDEA07756427FA8d4F08D9479",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.231",
    isFinished: true
  },
  {
    sousId: 42,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hget,
    contractAddress: "0xcCD0b93cC6ce3dC6dFaA9DB68f70e5C8455aC5bd",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0138",
    isFinished: true
  },
  {
    sousId: 41,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bdo,
    contractAddress: "0x9cB24e9460351bC51d4066BC6AEd1F3809b02B78",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.075",
    isFinished: true
  },
  {
    sousId: 40,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.egld,
    contractAddress: "0x2dcf4cDFf4Dd954683Fe0a6123077f8a025b66cF",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.001215",
    isFinished: true
  },
  {
    sousId: 39,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ust,
    contractAddress: "0x6EFa207ACdE6e1caB77c1322CbdE9628929ba88F",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.1157",
    isFinished: true
  },
  {
    sousId: 38,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.wsote,
    contractAddress: "0xD0b738eC507571176D40f28bd56a0120E375f73a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.23",
    isFinished: true
  },
  {
    sousId: 37,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.front,
    contractAddress: "0xf7a31366732F08E8e6B88519dC3E827e04616Fc9",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.2546",
    isFinished: true
  },
  {
    sousId: 36,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.helmet,
    contractAddress: "0x9F23658D5f4CEd69282395089B0f8E4dB85C6e79",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.81",
    isFinished: true
  },
  {
    sousId: 35,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.btcst,
    contractAddress: "0xB6fd2724cc9c90DD31DA35DbDf0300009dceF97d",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.011574",
    isFinished: true
  },
  {
    sousId: 34,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bscx,
    contractAddress: "0x108BFE84Ca8BCe0741998cb0F60d313823cEC143",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.17361",
    isFinished: true
  },
  {
    sousId: 33,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ten,
    contractAddress: "0x4A26b082B432B060B1b00A84eE4E823F04a6f69a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.05787",
    isFinished: true
  },
  {
    sousId: 32,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.balbt,
    contractAddress: "0x3cc08B7C6A31739CfEd9d8d38b484FDb245C79c8",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.4166",
    isFinished: true
  },
  {
    sousId: 31,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.asr,
    contractAddress: "0xd18E1AEb349ef0a6727eCe54597D98D263e05CAB",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01",
    isFinished: true
  },
  {
    sousId: 30,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.atm,
    contractAddress: "0x68C7d180bD8F7086D91E65A422c59514e4aFD638",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01",
    isFinished: true
  },
  {
    sousId: 29,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.og,
    contractAddress: "0xbE65d7e42E05aD2c4ad28769dc9c5b4b6EAff2C7",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01",
    isFinished: true
  },
  {
    sousId: 28,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.reef,
    contractAddress: "0x1500fA1AFBFE4f4277ED0345cdf12b2C9cA7e139",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "115.74",
    isFinished: true
  },
  {
    sousId: 27,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ditto,
    contractAddress: "0x624ef5C2C6080Af188AF96ee5B3160Bb28bb3E02",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01157"
  },
  {
    sousId: 26,
    stakingToken: tokens.bscTokens.twt,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x0554a5D083Abf2f056ae3F6029e1714B9A655174",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.248",
    isFinished: true
  },
  {
    sousId: 24,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.juv,
    contractAddress: "0x543467B17cA5De50c8BF7285107A36785Ab57E56",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02",
    isFinished: true
  },
  {
    sousId: 25,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.psg,
    contractAddress: "0x65aFEAFaec49F23159e897EFBDCe19D94A86A1B6",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02",
    isFinished: true
  },
  {
    sousId: 21,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.vai,
    contractAddress: "0x1AD34D8d4D79ddE88c9B6b8490F8fC67831f2CAe",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.104",
    isFinished: true
  },
  {
    sousId: 20,
    stakingToken: tokens.bscTokens.bnb,
    earningToken: tokens.bscTokens.cake,
    contractAddress: "0x555Ea72d7347E82C614C16f005fA91cAf06DCB5a",
    poolCategory: "Binance" /* BINANCE */,
    tokenPerBlock: "0.5",
    isFinished: true
  },
  {
    sousId: 19,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.bnb,
    contractAddress: "0x326D754c64329aD7cb35744770D56D0E1f3B3124",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.0041",
    isFinished: true
  },
  {
    sousId: 18,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.blink,
    contractAddress: "0x42Afc29b2dEa792974d1e9420696870f1Ca6d18b",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "23.14",
    isFinished: true
  },
  {
    sousId: 17,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.blink,
    contractAddress: "0xBb2B66a2c7C2fFFB06EA60BeaD69741b3f5BF831",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "23.14",
    isFinished: true,
    enableEmergencyWithdraw: true
  },
  {
    sousId: 16,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.unfi,
    contractAddress: "0xFb1088Dae0f03C5123587d2babb3F307831E6367",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.02893",
    isFinished: true
  },
  {
    sousId: 15,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.twt,
    contractAddress: "0x9c4EBADa591FFeC4124A7785CAbCfb7068fED2fb",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "5",
    isFinished: true
  },
  {
    sousId: 14,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.hard,
    contractAddress: "0x90F995b9d46b32c4a1908A8c6D0122e392B3Be97",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.346",
    isFinished: true
  },
  {
    sousId: 13,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.broobee,
    contractAddress: "0xdc8c45b7F3747Ca9CaAEB3fa5e0b5FCE9430646b",
    poolCategory: "Community" /* COMMUNITY */,
    tokenPerBlock: "12.5",
    isFinished: true
  },
  {
    sousId: 12,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.stax,
    contractAddress: "0xFF02241a2A1d2a7088A344309400E9fE74772815",
    poolCategory: "Community" /* COMMUNITY */,
    tokenPerBlock: "0.2",
    isFinished: true
  },
  {
    sousId: 11,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.nar,
    contractAddress: "0xDc938BA1967b06d666dA79A7B1E31a8697D1565E",
    poolCategory: "Community" /* COMMUNITY */,
    tokenPerBlock: "1",
    isFinished: true
  },
  {
    sousId: 10,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.nya,
    contractAddress: "0x07a0A5B67136d40F4d7d95Bc8e0583bafD7A81b9",
    poolCategory: "Community" /* COMMUNITY */,
    tokenPerBlock: "10",
    isFinished: true
  },
  {
    sousId: 9,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ctk,
    contractAddress: "0x21A9A53936E812Da06B7623802DEc9A1f94ED23a",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.5",
    isFinished: true
  },
  {
    sousId: 8,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.twt,
    contractAddress: "0xe7f9A439Aa7292719aC817798DDd1c4D35934aAF",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "20",
    isFinished: true
  },
  {
    sousId: 7,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.inj,
    contractAddress: "0xcec2671C81a0Ecf7F8Ee796EFa6DBDc5Cb062693",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.25",
    isFinished: true
  },
  {
    sousId: 248,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ccar,
    contractAddress: "0x9e31aef040941E67356519f44bcA07c5f82215e5",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.6093"
  },
  {
    sousId: 262,
    stakingToken: tokens.bscTokens.cake,
    earningToken: tokens.bscTokens.ach,
    contractAddress: "0xD5668e936B951292Ddf8c84553CC58F85948F816",
    poolCategory: "Core" /* CORE */,
    enableEmergencyWithdraw: true,
    tokenPerBlock: "7.502"
  }
].map((p) => ({
  ...p,
  isFinished: true,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var pools9 = [...livePools9, ...finishedPools9];
var livePools10 = [
  {
    sousId: 4,
    stakingToken: tokens.lineaTestnetTokens.cake,
    earningToken: tokens.lineaTestnetTokens.mockA,
    contractAddress: "0x5d4A2dCefA1B6D5031f57a05651F0b49f4E0eC74",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 3,
    stakingToken: tokens.lineaTestnetTokens.cake,
    earningToken: tokens.lineaTestnetTokens.mockA,
    contractAddress: "0xa014641f932E8b7985Ffd6F722DfE6995bbA15aF",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 2,
    stakingToken: tokens.lineaTestnetTokens.cake,
    earningToken: tokens.lineaTestnetTokens.mockA,
    contractAddress: "0x4dc9C14A5542f3D0544a6c11d717AD04A70afF8C",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 1,
    stakingToken: tokens.lineaTestnetTokens.cake,
    earningToken: tokens.lineaTestnetTokens.mockA,
    contractAddress: "0x30669C960b90Eb71DB4173D8b5069ca83CD2d400",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools10 = [];
var pools10 = [...livePools10, ...finishedPools10];

// src/constants/pools/59144.ts
var livePools11 = [];
var finishedPools11 = [];
var pools11 = [...livePools11, ...finishedPools11];

// src/constants/pools/8453.ts
var livePools12 = [];
var finishedPools12 = [];
var pools12 = [...livePools12, ...finishedPools12];
var livePools13 = [
  {
    sousId: 4,
    stakingToken: tokens.baseTestnetTokens.cake,
    earningToken: tokens.baseTestnetTokens.mockA,
    contractAddress: "0x55F8912596F06453466e208e79AB808328146d06",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 3,
    stakingToken: tokens.baseTestnetTokens.cake,
    earningToken: tokens.baseTestnetTokens.mockA,
    contractAddress: "0xE61a1065B740a61950E08C073833B85D3362f48B",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 2,
    stakingToken: tokens.baseTestnetTokens.cake,
    earningToken: tokens.baseTestnetTokens.mockA,
    contractAddress: "0xF9991a0e33115c1B7e0690109115747ab5C48D9E",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  },
  {
    sousId: 1,
    stakingToken: tokens.baseTestnetTokens.cake,
    earningToken: tokens.baseTestnetTokens.mockA,
    contractAddress: "0x35DB927618560B8878543ea0019A8E664581ADb5",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01",
    version: 3
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools13 = [];
var pools13 = [...livePools13, ...finishedPools13];
var livePools14 = [
  {
    sousId: 0,
    stakingToken: tokens.bscTestnetTokens.cake2,
    earningToken: tokens.bscTestnetTokens.cake2,
    contractAddress: "0xf6B427A2Df6E24600e3e3c62634B7c478826619D",
    poolCategory: "Core" /* CORE */,
    tokenPerBlock: "0.01",
    isFinished: false
  },
  {
    sousId: 1,
    stakingToken: tokens.bscTestnetTokens.cake2,
    earningToken: tokens.bscTestnetTokens.mockA,
    contractAddress: "0xe7080E3afDfF2322080B5ba85700FE41287D864B",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01"
  },
  {
    sousId: 2,
    stakingToken: tokens.bscTestnetTokens.mockA,
    earningToken: tokens.bscTestnetTokens.mockB,
    contractAddress: "0x31a069925fB770202b302C7911AF1ACBe0395420",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01"
  },
  {
    sousId: 3,
    stakingToken: tokens.bscTestnetTokens.wbnb,
    earningToken: tokens.bscTestnetTokens.cake2,
    contractAddress: "0x550d3a43D5CB57E70dD1F53699CEaA0f371ADbBb",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.01"
  },
  {
    sousId: 5,
    stakingToken: tokens.bscTestnetTokens.msix,
    earningToken: tokens.bscTestnetTokens.cake2,
    contractAddress: "0xf45c9e61318006Dc31CA4993b8ab75E611fe0792",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.0001"
  },
  {
    sousId: 6,
    stakingToken: tokens.bscTestnetTokens.cake2,
    earningToken: tokens.bscTestnetTokens.msix,
    contractAddress: "0xeB019927EB2d79b6A03B728a6f7A9020f3e2E25f",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "1"
  },
  {
    sousId: 7,
    stakingToken: tokens.bscTestnetTokens.cake2,
    earningToken: tokens.bscTestnetTokens.msix,
    contractAddress: "0xd41F619f2f2E91F77054877Ed1a47661f290d19e",
    poolCategory: "Core" /* CORE */,
    tokenPerSecond: "0.1"
  }
].map((p) => ({
  ...p,
  contractAddress: viem.getAddress(p.contractAddress, 97),
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize
}));
var finishedPools14 = [];
var pools14 = [...livePools14, ...finishedPools14];
var SUPPORTED_CHAIN_IDS = [chains.ChainId.BSC];
var CAKE_VAULT_SUPPORTED_CHAINS = [chains.ChainId.BSC, chains.ChainId.BSC_TESTNET];

// src/utils/isPoolsSupported.ts
function isPoolsSupported(chainId) {
  return SUPPORTED_CHAIN_IDS.includes(chainId);
}
function isCakeVaultSupported(chainId) {
  return !!chainId && CAKE_VAULT_SUPPORTED_CHAINS.includes(chainId);
}

// src/constants/pools/index.ts
var POOLS_CONFIG_BY_CHAIN = {
  [chains.ChainId.ETHEREUM]: pools,
  [chains.ChainId.BSC]: pools9,
  [chains.ChainId.BSC_TESTNET]: pools14,
  [chains.ChainId.ARBITRUM_ONE]: pools7,
  [chains.ChainId.ARBITRUM_GOERLI]: pools8,
  [chains.ChainId.ZKSYNC]: pools6,
  [chains.ChainId.ZKSYNC_TESTNET]: pools5,
  [chains.ChainId.BASE]: pools12,
  [chains.ChainId.BASE_TESTNET]: pools13,
  [chains.ChainId.LINEA]: pools11,
  [chains.ChainId.LINEA_TESTNET]: pools10,
  [chains.ChainId.POLYGON_ZKEVM]: pools2,
  [chains.ChainId.POLYGON_ZKEVM_TESTNET]: pools3,
  [chains.ChainId.OPBNB]: pools4
};
var LIVE_POOLS_CONFIG_BY_CHAIN = {
  [chains.ChainId.ETHEREUM]: livePools,
  [chains.ChainId.BSC]: livePools9,
  [chains.ChainId.BSC_TESTNET]: livePools14,
  [chains.ChainId.ARBITRUM_ONE]: livePools7,
  [chains.ChainId.ARBITRUM_GOERLI]: livePools8,
  [chains.ChainId.ZKSYNC]: livePools6,
  [chains.ChainId.ZKSYNC_TESTNET]: livePools5,
  [chains.ChainId.BASE]: livePools12,
  [chains.ChainId.BASE_TESTNET]: livePools13,
  [chains.ChainId.LINEA]: livePools11,
  [chains.ChainId.LINEA_TESTNET]: livePools10,
  [chains.ChainId.POLYGON_ZKEVM]: livePools2,
  [chains.ChainId.POLYGON_ZKEVM_TESTNET]: livePools3,
  [chains.ChainId.OPBNB]: livePools4
};
var getPoolsConfig = (chainId) => {
  if (!isPoolsSupported(chainId)) {
    return void 0;
  }
  return POOLS_CONFIG_BY_CHAIN[chainId];
};
var getLivePoolsConfig = (chainId) => {
  if (!isPoolsSupported(chainId)) {
    return void 0;
  }
  return LIVE_POOLS_CONFIG_BY_CHAIN[chainId];
};
var MAX_LOCK_DURATION = 31536e3;
var UNLOCK_FREE_DURATION = 604800;
var ONE_WEEK_DEFAULT = 604800;
var BOOST_WEIGHT = 20000000000000n;
var DURATION_FACTOR = 31536000n;

// src/constants/boostedPools/arb.ts
var arbBoostedPools = [
  {
    boosterType: 0 /* ALP */,
    contractAddress: "0x85146C0c5968d9640121eebd13030c99298f87b3",
    tooltipsText: "Fee APY include the transaction fees shared in the ALP pool, funding rates for positions held, and liquidation income, and will be reflected in the growth of the ALP price. Stake APY is the return for staking ALP. Both Annualized using compound interest, for reference purposes only."
  }
];

// src/constants/boostedPools/opBNB.ts
var opBnbBoostedPools = [
  {
    boosterType: 0 /* ALP */,
    contractAddress: "0xa1B46Cb13b43fb8Ae5dC7222e3294fcd10024168",
    tooltipsText: "Fee APY include the transaction fees shared in the ALP pool, funding rates for positions held, and liquidation income, and will be reflected in the growth of the ALP price. Stake APY is the return for staking ALP. Both Annualized using compound interest, for reference purposes only."
  }
];

// src/constants/boostedPools/index.ts
var BOOSTED_POOLS_CONFIG_BY_CHAIN = {
  [chains.ChainId.ARBITRUM_ONE]: arbBoostedPools,
  [chains.ChainId.OPBNB]: opBnbBoostedPools
};
var getBoostedPoolsConfig = (chainId) => {
  return BOOSTED_POOLS_CONFIG_BY_CHAIN[chainId];
};
var getBoostedPoolConfig = (chainId, contractAddress) => {
  const pool = getBoostedPoolsConfig(chainId);
  return pool?.find((i) => i?.contractAddress?.toLowerCase() === contractAddress.toLowerCase());
};
var ICAKE = {
  [chains.ChainId.BSC]: "0x3C458828D1622F5f4d526eb0d24Da8C4Eb8F07b1"
};
var CAKE_VAULT = {
  [chains.ChainId.BSC]: "0x45c54210128a065de780C4B0Df3d16664f7f859e"
};
var CAKE_FLEXIBLE_SIDE_VAULT = {
  [chains.ChainId.BSC]: "0x615e896A8C2CA8470A2e9dc2E9552998f8658Ea0"
};

// src/constants/index.ts
var BSC_BLOCK_TIME = 3;
var BLOCKS_PER_DAY = 60 / BSC_BLOCK_TIME * 60 * 24;
var BLOCKS_PER_YEAR = BLOCKS_PER_DAY * 365;
var SECONDS_IN_YEAR = 31536e3;
var BIG_ZERO = new BigNumber7__default.default(0);
new BigNumber7__default.default(1);
new BigNumber7__default.default(2);
new BigNumber7__default.default(9);
new BigNumber7__default.default(10);
new BigNumber7__default.default(100);

// src/abis/ISousChef.ts
var sousChefABI = [
  {
    inputs: [],
    name: "bonusEndBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "emergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [
      { internalType: "uint256", name: "_from", type: "uint256" },
      { internalType: "uint256", name: "_to", type: "uint256" }
    ],
    name: "getMultiplier",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "massUpdatePools", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "pendingReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "poolInfo",
    outputs: [
      { internalType: "contract IBEP20", name: "lpToken", type: "address" },
      { internalType: "uint256", name: "allocPoint", type: "uint256" },
      { internalType: "uint256", name: "lastRewardBlock", type: "uint256" },
      { internalType: "uint256", name: "accCakePerShare", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "rewardPerBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "stopReward", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "syrup",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfo",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "rewardDebt", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abis/ISousChefV2.ts
var sousChefV2ABI = [
  {
    inputs: [],
    name: "PRECISION_FACTOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "accTokenPerShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bonusEndBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "hasUserLimit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastRewardBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numberBlocksForUserLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address"
      }
    ],
    name: "pendingReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLimitPerUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_tokenAmount",
        type: "uint256"
      }
    ],
    name: "recoverWrongTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardPerBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stakedToken",
    outputs: [
      {
        internalType: "contract IBEP20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stopReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_hasUserLimit",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "_poolLimitPerUser",
        type: "uint256"
      }
    ],
    name: "updatePoolLimitPerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256"
      }
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256"
      }
    ],
    name: "updateStartAndEndBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abis/ISmartChef.ts
var smartChefABI = [
  {
    inputs: [
      { internalType: "address", name: "_pancakeProfile", type: "address" },
      { internalType: "bool", name: "_pancakeProfileIsRequested", type: "bool" },
      { internalType: "uint256", name: "_pancakeProfileThresholdPoints", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "EmergencyWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "poolLimitPerUser", type: "uint256" }],
    name: "NewPoolLimit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "rewardPerSecond", type: "uint256" }],
    name: "NewRewardPerSecond",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "startTimestamp", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "endTimestamp", type: "uint256" }
    ],
    name: "NewStartAndEndTimestamp",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "blockNumber", type: "uint256" }],
    name: "RewardsStop",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "token", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "TokenRecovery",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "isProfileRequested", type: "bool" },
      { indexed: false, internalType: "uint256", name: "thresholdPoints", type: "uint256" }
    ],
    name: "UpdateProfileAndThresholdPointsRequirement",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "PRECISION_FACTOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SMART_CHEF_FACTORY",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "accTokenPerShare",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "emergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "endTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "hasUserLimit",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "contract IERC20Metadata", name: "_stakedToken", type: "address" },
      { internalType: "contract IERC20Metadata", name: "_rewardToken", type: "address" },
      { internalType: "uint256", name: "_rewardPerSecond", type: "uint256" },
      { internalType: "uint256", name: "_startTimestamp", type: "uint256" },
      { internalType: "uint256", name: "_endTimestamp", type: "uint256" },
      { internalType: "uint256", name: "_poolLimitPerUser", type: "uint256" },
      { internalType: "uint256", name: "_numberSecondsForUserLimit", type: "uint256" },
      { internalType: "address", name: "_admin", type: "address" }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastRewardTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numberSecondsForUserLimit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pancakeProfile",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pancakeProfileIsRequested",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pancakeProfileThresholdPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "pendingReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLimitPerUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_token", type: "address" }],
    name: "recoverToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "rewardPerSecond",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [{ internalType: "contract IERC20Metadata", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stakedToken",
    outputs: [{ internalType: "contract IERC20Metadata", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "startTimestamp",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "stopReward", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "_userLimit", type: "bool" },
      { internalType: "uint256", name: "_poolLimitPerUser", type: "uint256" }
    ],
    name: "updatePoolLimitPerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "_isRequested", type: "bool" },
      { internalType: "uint256", name: "_thresholdPoints", type: "uint256" }
    ],
    name: "updateProfileAndThresholdPointsRequirement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_rewardPerSecond", type: "uint256" }],
    name: "updateRewardPerSecond",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_startTimestamp", type: "uint256" },
      { internalType: "uint256", name: "_endTimestamp", type: "uint256" }
    ],
    name: "updateStartAndEndTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfo",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "rewardDebt", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "userLimit",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/abis/ISousChefV3.ts
var sousChefV3ABI = [
  {
    inputs: [
      { internalType: "address", name: "_pancakeProfile", type: "address" },
      { internalType: "bool", name: "_pancakeProfileIsRequested", type: "bool" },
      { internalType: "uint256", name: "_pancakeProfileThresholdPoints", type: "uint256" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "EmergencyWithdraw",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "poolLimitPerUser", type: "uint256" }],
    name: "NewPoolLimit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "rewardPerBlock", type: "uint256" }],
    name: "NewRewardPerBlock",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "startBlock", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "endBlock", type: "uint256" }
    ],
    name: "NewStartAndEndBlocks",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "uint256", name: "blockNumber", type: "uint256" }],
    name: "RewardsStop",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "token", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "TokenRecovery",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "isProfileRequested", type: "bool" },
      { indexed: false, internalType: "uint256", name: "thresholdPoints", type: "uint256" }
    ],
    name: "UpdateProfileAndThresholdPointsRequirement",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "PRECISION_FACTOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SMART_CHEF_FACTORY",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "accTokenPerShare",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bonusEndBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "emergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "hasUserLimit",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "contract IERC20Metadata", name: "_stakedToken", type: "address" },
      { internalType: "contract IERC20Metadata", name: "_rewardToken", type: "address" },
      { internalType: "uint256", name: "_rewardPerBlock", type: "uint256" },
      { internalType: "uint256", name: "_startBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonusEndBlock", type: "uint256" },
      { internalType: "uint256", name: "_poolLimitPerUser", type: "uint256" },
      { internalType: "uint256", name: "_numberBlocksForUserLimit", type: "uint256" },
      { internalType: "address", name: "_admin", type: "address" }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "isInitialized",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastRewardBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "numberBlocksForUserLimit",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pancakeProfile",
    outputs: [{ internalType: "contract IPancakeProfile", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pancakeProfileIsRequested",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pancakeProfileThresholdPoints",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "pendingReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "poolLimitPerUser",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_token", type: "address" }],
    name: "recoverToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "rewardPerBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [{ internalType: "contract IERC20Metadata", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stakedToken",
    outputs: [{ internalType: "contract IERC20Metadata", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "stopReward", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "_userLimit", type: "bool" },
      { internalType: "uint256", name: "_poolLimitPerUser", type: "uint256" }
    ],
    name: "updatePoolLimitPerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bool", name: "_isRequested", type: "bool" },
      { internalType: "uint256", name: "_thresholdPoints", type: "uint256" }
    ],
    name: "updateProfileAndThresholdPointsRequirement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_rewardPerBlock", type: "uint256" }],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_startBlock", type: "uint256" },
      { internalType: "uint256", name: "_bonusEndBlock", type: "uint256" }
    ],
    name: "updateStartAndEndBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfo",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "rewardDebt", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "userLimit",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

// src/utils/getContractAddress.ts
function getContractAddress(addresses, chainId) {
  if (!isPoolsSupported(chainId)) {
    throw new Error(`Cannot get contract address. Unsupported chain ${chainId}`);
  }
  return addresses[chainId];
}

// src/utils/isLegacyPool.ts
function isLegacyPool(pool) {
  if (pool.tokenPerBlock) {
    return true;
  }
  return false;
}
function isUpgradedPool(pool) {
  if (pool.tokenPerSecond) {
    return true;
  }
  return false;
}
var getPoolAprByTokenPerBlock = (stakingTokenPrice, rewardTokenPrice, totalStaked, tokenPerBlock) => {
  const totalRewardPricePerYear = new BigNumber7__default.default(rewardTokenPrice).times(tokenPerBlock).times(BLOCKS_PER_YEAR);
  const totalStakingTokenInPool = new BigNumber7__default.default(stakingTokenPrice).times(totalStaked);
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber();
};
var getPoolAprByTokenPerSecond = (stakingTokenPrice, rewardTokenPrice, totalStaked, tokenPerSecond) => {
  const totalRewardPricePerYear = new BigNumber7__default.default(rewardTokenPrice).times(tokenPerSecond).times(SECONDS_IN_YEAR);
  const totalStakingTokenInPool = new BigNumber7__default.default(stakingTokenPrice).times(totalStaked);
  const apr = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100);
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber();
};

// src/abis/ISousChefBNB.ts
var sousChefBnbABI = [
  {
    inputs: [],
    name: "WBNB",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "adminAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "bonusEndBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "deposit", outputs: [], stateMutability: "payable", type: "function" },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "emergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [
      { internalType: "uint256", name: "_from", type: "uint256" },
      { internalType: "uint256", name: "_to", type: "uint256" }
    ],
    name: "getMultiplier",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "limitAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "massUpdatePools", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "pendingReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "poolInfo",
    outputs: [
      { internalType: "contract IBEP20", name: "lpToken", type: "address" },
      { internalType: "uint256", name: "allocPoint", type: "uint256" },
      { internalType: "uint256", name: "lastRewardBlock", type: "uint256" },
      { internalType: "uint256", name: "accCakePerShare", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_blacklistAddress", type: "address" }],
    name: "removeBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "rewardPerBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [{ internalType: "contract IBEP20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_adminAddress", type: "address" }],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_blacklistAddress", type: "address" }],
    name: "setBlackList",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "setLimitAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "startBlock",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalAllocPoint",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
    name: "updatePool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfo",
    outputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "rewardDebt", type: "uint256" },
      { internalType: "bool", name: "inBlackList", type: "bool" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

// src/utils/getPoolContractBySousId.ts
function getSousChefBNBContract({
  address,
  signer,
  publicClient
}) {
  return {
    ...viem.getContract({
      abi: sousChefBnbABI,
      address,
      walletClient: signer,
      publicClient
    }),
    abi: sousChefBnbABI,
    address,
    account: signer?.account,
    chain: signer?.chain
  };
}
function getSousChefV2Contract({
  address,
  signer,
  publicClient
}) {
  return {
    ...viem.getContract({
      abi: sousChefV2ABI,
      address,
      walletClient: signer,
      publicClient
    }),
    abi: sousChefV2ABI,
    address,
    account: signer?.account,
    chain: signer?.chain
  };
}
function getSmartChefChefV2Contract({
  address,
  signer,
  publicClient
}) {
  return {
    ...viem.getContract({
      abi: smartChefABI,
      address,
      walletClient: signer,
      publicClient
    }),
    abi: smartChefABI,
    address,
    account: signer?.account,
    chain: signer?.chain
  };
}
function getPoolContractBySousId({ chainId, sousId, signer, publicClient }) {
  if (!chainId) {
    return null;
  }
  const pools15 = getPoolsConfig(chainId);
  const pool = pools15?.find((p) => p.sousId === Number(sousId));
  if (!pool) {
    return null;
  }
  const { contractAddress } = pool;
  if (isLegacyPool(pool)) {
    if (pool.poolCategory === "Binance" /* BINANCE */) {
      return getSousChefBNBContract({ address: contractAddress, signer, publicClient });
    }
    return getSousChefV2Contract({ address: contractAddress, signer, publicClient });
  }
  return getSmartChefChefV2Contract({ address: contractAddress, signer, publicClient });
}

// src/utils/boosted/checkIsBoostedPool.ts
var checkIsBoostedPool = (contract, chainId) => {
  const list = getBoostedPoolsConfig(chainId);
  const isBoosted = list?.find((i) => i?.contractAddress?.toLowerCase() === contract.toLowerCase());
  return isBoosted !== void 0;
};
var WEEK = 7;
var YEAR = 365;
var API_URL = "https://perp.pancakeswap.finance/bapi/futures/v1/public/future/apx/fee/info?chain=";
var CONTRACT_ADDRESS = {
  [chains.ChainId.OPBNB]: "0x5A5454A6030FB50ceb3eb78977D140198A27be5e",
  [chains.ChainId.ARBITRUM_ONE]: "0xB3879E95a4B8e3eE570c232B19d520821F540E48"
};
var CHAIN_NAME_MAP = {
  [chains.ChainId.OPBNB]: "OPBNB",
  [chains.ChainId.ARBITRUM_ONE]: "ARB"
};
var fetchAlpBoostedPoolApr = async (client, chainId) => {
  try {
    const [totalValue] = await client.multicall({
      contracts: [
        {
          abi: [
            {
              inputs: [],
              name: "totalValue",
              outputs: [
                {
                  components: [
                    { internalType: "address", name: "tokenAddress", type: "address" },
                    { internalType: "int256", name: "value", type: "int256" },
                    { internalType: "uint8", name: "decimals", type: "uint8" },
                    { internalType: "int256", name: "valueUsd", type: "int256" },
                    { internalType: "uint16", name: "targetWeight", type: "uint16" },
                    { internalType: "uint16", name: "feeBasisPoints", type: "uint16" },
                    { internalType: "uint16", name: "taxBasisPoints", type: "uint16" },
                    { internalType: "bool", name: "dynamicFee", type: "bool" }
                  ],
                  internalType: "struct IVault.LpItem[]",
                  name: "lpItems",
                  type: "tuple[]"
                }
              ],
              stateMutability: "view",
              type: "function"
            }
          ],
          address: CONTRACT_ADDRESS?.[chainId],
          functionName: "totalValue"
        }
      ],
      allowFailure: false
    });
    const totalValueUsd = totalValue.map((i) => new BigNumber7__default.default(i.valueUsd.toString()).div(1e18).toNumber()).reduce((a, b) => a + b, 0);
    const response = await fetch(`${API_URL}${CHAIN_NAME_MAP[chainId]}`);
    const result = await response.json();
    const { alpFundingFee, alpTradingFee, alpLipFee } = result.data;
    const apr = new BigNumber7__default.default(alpFundingFee).plus(alpTradingFee).plus(alpLipFee);
    const totalApr = apr.div(totalValueUsd.toString()).div(WEEK);
    const apy = totalApr.plus(1).exponentiatedBy(YEAR).minus(1).times(100);
    return apy.toNumber();
  } catch (error) {
    console.info("Fetch ALP boosted fee error: ", error);
    return 0;
  }
};

// src/utils/boosted/apr/getBoostedPoolApr.ts
var getBoostedPoolApr = async ({ client, contractAddress, chainId }) => {
  const pool = chainId && getBoostedPoolConfig(chainId, contractAddress);
  if (!contractAddress || !chainId || !pool) {
    return 0;
  }
  if (pool?.boosterType === 0 /* ALP */) {
    const result = await fetchAlpBoostedPoolApr(client, chainId);
    return result;
  }
  return 0;
};

// src/queries/fetchPools.ts
var getLivePoolsWithEnd = async (chainId) => {
  const poolsConfig = getPoolsConfig(chainId);
  if (!poolsConfig) {
    return null;
  }
  return poolsConfig.filter((p) => p.sousId !== 0 && !p.isFinished);
};
async function fetchUpgradedPoolsTimeLimits(pools15, chainId, provider) {
  if (!pools15.length) {
    return [];
  }
  const calls = pools15.flatMap(({ contractAddress }) => {
    return [
      {
        abi: smartChefABI,
        address: contractAddress,
        functionName: "startTimestamp"
      },
      {
        abi: smartChefABI,
        address: contractAddress,
        functionName: "endTimestamp"
      }
    ];
  });
  const client = provider({ chainId });
  const startEndRaw = await client.multicall({
    contracts: calls,
    allowFailure: false
  });
  const startEndResult = startEndRaw.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  return pools15.map((cakePoolConfig, index) => {
    const [startTimestamp, endTimestamp] = startEndResult[index];
    return {
      sousId: cakePoolConfig.sousId,
      startTimestamp: Number(startTimestamp),
      endTimestamp: Number(endTimestamp)
    };
  });
}
var fetchLegacyPoolsBlockLimits = async (pools15, chainId, provider) => {
  if (!pools15.length) {
    return [];
  }
  const startEndBlockCalls = pools15.flatMap(({ contractAddress }) => {
    return [
      {
        abi: sousChefABI,
        address: contractAddress,
        functionName: "startBlock"
      },
      {
        abi: sousChefABI,
        address: contractAddress,
        functionName: "bonusEndBlock"
      }
    ];
  });
  const client = provider({ chainId });
  const [block, startEndBlockRaw] = await Promise.all([
    client.getBlock({ blockTag: "latest" }),
    client.multicall({
      contracts: startEndBlockCalls,
      allowFailure: false
    })
  ]);
  const startEndBlockResult = startEndBlockRaw.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
  const getTimestampFromBlock = (targetBlock) => {
    return Number(block.timestamp) + (targetBlock - Number(block.number)) * BSC_BLOCK_TIME;
  };
  return pools15.map((cakePoolConfig, index) => {
    const [startBlock, endBlock] = startEndBlockResult[index];
    return {
      sousId: cakePoolConfig.sousId,
      startTimestamp: getTimestampFromBlock(Number(startBlock)),
      endTimestamp: getTimestampFromBlock(Number(endBlock))
    };
  });
};
var fetchPoolsTimeLimits = async (chainId, provider) => {
  const livedPools = await getLivePoolsWithEnd(chainId);
  if (!livedPools) {
    return null;
  }
  const upgradedPools = livedPools.filter(isUpgradedPool);
  const legacyPools = livedPools.filter(isLegacyPool);
  const [upgradePoolLimits, legacyPoolLimits] = await Promise.all([
    fetchUpgradedPoolsTimeLimits(upgradedPools, chainId, provider),
    fetchLegacyPoolsBlockLimits(legacyPools, chainId, provider)
  ]);
  return [...upgradePoolLimits, ...legacyPoolLimits];
};
var fetchPoolsTotalStaking = async (chainId, provider) => {
  const poolsConfig = getPoolsConfig(chainId);
  if (!poolsConfig) {
    return null;
  }
  const poolsBalanceOf = poolsConfig.map(({ contractAddress, stakingToken }) => {
    return {
      abi: wagmi.erc20ABI,
      address: stakingToken.address,
      functionName: "balanceOf",
      args: [contractAddress]
    };
  });
  const client = provider({ chainId });
  const poolsTotalStaked = await client.multicall({
    contracts: poolsBalanceOf,
    allowFailure: false
  });
  return poolsConfig.map((p, index) => ({
    sousId: p.sousId,
    totalStaked: new BigNumber7__default.default(poolsTotalStaked[index].toString()).toJSON()
  }));
};
var fetchPoolsStakingLimitsByBlock = async ({
  poolsWithStakingLimit,
  chainId,
  provider
}) => {
  const poolsConfig = getPoolsConfig(chainId);
  if (!poolsConfig) {
    throw new Error(`No pools found on chain ${chainId}`);
  }
  const validPools = poolsConfig.filter(isLegacyPool).filter((p) => p.stakingToken.symbol !== "BNB" && !p.isFinished).filter((p) => !poolsWithStakingLimit.includes(p.sousId));
  const poolStakingCalls = validPools.map(({ contractAddress }) => {
    return ["hasUserLimit", "poolLimitPerUser", "numberBlocksForUserLimit"].map(
      (method) => ({
        address: contractAddress,
        functionName: method,
        abi: sousChefV2ABI
      })
    );
  }).flat();
  const client = provider({ chainId });
  const poolStakingResultRaw = await client.multicall({
    contracts: poolStakingCalls,
    allowFailure: true
  });
  const chunkSize = poolStakingCalls.length / validPools.length;
  const poolStakingChunkedResultRaw = chunk__default.default(poolStakingResultRaw.flat(), chunkSize);
  return fromPairs2__default.default(
    poolStakingChunkedResultRaw.map((stakingLimitRaw, index) => {
      const hasUserLimit = stakingLimitRaw[0]?.result;
      const stakingLimit = hasUserLimit && stakingLimitRaw[1].result ? new BigNumber7__default.default(stakingLimitRaw[1].result.toString()) : BIG_ZERO;
      const numberBlocksForUserLimit = stakingLimitRaw[2].result ? Number(stakingLimitRaw[2].result) : 0;
      const numberSecondsForUserLimit = numberBlocksForUserLimit * BSC_BLOCK_TIME;
      return [validPools[index].sousId, { stakingLimit, numberSecondsForUserLimit }];
    })
  );
};
var fetchPoolsStakingLimitsByTime = async ({
  poolsWithStakingLimit,
  chainId,
  provider
}) => {
  const poolsConfig = getPoolsConfig(chainId);
  if (!poolsConfig) {
    throw new Error(`No pools found on chain ${chainId}`);
  }
  const validPools = poolsConfig.filter(isUpgradedPool).filter((p) => p.stakingToken.symbol !== "BNB" && !p.isFinished).filter((p) => !poolsWithStakingLimit.includes(p.sousId));
  const poolStakingCalls = validPools.map(({ contractAddress }) => {
    return ["hasUserLimit", "poolLimitPerUser", "numberSecondsForUserLimit"].map(
      (method) => ({
        abi: smartChefABI,
        address: contractAddress,
        functionName: method
      })
    );
  }).flat();
  const client = provider({ chainId });
  const poolStakingResultRaw = await client.multicall({
    contracts: poolStakingCalls,
    allowFailure: true
  });
  const chunkSize = poolStakingCalls.length / validPools.length;
  const poolStakingChunkedResultRaw = chunk__default.default(poolStakingResultRaw.flat(), chunkSize);
  return fromPairs2__default.default(
    poolStakingChunkedResultRaw.map((stakingLimitRaw, index) => {
      const hasUserLimit = stakingLimitRaw[0].result;
      const stakingLimit = hasUserLimit && stakingLimitRaw[1].result ? new BigNumber7__default.default(stakingLimitRaw[1].result.toString()) : BIG_ZERO;
      const numberSecondsForUserLimit = stakingLimitRaw[2].result ? Number(stakingLimitRaw[2].result) : 0;
      return [validPools[index].sousId, { stakingLimit, numberSecondsForUserLimit }];
    })
  );
};
var fetchPoolsStakingLimits = async (params) => {
  const [limitsByTime, limitsByBlock] = await Promise.all([
    fetchPoolsStakingLimitsByTime(params),
    fetchPoolsStakingLimitsByBlock(params)
  ]);
  return {
    ...limitsByTime,
    ...limitsByBlock
  };
};
var fetchPoolsProfileRequirement = async (chainId, provider) => {
  const poolsConfig = getPoolsConfig(chainId);
  if (!poolsConfig) {
    throw new Error(`No pools found on chain ${chainId}`);
  }
  const livePoolsWithV3 = poolsConfig.filter(
    (pool) => (isUpgradedPool(pool) || isLegacyPool(pool) && pool?.version === 3) && !pool?.isFinished
  );
  const poolProfileRequireCalls = livePoolsWithV3.map(({ contractAddress }) => {
    return ["pancakeProfileIsRequested", "pancakeProfileThresholdPoints"].map(
      (method) => ({
        abi: sousChefV3ABI,
        address: contractAddress,
        functionName: method
      })
    );
  }).flat();
  const client = provider({ chainId });
  const poolProfileRequireResultRaw = await client.multicall({
    contracts: poolProfileRequireCalls
  });
  const chunkSize = poolProfileRequireCalls.length / livePoolsWithV3.length;
  const poolStakingChunkedResultRaw = chunk__default.default(poolProfileRequireResultRaw.flat(), chunkSize);
  return fromPairs2__default.default(
    poolStakingChunkedResultRaw.map((poolProfileRequireRaw, index) => {
      const hasProfileRequired = poolProfileRequireRaw[0].result;
      const profileThresholdPoints = poolProfileRequireRaw[1].result ? new BigNumber7__default.default(poolProfileRequireRaw[1].result.toString()) : BIG_ZERO;
      return [
        livePoolsWithV3[index].sousId,
        {
          required: !!hasProfileRequired,
          thresholdPoints: profileThresholdPoints.toJSON()
        }
      ];
    })
  );
};
var getPoolsFactory = (filter) => (chainId) => {
  const poolsConfig = getPoolsConfig(chainId);
  if (!poolsConfig) {
    throw new Error(`Unable to get pools config on chain ${chainId}`);
  }
  return poolsConfig.filter(filter);
};
var getNonBnbPools = getPoolsFactory((pool) => pool.stakingToken.symbol !== "BNB");
var getBnbPools = getPoolsFactory((pool) => pool.stakingToken.symbol === "BNB");
var getNonMasterPools = getPoolsFactory((pool) => pool.sousId !== 0);
var fetchPoolsAllowance = async ({ account, chainId, provider }) => {
  const nonBnbPools = getNonBnbPools(chainId);
  const client = provider({ chainId });
  const allowances = await client.multicall({
    contracts: nonBnbPools.map(
      ({ contractAddress, stakingToken }) => ({
        address: stakingToken.address,
        abi: wagmi.erc20ABI,
        functionName: "allowance",
        args: [account, contractAddress]
      })
    ),
    allowFailure: false
  });
  return fromPairs2__default.default(
    nonBnbPools.map((pool, index) => [pool.sousId, new BigNumber7__default.default(allowances[index].toString()).toJSON()])
  );
};
var fetchUserBalances = async ({ account, chainId, provider }) => {
  const nonBnbPools = getNonBnbPools(chainId);
  const bnbPools = getBnbPools(chainId);
  const tokens = uniq__default.default(nonBnbPools.map((pool) => pool.stakingToken.address));
  const client = provider({ chainId });
  const tokenBalance = await client.multicall({
    contracts: [
      {
        abi: [
          {
            inputs: [{ internalType: "address", name: "addr", type: "address" }],
            name: "getEthBalance",
            outputs: [{ internalType: "uint256", name: "balance", type: "uint256" }],
            stateMutability: "view",
            type: "function"
          }
        ],
        address: "0xcA11bde05977b3631167028862bE2a173976CA11",
        // TODO: Here is multicall address, should extract addresses to a package for multi chain
        functionName: "getEthBalance",
        args: [account]
      },
      ...tokens.map(
        (token) => ({
          abi: wagmi.erc20ABI,
          address: token,
          functionName: "balanceOf",
          args: [account]
        })
      )
    ]
  });
  const [bnbBalance, ...tokenBalancesResults] = tokenBalance;
  const tokenBalances = fromPairs2__default.default(tokens.map((token, index) => [token, tokenBalancesResults[index].result]));
  const poolTokenBalances = fromPairs2__default.default(
    nonBnbPools.map((pool) => {
      if (!tokenBalances[pool.stakingToken.address])
        return null;
      return [pool.sousId, new BigNumber7__default.default(tokenBalances[pool.stakingToken.address].toString()).toJSON()];
    }).filter((p) => Boolean(p))
  );
  const bnbBalanceJson = new BigNumber7__default.default(bnbBalance.result?.toString()).toJSON();
  const bnbBalances = fromPairs2__default.default(bnbPools.map((pool) => [pool.sousId, bnbBalanceJson]));
  return { ...poolTokenBalances, ...bnbBalances };
};
var fetchUserStakeBalances = async ({ account, chainId, provider }) => {
  const nonMasterPools = getNonMasterPools(chainId);
  const client = provider({ chainId });
  const userInfo = await client.multicall({
    contracts: nonMasterPools.map(
      ({ contractAddress }) => ({
        abi: sousChefABI.filter((r) => r.name === "userInfo"),
        address: contractAddress,
        functionName: "userInfo",
        args: [account]
      })
    ),
    allowFailure: false
  });
  return fromPairs2__default.default(
    nonMasterPools.map((pool, index) => [pool.sousId, new BigNumber7__default.default(userInfo[index][0].toString()).toJSON()])
  );
};
var fetchUserPendingRewards = async ({ account, chainId, provider }) => {
  const nonMasterPools = getNonMasterPools(chainId);
  const client = provider({ chainId });
  const res = await client.multicall({
    contracts: nonMasterPools.map(
      ({ contractAddress }) => ({
        abi: sousChefABI.filter((r) => r.name === "pendingReward"),
        address: contractAddress,
        functionName: "pendingReward",
        args: [account]
      })
    ),
    allowFailure: false
  });
  return fromPairs2__default.default(nonMasterPools.map((pool, index) => [pool.sousId, new BigNumber7__default.default(res[index].toString()).toJSON()]));
};

// src/abis/ICakeVaultV2.ts
var cakeVaultV2ABI = [
  {
    inputs: [],
    name: "BOOST_WEIGHT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "BOOST_WEIGHT_LIMIT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DURATION_FACTOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DURATION_FACTOR_OVERDUE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_CALL_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_LOCK_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_LOCK_DURATION_LIMIT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_PERFORMANCE_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WITHDRAW_FEE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WITHDRAW_FEE_PERIOD",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_DEPOSIT_AMOUNT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_LOCK_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_WITHDRAW_AMOUNT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRECISION_FACTOR",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PRECISION_FACTOR_SHARE",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "UNLOCK_FREE_DURATION",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "available",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "boostContract",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "cakePoolPID",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "calculateOverdueFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "calculatePerformanceFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "calculateTotalPendingCakeRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "uint256", name: "_shares", type: "uint256" }
    ],
    name: "calculateWithdrawFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_lockDuration", type: "uint256" }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "freeFeeUsers",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getPricePerFullShare",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_token", type: "address" }],
    name: "inCaseTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "contract IERC20", name: "dummyToken", type: "address" }],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "lastHarvestedTime",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "masterchefV2",
    outputs: [{ internalType: "contract IMasterChefV2", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "operator",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "overdueFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "performanceFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "performanceFeeContract",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "address", name: "_admin", type: "address" }],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_boostContract", type: "address" }],
    name: "setBoostContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_boostWeight", type: "uint256" }],
    name: "setBoostWeight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_durationFactor", type: "uint256" }],
    name: "setDurationFactor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_durationFactorOverdue", type: "uint256" }],
    name: "setDurationFactorOverdue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_user", type: "address" },
      { internalType: "bool", name: "_free", type: "bool" }
    ],
    name: "setFreeFeeUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_maxLockDuration", type: "uint256" }],
    name: "setMaxLockDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_operator", type: "address" }],
    name: "setOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_performanceFee", type: "uint256" }],
    name: "setPerformanceFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_performanceFeeContract", type: "uint256" }],
    name: "setPerformanceFeeContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_treasury", type: "address" }],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_unlockFreeDuration", type: "uint256" }],
    name: "setUnlockFreeDuration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_withdrawFee", type: "uint256" }],
    name: "setWithdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_withdrawFeeContract", type: "uint256" }],
    name: "setWithdrawFeeContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_withdrawFeePeriod", type: "uint256" }],
    name: "setWithdrawFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalBoostDebt",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalLockedAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_user", type: "address" }],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "userInfo",
    outputs: [
      { internalType: "uint256", name: "shares", type: "uint256" },
      { internalType: "uint256", name: "lastDepositedTime", type: "uint256" },
      { internalType: "uint256", name: "cakeAtLastUserAction", type: "uint256" },
      { internalType: "uint256", name: "lastUserActionTime", type: "uint256" },
      { internalType: "uint256", name: "lockStartTime", type: "uint256" },
      { internalType: "uint256", name: "lockEndTime", type: "uint256" },
      { internalType: "uint256", name: "userBoostedShare", type: "uint256" },
      { internalType: "bool", name: "locked", type: "bool" },
      { internalType: "uint256", name: "lockedAmount", type: "uint256" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_shares", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { inputs: [], name: "withdrawAll", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }],
    name: "withdrawByAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawFeeContract",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawFeePeriod",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  }
];

// src/queries/getAddresses.ts
function getCakeFlexibleSideVaultAddress(chainId) {
  return getContractAddress(CAKE_FLEXIBLE_SIDE_VAULT, chainId);
}
function getCakeVaultAddress(chainId) {
  return getContractAddress(CAKE_VAULT, chainId);
}

// src/queries/fetchVaultPublic.ts
var balanceOfAbi = [
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  }
];
var fetchPublicVaultData = async ({
  chainId,
  cakeVaultAddress = getCakeVaultAddress(chainId),
  provider
}) => {
  try {
    const client = provider({ chainId });
    const [sharePrice, shares, totalLockedAmount, totalCakeInVault] = await client.multicall({
      contracts: [
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "getPricePerFullShare"
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "totalShares"
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "totalLockedAmount"
        },
        {
          abi: balanceOfAbi,
          address: tokens.CAKE[chains.ChainId.BSC].address,
          functionName: "balanceOf",
          args: [cakeVaultAddress]
        }
      ],
      allowFailure: true
    });
    const totalSharesAsBigNumber = shares.status === "success" && shares.result ? new BigNumber7__default.default(shares.result.toString()) : BIG_ZERO;
    const totalLockedAmountAsBigNumber = totalLockedAmount.status === "success" && totalLockedAmount.result ? new BigNumber7__default.default(totalLockedAmount.result.toString()) : BIG_ZERO;
    const sharePriceAsBigNumber = sharePrice.status === "success" && sharePrice.result ? new BigNumber7__default.default(sharePrice.result.toString()) : BIG_ZERO;
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      totalLockedAmount: totalLockedAmountAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: totalCakeInVault.result ? new BigNumber7__default.default(totalCakeInVault.result.toString()).toJSON() : "0"
    };
  } catch (error) {
    return {
      totalShares: null,
      totalLockedAmount: null,
      pricePerFullShare: null,
      totalCakeInVault: null
    };
  }
};
var fetchPublicFlexibleSideVaultData = async ({
  chainId,
  cakeVaultAddress = getCakeFlexibleSideVaultAddress(chainId),
  provider
}) => {
  try {
    const client = provider({ chainId });
    const [sharePrice, shares, totalCakeInVault] = await client.multicall({
      contracts: [
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "getPricePerFullShare"
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "totalShares"
        },
        {
          abi: balanceOfAbi,
          address: tokens.CAKE[chains.ChainId.BSC].address,
          functionName: "balanceOf",
          args: [cakeVaultAddress]
        }
      ],
      allowFailure: true
    });
    const totalSharesAsBigNumber = shares.status === "success" ? new BigNumber7__default.default(shares.result.toString()) : BIG_ZERO;
    const sharePriceAsBigNumber = sharePrice.status === "success" ? new BigNumber7__default.default(sharePrice.result.toString()) : BIG_ZERO;
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalCakeInVault: new BigNumber7__default.default((totalCakeInVault.result || "0").toString()).toJSON()
    };
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalCakeInVault: null
    };
  }
};
var fetchVaultFees = async ({
  chainId,
  cakeVaultAddress = getCakeVaultAddress(chainId),
  provider
}) => {
  try {
    const client = provider({ chainId });
    const [performanceFee, withdrawalFee, withdrawalFeePeriod] = await client.multicall({
      contracts: [
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "performanceFee"
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "withdrawFee"
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "withdrawFeePeriod"
        }
      ],
      allowFailure: false
    });
    return {
      performanceFee: Number(performanceFee),
      withdrawalFee: Number(withdrawalFee),
      withdrawalFeePeriod: Number(withdrawalFeePeriod)
    };
  } catch (error) {
    return {
      performanceFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null
    };
  }
};

// src/abis/ICakeFlexibleSideVaultV2.ts
var cakeFlexibleSideVaultV2ABI = [
  {
    inputs: [],
    name: "MAX_PERFORMANCE_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WITHDRAW_AMOUNT_BOOSTER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WITHDRAW_FEE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WITHDRAW_FEE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_DEPOSIT_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_WITHDRAW_AMOUNT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MIN_WITHDRAW_AMOUNT_BOOSTER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "available",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "cakePool",
    outputs: [
      {
        internalType: "contract ICakePool",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getPricePerFullShare",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address"
      }
    ],
    name: "inCaseTokensGetStuck",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "performanceFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address"
      }
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_performanceFee",
        type: "uint256"
      }
    ],
    name: "setPerformanceFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_treasury",
        type: "address"
      }
    ],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawAmountBooster",
        type: "uint256"
      }
    ],
    name: "setWithdrawAmountBooster",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawFee",
        type: "uint256"
      }
    ],
    name: "setWithdrawFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_withdrawFeePeriod",
        type: "uint256"
      }
    ],
    name: "setWithdrawFeePeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "staking",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "treasury",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastDepositedTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "cakeAtLastUserAction",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "lastUserActionTime",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_shares",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawAmountBooster",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "withdrawFeePeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

// src/queries/fetchVaultUser.ts
var fetchVaultUser = async ({ account, chainId, provider }) => {
  try {
    const cakeVaultAddress = getCakeVaultAddress(chainId);
    const client = provider({ chainId });
    const [userContractResponse, currentPerformanceFee, currentOverdueFee] = await client.multicall({
      contracts: [
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "userInfo",
          args: [account]
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "calculatePerformanceFee",
          args: [account]
        },
        {
          abi: cakeVaultV2ABI,
          address: cakeVaultAddress,
          functionName: "calculateOverdueFee",
          args: [account]
        }
      ],
      allowFailure: false
    });
    return {
      isLoading: false,
      userShares: new BigNumber7__default.default(userContractResponse[0].toString()).toJSON(),
      lastDepositedTime: userContractResponse[1].toString(),
      lastUserActionTime: userContractResponse[3].toString(),
      cakeAtLastUserAction: new BigNumber7__default.default(userContractResponse[2].toString()).toJSON(),
      userBoostedShare: new BigNumber7__default.default(userContractResponse[6].toString()).toJSON(),
      locked: userContractResponse[7],
      lockEndTime: userContractResponse[5].toString(),
      lockStartTime: userContractResponse[4].toString(),
      lockedAmount: new BigNumber7__default.default(userContractResponse[8].toString()).toJSON(),
      currentPerformanceFee: new BigNumber7__default.default(currentPerformanceFee.toString()).toJSON(),
      currentOverdueFee: new BigNumber7__default.default(currentOverdueFee.toString()).toJSON()
    };
  } catch (error) {
    return {
      isLoading: true,
      userShares: "",
      lastDepositedTime: "",
      lastUserActionTime: "",
      cakeAtLastUserAction: "",
      userBoostedShare: "",
      lockEndTime: "",
      lockStartTime: "",
      locked: false,
      lockedAmount: "",
      currentPerformanceFee: "",
      currentOverdueFee: ""
    };
  }
};
var fetchFlexibleSideVaultUser = async ({
  account,
  chainId,
  provider
}) => {
  try {
    const userContractResponse = await await provider({ chainId }).readContract({
      abi: cakeFlexibleSideVaultV2ABI,
      address: getCakeFlexibleSideVaultAddress(chainId),
      functionName: "userInfo",
      args: [account]
    });
    return {
      isLoading: false,
      userShares: new BigNumber7__default.default(userContractResponse[0].toString()).toJSON(),
      lastDepositedTime: userContractResponse[1].toString(),
      lastUserActionTime: userContractResponse[3].toString(),
      cakeAtLastUserAction: new BigNumber7__default.default(userContractResponse[2].toString()).toJSON()
    };
  } catch (error) {
    return {
      isLoading: true,
      userShares: "",
      lastDepositedTime: "",
      lastUserActionTime: "",
      cakeAtLastUserAction: ""
    };
  }
};

exports.BLOCKS_PER_DAY = BLOCKS_PER_DAY;
exports.BLOCKS_PER_YEAR = BLOCKS_PER_YEAR;
exports.BOOSTED_POOLS_CONFIG_BY_CHAIN = BOOSTED_POOLS_CONFIG_BY_CHAIN;
exports.BOOST_WEIGHT = BOOST_WEIGHT;
exports.BSC_BLOCK_TIME = BSC_BLOCK_TIME;
exports.CAKE_FLEXIBLE_SIDE_VAULT = CAKE_FLEXIBLE_SIDE_VAULT;
exports.CAKE_VAULT = CAKE_VAULT;
exports.CAKE_VAULT_SUPPORTED_CHAINS = CAKE_VAULT_SUPPORTED_CHAINS;
exports.DURATION_FACTOR = DURATION_FACTOR;
exports.ICAKE = ICAKE;
exports.LIVE_POOLS_CONFIG_BY_CHAIN = LIVE_POOLS_CONFIG_BY_CHAIN;
exports.MAX_LOCK_DURATION = MAX_LOCK_DURATION;
exports.ONE_WEEK_DEFAULT = ONE_WEEK_DEFAULT;
exports.POOLS_CONFIG_BY_CHAIN = POOLS_CONFIG_BY_CHAIN;
exports.PoolCategory = PoolCategory;
exports.SECONDS_IN_YEAR = SECONDS_IN_YEAR;
exports.SUPPORTED_CHAIN_IDS = SUPPORTED_CHAIN_IDS;
exports.UNLOCK_FREE_DURATION = UNLOCK_FREE_DURATION;
exports.VaultKey = VaultKey;
exports.cakeFlexibleSideVaultV2ABI = cakeFlexibleSideVaultV2ABI;
exports.cakeVaultV2ABI = cakeVaultV2ABI;
exports.checkIsBoostedPool = checkIsBoostedPool;
exports.fetchFlexibleSideVaultUser = fetchFlexibleSideVaultUser;
exports.fetchPoolsAllowance = fetchPoolsAllowance;
exports.fetchPoolsProfileRequirement = fetchPoolsProfileRequirement;
exports.fetchPoolsStakingLimits = fetchPoolsStakingLimits;
exports.fetchPoolsStakingLimitsByBlock = fetchPoolsStakingLimitsByBlock;
exports.fetchPoolsTimeLimits = fetchPoolsTimeLimits;
exports.fetchPoolsTotalStaking = fetchPoolsTotalStaking;
exports.fetchPublicFlexibleSideVaultData = fetchPublicFlexibleSideVaultData;
exports.fetchPublicVaultData = fetchPublicVaultData;
exports.fetchUserBalances = fetchUserBalances;
exports.fetchUserPendingRewards = fetchUserPendingRewards;
exports.fetchUserStakeBalances = fetchUserStakeBalances;
exports.fetchVaultFees = fetchVaultFees;
exports.fetchVaultUser = fetchVaultUser;
exports.getBoostedPoolApr = getBoostedPoolApr;
exports.getBoostedPoolConfig = getBoostedPoolConfig;
exports.getBoostedPoolsConfig = getBoostedPoolsConfig;
exports.getCakeFlexibleSideVaultAddress = getCakeFlexibleSideVaultAddress;
exports.getCakeVaultAddress = getCakeVaultAddress;
exports.getContractAddress = getContractAddress;
exports.getLivePoolsConfig = getLivePoolsConfig;
exports.getPoolAprByTokenPerBlock = getPoolAprByTokenPerBlock;
exports.getPoolAprByTokenPerSecond = getPoolAprByTokenPerSecond;
exports.getPoolContractBySousId = getPoolContractBySousId;
exports.getPoolsConfig = getPoolsConfig;
exports.getSmartChefChefV2Contract = getSmartChefChefV2Contract;
exports.getSousChefBNBContract = getSousChefBNBContract;
exports.getSousChefV2Contract = getSousChefV2Contract;
exports.isCakeVaultSupported = isCakeVaultSupported;
exports.isLegacyPool = isLegacyPool;
exports.isPoolsSupported = isPoolsSupported;
exports.isUpgradedPool = isUpgradedPool;
exports.smartChefABI = smartChefABI;
exports.sousChefABI = sousChefABI;
exports.sousChefBnbABI = sousChefBnbABI;
exports.sousChefV2ABI = sousChefV2ABI;
exports.sousChefV3ABI = sousChefV3ABI;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map
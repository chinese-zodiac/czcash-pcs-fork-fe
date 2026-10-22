# 🥞 Pancake Frontend

<p align="center">
  <a href="https://pancakeswap.finance">
      <img src="https://pancakeswap.finance/logo.png" height="128">
  </a>
</p>

This project contains the main features of the pancake application.

If you want to contribute, please refer to the [contributing guidelines](./CONTRIBUTING.md) of this project.

## Documentation

- [Info](doc/Info.md)
- [Cypress tests](doc/Cypress.md)

> Install dependencies using [pnpm](https://pnpm.io)

## `apps/web`

<details>
<summary>
How to start
</summary>

```sh
pnpm i
```

start the development server

```sh
pnpm dev
```

build with production mode

```sh
pnpm build

# start the application after build
pnpm start
```

</details>

## `apps/aptos`

<details>
<summary>
How to start
</summary>

```sh
pnpm dev:aptos
```

```sh
pnpm build:aptos
```

</details>

## `apps/blog`

<details>
<summary>
How to start
</summary>

```sh
pnpm dev:blog
```

```sh
pnpm build:blog
```

</details>

## `apps/games`

<details>
<summary>
How to start
</summary>

```sh
pnpm dev:games
```

```sh
pnpm build:games
```

</details>

## Packages

| Package                                    | Description                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [sdk](/packages/swap-sdk)                  | An SDK for building applications on top of Pancakeswap                                                      |
| [aptos-swap-sdk](/packages/aptos-swap-sdk) | Aptos version of Swap SDK                                                                                   |
| [swap-sdk-core](/packages/swap-sdk-core)   | Swap SDK Shared code                                                                                        |
| [wagmi](/packages/wagmi)                   | Extension for [wagmi](https://github.com/wagmi-dev/wagmi), including bsc chain and binance wallet connector |
| [awgmi](/packages/awgmi)                   | Connect to Aptos with similar wagmi React hooks.                                                            |
| [smart-router](/packages/smart-router)     | An SDK for getting best trade routes.                                                                       |
| [multicall](/packages/multicall)           | Enhanced multicall sdk to safely make multicalls within the gas limit.                                      |
| [v3-sdk](/packages/v3-sdk)                 | An SDK for building applications on top of Pancakeswap V3.                                                  |

## Production runtime

The root Dockerfile pins Node 24.22.1 Bookworm by digest and pnpm 8.15.9.
Build from the repository root and run the existing Next.js SSR server on
`PORT` (default 3000); the final process runs as the Node user. The image
healthcheck verifies the patched Node 24 floor and an HTTP response from `/`.

Coolify must use the Dockerfile build pack and preserve the application's
existing build-time and runtime variables. Its `inject_build_args_to_dockerfile`
setting is enabled, so build-time `NEXT_PUBLIC_*` values reach the Next.js
build. The two tracked web dotenv defaults are retained; local/private dotenv
files, keys, Git metadata and host dependencies are excluded. No dependency
versions or application behavior change. Node 24 requires the `with` JSON
import attribute in `next.config.mjs`.

## Conditional dependency security patches (October 2026)

The Node runtime update is separate from these legacy dependency fixes. Pnpm
overrides raise elliptic to 6.6.1, sha.js to 2.4.12 and form-data to 3.0.5/4.0.6
within their existing major lines. The existing Ledger patch is preserved.
Swiper 11.0.5 receives the upstream forbidden-key filter fix from commit
`d3e663322a13043ca63aaba235d8cf3900e0c8cf` through a pnpm patch covering all 12
retained distribution copies, preserving the current wallet-modal UI API.

Run `node scripts/test_security_dependency_patches.mjs` in the built image.
It checks the actual ethers-resolved elliptic with RFC6979 vectors and nonce
input regressions, wallet recovery through independent viem, hash vectors and
malformed inputs, multipart randomness/header escaping, and the Swiper
prototype attack in six ESM/browser distribution variants. These fixtures
use public known keys and no RPC, wallet, or application credentials.

The monorepo audit includes 33 workspace importers. Version-based audit output
still flags the backported Swiper and Next copies in ancillary workspaces.
The serving app is Next 13.5.11 (middleware advisory already fixed), on Linux
(Windows advisory does not apply), with no Sharp/libheif/libvips installed
(the AVIF advisory's native path is absent). These are scoped findings, not
a claim that every legacy high advisory is fixed; broader framework/SDK
maintenance remains separately tracked. Do not remove the patches or add
native image optimizers without reevaluating those advisories.

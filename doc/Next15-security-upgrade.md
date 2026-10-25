# Next.js 15 compatibility update

The web app and its internal Next.js packages use Next.js 15.5.28. Sentry
uses SDK 8.55.0 with its functional browser integrations and server/edge
instrumentation entry point. OpenTelemetry API is pinned to 1.9.0 to keep
Next.js and Sentry on the same supported API instance.

Next.js tracing settings move from `experimental` to their stable top-level
fields. Removed Next.js options are omitted. The optional geography/IP fields
remain hosting-adapter inputs; this update does not add trust in request
headers. Resetting user state uses Sentry's `setUser(null)` API, including a
regression test that checks identity and local-storage cleanup with the real
SDK.

React 18, Wagmi, Viem, Ethers, wallet integrations, contract addresses, and
transaction logic retain their existing versions and behavior. The lockfile
contains no remaining Next.js 13 package or Sentry 7 package.

## Validation

- Frozen-lockfile installation and the full 14-task production build pass.
- An isolated local container serves the home, swap, liquidity, restriction,
  and buy-crypto pages, the expected missing-page response, and referenced
  JavaScript/CSS assets. This is ordinary HTTP coverage; it does not prove
  browser wallet interactions or production deployment.
- The existing 732-test suite was compared with the pre-update source and
  dependencies under identical isolated, no-network container conditions.
  Both have the same 22 failed assertions. A workstation run has eight failed
  assertions: four live-RPC timeouts and four menu/Bad Rabbits expectations;
  all eight also fail in the unchanged baseline. The new user-reset regression
  passes separately. Existing failures were not changed or skipped.

The existing build configuration skips TypeScript validation and linting.
A successful production build therefore does not represent a clean whole-app
type or lint check. Legacy dependency advisories outside this migration remain
separate remediation work; this update does not claim an advisory-free tree.

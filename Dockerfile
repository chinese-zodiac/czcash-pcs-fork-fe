FROM node:24.22.1-bookworm-slim@sha256:55fb5f5a527ea2c5c4a95f963e48ef90aa38c7b346054fdc8ee9957a2b55d205 AS base
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates && rm -rf /var/lib/apt/lists/*

FROM base AS build
WORKDIR /app
# Match the repository's package-manager pin. Git metadata is excluded below;
# developer hooks do not run while assembling an image without a Git checkout.
ENV HUSKY=0 CYPRESS_INSTALL_BINARY=0
RUN npm install --global pnpm@8.15.9 --ignore-scripts --no-audit --no-fund && npm cache clean --force
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM base
WORKDIR /app
COPY --from=build /usr/local/lib/node_modules/pnpm /usr/local/lib/node_modules/pnpm
COPY --from=build /usr/local/bin/pnpm /usr/local/bin/pnpx /usr/local/bin/
COPY --from=build --chown=node:node /app /app
ENV NODE_ENV=production PORT=3000
USER node
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=90s --retries=3 CMD ["node", "-e", "const p=Number(process.env.PORT);const [major,minor,patch]=process.versions.node.split('.').map(Number);if(major!==24||minor<22||(minor===22&&patch<1)||!Number.isInteger(p)||p<1||p>65535)process.exit(1);fetch('http://127.0.0.1:'+p+'/').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"]
CMD ["pnpm", "start"]

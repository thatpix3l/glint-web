FROM docker.io/oven/bun:1 AS bundler
WORKDIR /workdir
COPY . .
RUN bun install --production
RUN bun build ./src/index.html --outdir ./build --production

FROM scratch
COPY --from=bundler /workdir/build /var/www

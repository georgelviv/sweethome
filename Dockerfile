FROM oven/bun:1-alpine

WORKDIR /app

COPY ./package.json ./bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

EXPOSE 9501

CMD bun run server
# base pnpm stage
FROM node:lts-alpine as pnpm
ARG NPM_AUTH_TOKEN

COPY .npmrc .

RUN npm i -g pnpm

# Build stage
FROM pnpm as workspace
ARG NPM_AUTH_TOKEN

WORKDIR app/

COPY container ./container
COPY src ./src
COPY package.json .
COPY pnpm-lock.yaml .
COPY .npmrc .
COPY babel.config.json .
COPY webpack.common.js .
COPY webpack.prod.js .

RUN pnpm i --frozen-lockfile &&\
    pnpm build

# Deploy stage
FROM nginx:latest

COPY --from=workspace /app/dist/ /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf
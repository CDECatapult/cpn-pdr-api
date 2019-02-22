#-------------------------------------------------------------------------------
FROM node:10.15.1-alpine AS base

WORKDIR /cpn-pdr-api

#-------------------------------------------------------------------------------
FROM base AS dependencies

COPY package.json .
COPY yarn.lock .

# Install dependencies for all packages
RUN yarn --pure-lockfile --non-interactive

COPY src src

#-------------------------------------------------------------------------------
FROM dependencies AS testing

# Lint source files
COPY .eslintrc.json .
COPY .prettierrc .
RUN yarn lint

# Test project
COPY test.js .
RUN yarn test

#-------------------------------------------------------------------------------
FROM base AS release

COPY --from=dependencies /cpn-pdr-api/package.json .
COPY --from=dependencies /cpn-pdr-api/yarn.lock .

# Install production packages and remove cache folder straignt away
RUN yarn --production --pure-lockfile --non-interactive --cache-folder ./ycache; rm -rf ./ycache

COPY --from=dependencies /cpn-pdr-api/src src

ENV NODE_ENV production
ENV PATH "./node_modules/.bin:${PATH}"

CMD [ "micro" ]

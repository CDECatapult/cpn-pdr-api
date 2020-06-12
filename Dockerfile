FROM node:12.14.0-alpine

WORKDIR /cpn-pdr-api

COPY package.json .
COPY yarn.lock .

# Install production packages and remove cache folder straignt away
RUN yarn --production --pure-lockfile --non-interactive --cache-folder ./ycache; rm -rf ./ycache

COPY src src

ENV NODE_ENV production

CMD [ "./node_modules/.bin/micro" ]

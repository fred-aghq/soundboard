FROM node:19.7-alpine3.16

RUN npm i --global vite serve
COPY ./frontend /app

WORKDIR /app
# RUN yarn install
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

# RUN yarn build

CMD [ "yarn", "run", "dev" ]

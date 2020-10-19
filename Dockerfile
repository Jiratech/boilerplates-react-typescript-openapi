FROM openapitools/openapi-generator:cli-v4.3.0

WORKDIR '/opt/openapi-generator/modules/openapi-generator-cli/target'
RUN java -jar openapi-generator-cli.jar generate -i https://raw.githubusercontent.com/Jiratech/boilerplate-openapi-schema/master/schema.json -g typescript-axios -o /openApi --model-name-prefix=I

FROM node:14-slim

ARG REACT_APP_SENTRY_DNS

ARG REACT_APP_API_HOST

WORKDIR '/app'

COPY package.json .

RUN yarn

COPY . .

RUN rm -rf src/openApi

COPY --from=0 /openApi src/openApi

RUN yarn build

RUN mv build/ ../ 

RUN rm -r ./*

RUN mv ../build ./

RUN npm install -g serve

CMD serve -s build -l 80
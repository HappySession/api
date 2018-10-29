#Base image
FROM node:carbon

#Labels and Credits
LABEL \
    name="api" \
    author="Happy Session <happy@happysession.org>" \
    maintainer="Happy Session <happy@happysession.org>" \
    description="Dockerize API service for forecasts data (powered by NestJS)"

WORKDIR /api
COPY package.prod.json package.json
COPY package-lock.json package-lock.json
ADD ./dist ./dist
RUN npm install --production
EXPOSE 3000
CMD [ "npm", "start"]
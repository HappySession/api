# REST API for data store in MongoDB

This service is based on **NodeJS** and **NestJS** framework.

You can use in a local mode with the **docker-compose** file.

You can share data volume with the **extractor** project for locally test

    volumes:
      - SHARED_DIRECTORY/data:/data/db

To startup and test locally

    docker-compose up -d --build
    #and
    docker-compose up

**REST API** : an example for NOAA/ww3 data is available on http://120.0.0.1:3000/ww3

An **Swagger** is available on http://120.0.0.1:3000/api

# TODO

- define APIs for WW3 and GFS
- secure NodeJS
- add authentification
- add roles management
- handle token access management and quota control
- secure secrets for Mongo Connection when it will be secure

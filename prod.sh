#!/usr/bin/env bash
git pull
export PROJECT_DOMAIN=itpassion.info
./npm.sh install
./npm.sh run-script prod
docker-compose up -d server

#!/usr/bin/env bash
git pull
export PROJECT_DOMAIN=itpassion.info
./npm.sh install
./npm.sh run-script build
docker-compose up -d server

#!/usr/bin/env bash
export PROJECT_DOMAIN=localhost
./npm.sh run-script build
docker-compose up -d server

./npm.sh install
./npm.sh run-script build
./npm.sh run-script prod
docker-compose up -d server
./create-component.sh 
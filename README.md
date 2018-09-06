./npm.sh install
./npm.sh run-script build
docker-compose up -d server
./create-component.sh 
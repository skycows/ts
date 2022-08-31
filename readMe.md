# 실행문

```sh
npm init --y
npm i -D typescript ts-node @type/node
npm i -D typescript ts-node @types/node
npm i -S chance
npm i -D @type/chance
npm i -D @types/chance
npm i -S mkdirp rimraf
npm i -D @types/mkdirp @types/rimraf
tsc --init
npm i -g ts-node
npm i -D @types/node
npm i -D typescript
```

# mongo db

```sh
 docker pull mongo
 docker pull mongo
 docker run --name mongodb-container -v ~/data:/data/db -d -p 27017:27017 mongo
 docker exec -it mongodb-container bash
 npm i -S mongodb
 npm -i -D @types/mongodb
 npm i -D @types/mongodb
 docker exec -it mongodb-container bash
 ts-node src/insert-csv-to-mongo.ts
```

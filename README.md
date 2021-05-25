## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Database Migrations

```bash
# typeorm-cli is required

# create migation
$ npm run typeorm migration:create -n {MIGRATION_NAME}

# run migations
$ npm run typeorm migration:run

# undo migrations
$ npm run typeorm migration:revert
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Grocery Tech

## Pre reqs

- node.js
- mysql server with GroceryTech database setup

## Setup

```bash
cd api
npm install
cd ../client
npm install
```

## Running

The client and api are run as seperate servers. In two terminal windows run:

#### Server:

```bash
cd api
node run start
```

#### Client:

```bash
cd client
node run start
```

## Configuring Database

The api expects the database server to be running with:

```js
{
  host: 'localhost',
  port: 3306,
  user: 'root',
  database: 'GroceryTech'
}
```

Note: There is no password. These can be changed by modifying `api/src/db/db.js`.

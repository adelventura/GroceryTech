# Grocery Tech

## All commands and softwares for a Mac

## Pre reqs to have installed

- node.js
- DBngin
-TablePlus
-mysql

## Setup

Open DBngin and click the plus button in the top right. Name the new server "GroceryTech" and change the service to "mysql", then hit create. Once it is created, hit start next to its name. Once it turns green, double click on the GroceryTech line, and a new window should open in TablePlus. Once in tableplus, click the "sql" button near the top left, and input the GroceryTech.sql file containing all the table statements. Then, where it says "Run Current" click the drop down next to it and run all. Next hit "Command K" and open "Grocery Tech". Now, hit "Command K" again and open mysql. In the SQL tab of TablePlus, click on the sql button in the top left again, and enter the following commands:

update user set 
plugin='mysql_native_password' where user='root';
flush PRIVILEGES;
quit;

Now you can click run all again, and the sql server should be set up.

Next, create a folder on your desktop and locate this folder in terminal and enter the following command in order to open our repository on github:

git clone  --- PUT LINK HERE---

Now navigate into the GroceryTech folder, and run the following commands.

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
npm run start
```

#### Client:

```bash
cd client
npm run start
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

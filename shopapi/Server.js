const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(cors())

app.use(bodyParser.json());

const db = knex({
    client: 'pg',
    connection: {
        // connectionString: process.env.DATABASE_URL,
        // ssl: true,
      // host : 'postgresql-amorphous-40499',
      // user : 'postgres',
      // password : 'test',
      // database : 'smartbrain'
    }
  });

  app.get('/', (req, res) =>{
      db.select('id', 'item', 'price', 'sales').from('katalog')
      .then(data =>{
          res.json(data)
      })
  })
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = knex({
     client: 'pg',
     connection: {
    //     // connectionString: process.env.DATABASE_URL,
    //     // ssl: true,
      // host : 'postgresql-amorphous-40499',
      host : '127.0.0.1',
      user : 'postgres',
      password : 'test',
      database : 'shop'
    }
});

  app.get('/', (req, res) =>{
      db.select('id', 'item', 'price', 'sales').from('items')
      .then(data =>{
          res.json(data)
      })
  })

console.log('10 4 dinosaur')
app.listen(3000);

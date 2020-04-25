// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();

// app.set('view engine', 'ejs');

// app.use(bodyParser.urlencoded({ extended: false }));

// // Connect to MongoDB
// mongoose
//   .connect(
//     'mongodb://mongo:27017/docker-test',
//     { useNewUrlParser: true }
//   )
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// const Item = require('./models/Item');

// app.get('/', (req, res) => {
//   console.log('req', req);
//   Item.find()
//     .then(items => res.render('index', { items }))
//     .catch(err => res.status(404).json({ msg: 'No items found' }));
// });

// app.post('/item/add', (req, res) => {
//   const newItem = new Item({
//     name: req.body.name
//   });

//   newItem.save().then(item => res.redirect('/'));
// });

// const port = 3000;

// app.listen(port, () => console.log('Server running...'));

// 在 npm run start 設定 node app.js

const express = require('express');
const app = express(); //建立一個Express伺服器

// const mysql = require('mysql');
// const db = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '1234',
//   database : 'stylish'
// })
// db.connect((err) => {
//   if(err) console.log(err);
//   else console.log('Mysql connected~~~~')
// })

const PORT = 3000

app.get('/',(req,res)=>{
  res.send('Hello Node !')
})

// app.get('/testmysql' , (req,res) =>{
//   db.query('select * from product_object', (error , results)=>{
//     if(error) console.log(error);
//     res.send(results)
//   })
// })

// app.get('/database' , (req,res) =>{
//   db.query('SHOW DATABASES', (error , results)=>{
//     if(error) console.log(error);
//     res.send(results)
//   })
// })

app.listen(PORT); //告訴server聽取3000這個Port

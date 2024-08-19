// const mysql = require('mysql')
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Shrey@12345',
//   database: 'login_app'
// })

// connection.connect()
// var post  = {username: "kakdsakdsa", password: "Hello MySQL"};
// var query = connection.query('INSERT INTO USER SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
// });
// console.log(query.sql); 

// connection.end()



const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const db = mysql.createConnection({
       host: "localhost",
       user:"root",
       password:"Shrey@12345",
       database:"login_app",  
});

app.post('/login', (req, res) => {
   const sql = 'INSERT INTO USER SET ?';
   console.log((req.body.email))
   var post  = {username: (req.body.email), password: (req.body.password)};
   db.query(sql,post, (err, data) => {
       if(err) res.json(err);
   });
});
app.get('/', (req, res) => {
        return res.json("240");
 });

app.post('/login2', (req, res) => {
    const sql = 'SELECT password from USER where username=?';
    console.log((req.body.email));
    var pren=((req.body.email));
    //const sql='SELECT * from user'
    db.query(sql,pren, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    });
 });

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
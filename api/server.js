const express = require ('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require ('./DB.js')
const mongoose = require ('mongoose');


const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;

mongoose.connect(config.DB, {useNewUrlParser: true }).then(
    ()=> {console.log('Connected to database')},
    err => {console.log('No connection to database' + err)}
);



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(PORT, ()=> console.log('Server is running: ', PORT));



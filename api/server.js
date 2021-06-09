const express = require ('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require ('mongoose');
const config = require ('./DB.js')
const businessRoute = require('./business.route');

const app = express();
const PORT = 4000;


mongoose.Promise = global.Promise;

mongoose.connect(config.DB, {useNewUrlParser: true })
    .then(()=> {console.log('Connected to database')},
    err => {console.log('No connection to database' + err)}
);

// Only for test
// app.get("/hello", (req, res, next) => {
//     res.end("Hello world!");
// });



app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

app.use('/business', businessRoute);


app.listen(PORT, ()=> console.log('Server is running on port: ', PORT));

//https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/
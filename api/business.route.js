const express = require('express');

const businessRoutes = express.Router();

let Business = require('./business.model')

//define store Route
businessRoutes.route('/add').post(function(req, res) {
    let business = new Business(req.body);
    business.save()
      .then(business => {
          res.status(200).json({'business': 'business successfully added'});
      })
      .catch(err => {
          res.status(400).send('impossible to save to database')
      });
});

// Define get data(index tai listaus) route
businessRoutes.route('/').get((res, req)=>{
    Business.find((err, businesses)=>{
        if (err) {
            console.log(err)
        } else {
            res.json(businesses)
        }
    });
});

//define edit route

businessRoutes.route('/edit/:id').get((res, req)=>{
    Business.find((err, businesses)=>{
        if (err) {
            console.log(err)
        } else {
            res.json(businesses)
        }
    });
});

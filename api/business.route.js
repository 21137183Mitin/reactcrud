const express = require('express');
const businessRoutes = express.Router();

// get the Business model routes module list
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

// Define get_data from DB (index or listaus) route
businessRoutes.route('/').get((res, req)=>{
    Business.find((err, businesses)=>{
        if (err) {
            console.log(err)
        } else {
            res.json(businesses)
        }
    });
});

//define edit_route
businessRoutes.route('/edit/:id').get((res, req)=>{
    let id = req.params.id;                     // ????
    Business.findById(id, (err, business)=>{
        res.json(businesses)
    });
});

businessRoutes.route('/update:id').get((req, res)=> {
    Business.findById(req.params.id, (err, business)=> {
        if (!business) {
            res.status(404).send('Information not found')
        } else {
            console.log(req.body)                           // what inside
            business.person_name = req.body.person_name;
            business.person_company = req.body.person_company;
            business.person_number = req.body.person_number;
        }
    })
})

//define delete / remove / destroy route
businessRoutes.route('/delete:id').get((res, req)=> {
    Business.findById(req.params.id,(err, business)=> {
        if(err) res.json(err);
        else res.json('Removal successful')
    });
});

module.exports = businessRoutes;
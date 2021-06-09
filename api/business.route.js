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

// Defined get data(index or listing) route
businessRoutes.route('/').get((req, res)=>{ // confused req and res in places
    Business.find((err, businesses)=>{
        if (err) {
            console.log(err)
        } else {
            res.json(businesses)
        }
    });
});

//define delete / remove / destroy route
businessRoutes.route('/delete/:id').get((req, res)=> {
    Business.findOneAndRemove({_id: req.params.id},(err, business)=> {
        if(err) {
            res.json(err)
        } else {
            res.json('Successfully removed')
        }
    });
});







// Defined edit route
businessRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Business.findById(id, function (err, business){
        res.json(business);
    });
  });
  
//  Defined update route
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.person_name = req.body.person_name;
        business.business_name = req.body.business_name;
        business.business_guest_number = req.body.business_guest_number;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});  


module.exports = businessRoutes;
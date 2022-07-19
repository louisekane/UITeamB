const express = require('express')
const router = express.Router()
const jobRoleData = require('./jobRoleData.js')
const competencyData = require('./competencyData.js')

router.get('/home', (req, res) => {
  res.render('homeView');
});

router.get('/jobRoles', async (req, res) => {

    res.render('jobRolesView', {
      jobRoles: await jobRoleData.getJobRoles()
    }
    ); 
  
  });

module.exports = router

router.get('/competencies/:bandName', async (req, res) => {
  var bandName = req.params.bandName;
  res.render('competenciesView', {
    competencies: await competencyData.getCompetencies(bandName)
  }
  ); 

});

module.exports = router

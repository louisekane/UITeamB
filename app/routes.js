const express = require('express')
const router = express.Router()
const jobRoleData = require('./jobRoleData.js')

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

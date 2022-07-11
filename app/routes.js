const express = require('express')
const router = express.Router()
const jobRoleData = require('./jobRoleData.js')

router.get('/jobRoles', async (req, res) => {

    res.render('jobRolesView', {
      jobRoles: await jobRoleData.getJobRoles()
    }
    ); 
  
  });

router.get('/home', (req, res) => {
  res.render('homeView');
});

module.exports = router

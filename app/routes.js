const express = require('express')
const router = express.Router()
const jobRoleData = require('./jobRoleData.js')

router.get('/home', (req, res) => {
  res.render('homeView');
});

router.get('/jobRoles', async (req, res) => {

  res.render('jobRolesView', {
    jobRoles: await jobRoleData.getJobRoles()
  }); 
});

router.get('/jobResponsibility/:roleId', async (req, res) => {
  res.render('jobResponsibility', {
    jobResponsibilty: await jobRoleData.getJobResponsibility(req.params.roleId)
  })
});

module.exports = router

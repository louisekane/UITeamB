const express = require('express')
const router = express.Router()
const jobRoleData = require('./jobRoleData.js')

router.get('/', async (req, res) => {     
  res.redirect('/homeView') 
});

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

router.get('/jobRolesAdmin', async (req, res) => {
  res.render('jobRolesViewAdmin', {
    jobRoles: await jobRoleData.getJobRoles()
  }); 
});

//router.delete('/adminDelete', async (req, res) => {
//  res.render('jobRolesViewAdmin', {
//    jobRoles: await jobRoleData.deleteRole(req.params.roleId)
//  }); 
//  console.log(req.params.roleId)
//});

router.get('/adminDelete/:roleId', async (req, res) => {     
  res.redirect('/jobRolesAdmin') 
  console.log(req.params.roleId)
  await jobRoleData.deleteRole(req.params.roleId)
});

module.exports = router

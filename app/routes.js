const express = require('express')
const router = express.Router()
const userdata = require('./userdata')
const jobRoleData = require('./jobRoleData.js')
const userValidator = require('./validators/userValidator')
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

router.post('/registeruser' , async (req, res) => {
    let error = userValidator.validateUser(req.body)

    if (error) {
        res.locals.errormessage = error
        return res.render('registration', req.body);
    } else {
        try {
            await userdata.createUser(req.body);
            res.redirect('/login');
        } catch (e) {
            res.locals.errormessage = e
            res.render('registration', req.body)
        }
    }
});

router.get('registration', async (req, res) => {
    res.render("registration");
});

router.get('/jobResponsibility/:roleId', async (req, res) => {
  res.render('jobResponsibility', {
    jobResponsibilty: await jobRoleData.getJobResponsibility(req.params.roleId)
  })
});

module.exports = router

router.get('/competencies/:bandName', async (req, res) => {
  res.render('competenciesView', {
    competencies: await competencyData.getCompetencies(req.params.bandName)
  }
  ); 

});

module.exports = router

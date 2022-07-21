const express = require('express')
const router = express.Router()
const userdata = require('./userdata')
const jobRoleData = require('./jobRoleData.js')
const userValidator = require('./validators/userValidator')
const competencyData = require('./competencyData.js')

router.get('/', async (req, res) => {     
  res.redirect('/homeView') 
});

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
    let error = userValidator.validateNewUser(req.body)

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

router.get('/registration', async (req, res) => {
    res.render("registration");
});

router.get('/login', async (req, res) => {
    res.render("login");
});

router.post('/login-user' , async (req, res) => {
    let error = userValidator.validateExistingUser(req.body)

    if (error) {
        res.locals.errormessage = error
        return res.render('login', req.body);
    } else {
        try {
            var user = req.body;
            var rememberMe = req.body.rememberMe[1];
            var response = await userdata.loginUser(user, rememberMe);

            res.cookie('token', response.data.token, {maxAge: response.data.expiry})
            res.cookie('token_id', response.data.userId, {maxAge: response.data.expiry})

            res.redirect('/login-confirmation');
        } catch (e) {
            res.locals.errormessage = e
            res.render('login', req.body)
        }
    }
});

router.get('/logout-user', async (req, res) => {
    res.clearCookie('token')
    res.clearCookie('token_id')
    res.redirect("login");
});


router.get('/login-confirmation', async (req, res) => {
    if (req.cookies.token && req.cookies.token_id) {
        var tokenRole = req.cookies.token.split('_')[0];
        res.render("login-confirmation", {tokenRole: tokenRole, tokenId: req.cookies.token_id});
    } else {
        res.redirect('/login');
    }
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

router.get('/adminDelete/:roleId', async (req, res) => {     
  await jobRoleData.deleteRole(req.params.roleId)
  res.redirect('/jobRolesAdmin')
});

module.exports = router

router.get('/competencies/:bandName', async (req, res) => {
  res.render('competenciesView', {
    competencies: await competencyData.getCompetencies(req.params.bandName)
  }
  ); 

});

module.exports = router
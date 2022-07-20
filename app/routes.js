const express = require('express')
const router = express.Router()
const userdata = require('./userdata')
const jobRoleData = require('./jobRoleData.js')
const userValidator = require('./validators/userValidator')

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
            var newUser = req.body;
            await userdata.createUser(newUser);
            res.redirect('/login');
        } catch (e) {
            res.locals.errormessage = e
            res.render('registration', req.body)
        }
    }
});

router.get('registration'), async (req, res) => {
    res.render("registration");
};

router.get('login'), async (req, res) => {
    res.render("login");
};

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

            console.log(response.data)
            res.cookie('token', response.data.token, {maxAge: response.data.expiry})
            res.cookie('token_id', response.data.userId, {maxAge: response.data.expiry})

            res.redirect('/homeView');
        } catch (e) {
            res.locals.errormessage = e
            res.render('login', req.body)
        }
    }
});

module.exports = router

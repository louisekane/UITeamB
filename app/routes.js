const express = require('express')
const router = express.Router()
const userdata = require('./userdata')
const jobRoleData = require('./jobRoleData.js')
const userValidator = require('./validators/userValidator')

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
    }

    try {
        var newUser = req.body;
        await userdata.createUser(newUser);
        res.redirect('/login');
    } catch (e) {
        res.locals.errormessage = e
        res.render('registration', req.body)
    }
});

router.get('registration'), async (req, res) => {
    res.render("registration");
};

module.exports = router

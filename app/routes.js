const express = require('express')
const router = express.Router()
const userdata = require('./userdata')
const jobRoleData = require('./jobRoleData.js')

router.get('/jobRoles', async (req, res) => {
    res.render('jobRolesView', {
      jobRoles: await jobRoleData.getJobRoles()
    }
    ); 
});

router.post('/registeruser' , async (req, res) => {
    var newUser = req.body;
    userdata.createUser(newUser);

    res.redirect('/login');
});

router.get('registration'), async (req, res) => {
    res.render("registration");
};

module.exports = router

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
    var email = req.body.email;
    var password = req.body.password;
    var role = req.body.role;

    var newUser;
    newUser.email = email;
    newUser.password = password;
    newUser.role = role;
    userdata.createUser(newUser);
});

router.get('registration'), async (req, res) => {
    res.render("registration");
};

module.exports = router

const mysql = require('mysql');
const axios = require('axios');
const dbconfig = require('../dbconfig.json');
const util = require('util')

// Check this method 
exports.createUser = async (newUser) => {
  try {
    const usersResponse = await axios.post('http://localhost:8080/api/registeruser', { email: newUser.email, password: newUser.password, role: newUser.role })
    return usersResponse
  } catch (e) {
    throw 'An error has occured, please try again later.';
  }
}


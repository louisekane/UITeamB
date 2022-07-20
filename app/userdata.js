const mysql = require('mysql');
const axios = require('axios');
const util = require('util')

exports.createUser = async (newUser) => {
  var usersResponse = "An error has occurred, please try again later";
  try {
    usersResponse = await axios.post('http://localhost:8080/api/registeruser', { email: newUser.email, password: newUser.password, role: newUser.role })
    return usersResponse
  } catch (e) {
    throw e.response.data;
  }
}

exports.loginUser = async (user, rememberMe) => {
  var usersResponse = "An error has occurred, please try again later";
  try {
    usersResponse = await axios.post('http://localhost:8080/api/login-user', { email: user.email, password: user.password, rememberMe: rememberMe })
    return usersResponse
  } catch (e) {
    throw e.response.data;
  }
}


const mysql = require('mysql');
const axios = require('axios');
const dbconfig = require('../dbconfig.json');
const util = require('util')

const db = wrapDB(dbconfig)



function wrapDB(dbconfig) {
    const pool = mysql.createPool(dbconfig)
    return {
      query(sql, args) {
        console.log("in query in wrapper")
        return util.promisify(pool.query)
          .call(pool, sql, args)
      },
      release() {
        return util.promisify(pool.releaseConnection)
          .call(pool)
      }
    }
  }
  // Check this method 
  exports.createUser = async (newUser) => {
    console.log(newUser)
    try {
      const usersResponse = await axios.post('http://localhost:8080/api/registeruser', { newUser })
      return usersResponse
    } catch (e) {
      return new Error('Error creating user.')
    }
  }


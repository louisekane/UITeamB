const axios = require('axios')

exports.getJobRoles = async () => { 
    let jobRoles = []  
      try {  
        const jobRoleResponse = await axios.get('http://localhost:8080/api/job-roles')
        jobRoles = jobRoleResponse.data
      } catch (e) {
         return new Error('Could not get job roles')

      }
      return jobRoles;
  }
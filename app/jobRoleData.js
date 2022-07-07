const axios = require('axios')

exports.getJobRoles = async () => { 
      try {  
        const jobRoleResponse = await axios.get('http://localhost:8080/api/job-roles')
        return jobRoleResponse.data
      } catch (e) {
         return new Error('Could not get job roles')

      }
  }
  

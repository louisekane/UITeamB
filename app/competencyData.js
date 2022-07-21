const axios = require('axios')

exports.getCompetencies = async (bandName) => { 
      try {  
        const competenciesResponse = await axios.get('http://localhost:8080/api/band-competencies/' + bandName)
        return competenciesResponse.data
      } catch (e) {
         return new Error('Could not get a response from the API with the band competencies')
      }
  }
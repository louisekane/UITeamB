var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const competencyData = require('../../../app/competencyData');
const testCompetency = {
    name: "CompetencyTest",
    compBody: "BodyTest",
    compHeader: "HeaderTest",
    compLabel: "LabelTest"
}
const bandName = ""

describe('competencyData', function () {

    describe('getCompetencies', function () {
    
    it('should return competencies from response', async () => {    
        var mock = new MockAdapter(axios);   
        const data = [testCompetency];          
        mock.onGet('http://localhost:8080/api/band-competencies/' + bandName).reply(200, data);           
        var results = await competencyData.getCompetencies(bandName);            
        expect(results).to.deep.equal(data)
    
    })
      
    it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios); 
        mock.onGet('http://localhost:8080/api/band-competencies/' + bandName).reply(500);
        var error = await competencyData.getCompetencies(bandName);  
        expect(error.message).to.equal('Could not get a response from the API with the band competencies')
    })
    
    })

})

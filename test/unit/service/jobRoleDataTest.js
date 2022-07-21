var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const jobRoleData = require('../../../app/jobRoleData');
const testRole = {
    name: "RoleTest",
    specification: "SpecTest",
    specLink: "LinkTest",
    capability: "CapaTest",
    band: "BandTest"
}
const testResponsibility = {
    name: "NameTest",
    responsibility: "ResponsibilityTest"
}

describe('jobRoleData', function () {

    describe('getJobRole', function () {
    
    it('should return job roles from response', async () => {    
        var mock = new MockAdapter(axios);   
        const data = [testRole];          
        mock.onGet('http://localhost:8080/api/job-roles').reply(200, data);           
        var results = await jobRoleData.getJobRoles();            
        expect(results).to.deep.equal(data)
    
    })
      
    it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios); 
        mock.onGet('http://localhost:8080/api/job-roles').reply(500);
        var error = await jobRoleData.getJobRoles()
        expect(error.message).to.equal('Could not get a response from the API with the job roles list')
    })
    
    })

})

describe('jobRoleData', function () {

    describe('getJobResponsibility', function () {
    
    it('should return job responsibility from response', async () => {    
        var mock = new MockAdapter(axios);   
        const data = [testResponsibility];          
        mock.onGet('http://localhost:8080/api/job-responsibility/1').reply(200, data);           
        var results = await jobRoleData.getJobResponsibility(1);            
        expect(results).to.deep.equal(data)
    
    })
      
    it('should throw exception when 500 error returned from axios', async () => {
        var mock = new MockAdapter(axios); 
        mock.onGet('http://localhost:8080/api/job-responsibility/1').reply(500);
        var error = await jobRoleData.getJobResponsibility(1)
        expect(error.message).to.equal('Could not get a response from the API with the job responsibilities list')
    })
    
    })

})

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');
var chai = require('chai');  
const expect = chai.expect;
const userdata = require('../../../app/userdata');

describe('userData', function () {

    describe('loginUser', function () {
    
        it('should return response 200', async () => {    
            var mock = new MockAdapter(axios);            
            mock.onGet('http://localhost:8080/api/login-user', { user: user, rememberMe: rememberMe }).reply(200);           
            var user = "name";
            var rememberMe = "yes";
            var results = await userdata.loginUser(user, rememberMe);           
            expect(results).to.deep.equal(data)
        
        })
    })

})
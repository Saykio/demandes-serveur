var should = require('should');
var assert = require('assert');
var request = require('supertest');

describe('Test des services RH', function () {
    it('Devrait renvoyer la liste de demandes.', function (done) {
        request('localhost:8080')
            .get('/rh/demandes')
            .end(function (err, res) {
                if (err)
                    throw err;
           // console.log('resultat: %s',JSON.stringify(res));
                res.should.have.property('status', 200);
                done();
            });
    });
});
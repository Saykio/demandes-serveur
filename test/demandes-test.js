var should = require('should');
var assert = require('assert');
var request = require('supertest');
var moment = require('moment');

describe('Test des services RH', function () {
    it('Devrait renvoyer la liste de demandes.', function (done) {
        request('localhost:8080')
            .get('/rh/demandes')
            .end(function (err, res) {
                if (err) throw err;
                res.should.have.property('status', 200);
                done();
            });
    });
    it('Devrait refuser la demande de congé sur solde insuffisant.', function (done) {
        var maintenant = moment();
        var demande = new Object();
        demande.motif = 'Test';
        demande.datedebut = maintenant;
        demande.datefin = maintenant.add(11, 'days');
        request('localhost:8080')
            .post('/rh/demandes')
            .send(demande)
            .expect(400)
            .end(function (err, res) { // .end handles the response
                if (err) {
                    return done(err);
                }
                done();
            });
    });
});
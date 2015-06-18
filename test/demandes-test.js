var should = require('should');
var assert = require('assert');
var request = require('supertest');
var moment = require('moment');
var bodyParser = require('body-parser');

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
        var demande = new Object();
        demande.motif = 'Test';
        demande.datedebut = moment();
        demande.datefin = moment().add(11, 'days');
        console.log('demande: %s', JSON.stringify(demande));
        request('localhost:8080')
            .post('/rh/demandes')
            .send(demande)
            .expect(400)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                done();
            });

    });
});
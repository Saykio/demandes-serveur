console.log('Serveur prêt');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');
var express = require('express');
var app = express();
var compteur = 10;
var moment = require('moment');


app.use(bodyParser.json());
app.use('/rh', express.static('public'));

//    host: 'localhost',
//    user: 'root',
//    password: '',
//    database: 'demandes-base'
//});
var connection = mysql.createConnection('mysql://root:@localhost/demandes-base?reconnect=true');
//**********************************************
// Démarrage du serveur
// Méthode d'enregistrement d'une demande d'autorisation de congé
app.post('/rh/demandes', function (req, rep) {
    var strbody = JSON.stringify(req.body);
    console.log("Reception requête post nouvelle demande.");
    console.info('Reception requete post nouvelle demande :' + strbody);
    var motif = req.body.motif;
    var datedebut = req.body.datedebut;
    var datefin = req.body.datefin;
    var demande = new Object();
    demande.motif = motif;
    demande.datedebut = datedebut;
    demande.datefin = datefin;
    var strdatefin = JSON.stringify(demande.datefin);
    console.log(strdatefin);
    var strdemande = JSON.stringify(req.body.datefin);
    var momentDebut = moment(demande.datedebut);
    var momentFin = moment(demande.datefin);
    var duree = moment.duration(momentFin.diff(momentDebut));
    var nbJours = duree.asDays();
    console.log("nbjour : %s / compteur : %s.", nbJours, compteur);
    if (nbJours > compteur) {
        console.log("Demande refusée.");
        rep.sendStatus(400);
    } else {
        console.log("Demande acceptée.");
        connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
            if (err) throw err;
            console.log('inséré.');
        });
        rep.send('Demande prise en compte.');
    }
});
app.get('/rh/demandes', function (req, rep) {
    connection.query("Select * From demandetable", function (err, demandes) {
        if (err) throw err;
        console.log("nb " + demandes.length);

        for (var i = 0; i < demandes.length; i++) {
            var id = JSON.stringify(demandes[i].id);
            var motif = JSON.stringify(demandes[i].motif);
            var datedebut = JSON.stringify(demandes[i].datedebut);
            var datefin = JSON.stringify(demandes[i].datefin);
            console.log('id : %s ,motif : %s,datedebut : %s,datefin : %s', id, motif, datedebut, datefin);
        }
        rep.send(demandes);
    });
});

var serveur = app.listen(8080, function () {
    console.log('Ecoute sur le port 8080');
});
console.log('Serveur prêt');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use('/RH', express.static('public'));

// Initialisation de la connexion au serveur SGBD MYSQL
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demande-base'
});
//**********************************************
// Démarrage du serveur
// Méthode d'enregistrement d'une demande d'autorisation de congé
app.post('/rh/demandes', function (req, rep) {
    var strbody = JSON.stringify(req.body);
    console.log("Reception requête post nouvelle demande.");
    rep.send('Demande prise en compte.');
    console.info('Reception requete post nouvelle demande :' + strbody);
    var motif = req.body.motif;
    var datedebut = req.body.datedebut;
    var datefin = req.body.datefin;
    connection.connect();
    var demande = new Object();
    demande.motif = motif;
    demande.datedebut = datedebut;
    demande.datefin = datefin;
    var strdatefin = JSON.stringify(demande.datefin);
    console.log(strdatefin);
    var strdemande = JSON.stringify(req.body.datefin);
    console.log("debug : " + strdemande);
    //connection.query("INSERT INTO demande VALUES ?", demande, function(err) {
    connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
        if (err) throw err;
        console.log('inséré.');
    });
    connection.end();
});

var serveur = app.listen(8080, function () {
    console.log('Ecoute sur le port 8080');
});
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
    database: 'demandes-base'
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
app.get('/rh/demandes', function (req, rep) {
    connection.connect();
    connection.query("Select * From demandetable", function (err, demandes) {
        //if (err) throw err;

        //        console.log("Error running query!");
        console.log("nb " + demandes.length);

        for (var i = 0; i < demandes.length; i++) {
            var id = JSON.stringify(demandes[i].id);
            var motif = JSON.stringify(demandes[i].motif);
            var datedebut = JSON.stringify(demandes[i].datedebut);
            var datefin = JSON.stringify(demandes[i].datefin);
            console.log('id : %s ,motif : %s,datedebut : %s,datefin : %s', id, motif, datedebut, datefin);
        }
        rep.send(demandes);
    })
  //  connection.end();
});

var serveur = app.listen(8080, function () {
    console.log('Ecoute sur le port 8080');
});
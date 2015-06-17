console.log('Serveur prêt');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'demandes-base'
});
var commande = process.argv[2]
switch (commande) {
case '--init':
    init();
    break;
case '--lecture':
    lecture();
    break;
};

function init() {
    connection.connect();
    var demande = new Object();
    demande.motif = 'RCYC';
    demande.datedebut = new Date(2015, 6, 9);
    demande.datefin = new Date(2015, 06, 15);
    //connection.query("INSERT INTO demande VALUES ?", demande, function(err) {
    connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
        if (err) throw err;
        console.log('inséré.');
    });
    demande = new Object();
    demande.motif = 'CA';
    demande.datedebut = new Date(2015, 7, 8);
    demande.datefin = new Date(2015, 8, 30);
    //connection.query("INSERT INTO demande VALUES ?", demande, function(err) {
    connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
        if (err) throw err;
        console.log('inséré.');
    });
    demande = new Object();
    demande.motif = 'RCYC';
    demande.datedebut = new Date(2015, 12, 23);
    demande.datefin = new Date(2016, 01, 1);
    //connection.query("INSERT INTO demande VALUES ?", demande, function(err) {
    connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
        if (err) throw err;
        console.log('inséré.');
    });
    demande = new Object();
    demande.motif = 'CA';
    demande.datedebut = new Date(2015, 9, 9);
    demande.datefin = new Date(2015, 10, 15);
    //connection.query("INSERT INTO demande VALUES ?", demande, function(err) {
    connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
        if (err) throw err;
        console.log('inséré.');
    });
    demande = new Object();
    demande.motif = 'CA';
    demande.datedebut = new Date(2015, 6, 5);
    demande.datefin = new Date(2015, 06, 10);
    //connection.query("INSERT INTO demande VALUES ?", demande, function(err) {
    connection.query("INSERT INTO demandetable SET ?", demande, function (err) {
        if (err) throw err;
        console.log('inséré.');
    });

    connection.end();
};

function lecture() {

    connection.connect();
    connection.query("Select * From demandetable", function (err, rows) {
        //if (err) throw err;

        //        console.log("Error running query!");
        console.log("nb " + rows.length);

        for (var i = 0; i < rows.length; i++) {
            var id = JSON.stringify(rows[i].id);
            var motif = JSON.stringify(rows[i].motif);
            var datedebut = JSON.stringify(rows[i].datedebut);
            var datefin = JSON.stringify(rows[i].datefin);
            console.log('id : %s ,motif : %s,datedebut : %s,datefin : %s', id, motif, datedebut, datefin);
        }

    })
    connection.end();

};
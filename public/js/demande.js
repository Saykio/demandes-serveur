'use strict';
/**
 * Montage du module de portail
 */
// var moduleStage = angular.module('moduleStage', []);
var moduleDemandes = angular.module('moduleDemandes', ['ngResource', 'ui.bootstrap',
  'mwl.calendar']);

/**
 * Controler du portail
 */
moduleDemandes.controller('DemandesControleur', ['$scope', '$resource',
  controleurDemandes]);

function controleurDemandes($scope, $resource) {
    console.info('Démarrage du controleur');

    var Demande = $resource('/rh/demandes');
    var rows = Demande.query(function () {
        for (var i = 0; i < rows.length; i++) {
            var id = JSON.stringify(rows[i].id);
            var motif = JSON.stringify(rows[i].motif);
            var datedebut = JSON.stringify(rows[i].datedebut);
            var datefin = JSON.stringify(rows[i].datefin);
            console.info('id : %s ,motif : %s,datedebut : %s,datefin : %s', id, motif, datedebut, datefin);
        }
    });
    $scope.ouvertureDebut = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.debutOuvert = true;
    };
    $scope.ouvertureFin = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.debutFin = true;
    };
    $scope.calendarDay = moment();
    $scope.calendarView = 'month';
    $scope.events = [{
        title: 'CA',
        type: 'info',
        startsAt: new Date(2015, 5, 11),
        endsAt: new Date(2015, 5, 13),
        editable: false,
        deletable: false,
        incrementsBadgeTotal: true,
        recursOn: 'year',
        cssClass: 'a-css-class-name'
 }, {
        title: 'RCYC',
        type: 'success',
        startsAt: new Date(2015, 5, 1),
        endsAt: new Date(2015, 5, 3),
        editable: false,
        deletable: false,
        incrementsBadgeTotal: true,
        recursOn: 'year',
        cssClass: 'a-css-class-name'
 }];
    $scope.envoyerDemande = function () {
        var dmd = new Demande();
        dmd.motif = $scope.motif;
        dmd.datedebut = $scope.datedebut;
        dmd.datefin = $scope.datefin;

        Demande.save(dmd, function () {
            console.info("Envoie d'une demande");
            $scope.valide = true;
            $scope.motif = '';
        }, function () {
            console.info("Service indisponible");
            $scope.erreur = true;
        });

    };
}
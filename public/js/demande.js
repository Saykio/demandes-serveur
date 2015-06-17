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
    $scope.events = new Array();
    var Demande = $resource('/rh/demandes');
    var demandes = Demande.query(function () {
        for (var i = 0; i < demandes.length; i++) {
            var event = new Object();
            var id = JSON.stringify(demandes[i].id);
            var motif = JSON.stringify(demandes[i].motif);
            var datedebut = demandes[i].datedebut;
            var datefin = demandes[i].datefin;
            event.title = motif;
            event.type = 'succes';
            event.startsAt = datedebut;
            event.endsAt = datefin;
            event.editable = false;
            event.deletable = false;
            event.incrementsBadgeTotal = true;
            event.recursOn = 'year';
            event.cssClass = 'a-css-class-name';
            $scope.events.push(event);
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
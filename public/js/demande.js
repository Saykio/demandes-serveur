'use strict';
/**
 * Montage du module de portail
 */
// var moduleStage = angular.module('moduleStage', []);
var moduleStage = angular.module('moduleStage', ['ngResource', 'ui.bootstrap',
  'mwl.calendar']);

/**
 * Controler du portail
 */
moduleStage.controller('StageControleur', ['$scope', '$resource',
  controleurStage]);

function controleurStage($scope, $resource) {
    console.info('Démarrage du controleur');
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
        var Demande = $resource('/rh/demandes');
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
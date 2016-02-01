(function() {
 "use strict";

  angular
  .module("spotApp")
  .controller("MapController", MapController)

  MapController.$inject = ["$scope", "$http", "$log", "uiGmapGoogleMapApi"];

  function MapController($scope, "uiGmapGoogleMapApi"){
    uiGmapGoogleMapApi.then(function(maps) {
      maps.visualRefresh = true;
      $scope.defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(38.531133, 5.459778),
        new google.maps.LatLng(38.531133, 5.459778)
        );

      $scope.map.zoom = 2;

      $scope.map.bounds = {
        northeast: {
          latitude:$scope.defaultBounds.getNorthEast().lat(),
          longitude:$scope.defaultBounds.getNorthEast().lng()
        },
        southwest: {
          latitude:$scope.defaultBounds.getSouthWest().lat(),
          longitude:-$scope.defaultBounds.getSouthWest().lng()

        }
      };
      $scope.searchbox.options.bounds = new google.maps.LatLngBounds($scope.defaultBounds.getNorthEast(), $scope.defaultBounds.getSouthWest());

      // $scope.markers = mapMarkers;
      // $scope.items = documents

      });
  }


})();

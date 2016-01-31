(function() {
  "use strict";

  anagular
    .module("spotApp")
    .config(loadGoogleMapsSDK);

  loadGoogleMapsSDK.$inject = ["uiGmapGoogleMapApiProvider"];

  function loadGoogleMapsSDK(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCnsYfPD49S9GzY7Cj7-6zATAkEdD9Tfxc',
      v: '3.20',  //defaults to latest 3.X anyhow
      libraries: 'places, geometry, visualization, weather'
    });
  }

})();

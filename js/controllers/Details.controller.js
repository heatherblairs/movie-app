angular
   .module('gMovies')
   .controller('DetailController', DetailController);

function DetailController($scope, $state, $stateParams, $http) {
  var movieID = $stateParams.movieID;
   var URL = 'http://www.omdbapi.com/?i=';
   $http.get(URL + movieID + '&plot=full&r=json')
   .then(function (result) {
     $scope.movieDetail = result.data;
 })
}

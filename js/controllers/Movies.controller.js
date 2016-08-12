angular
   .module('gMovies')
   .controller('MoviesController', MoviesController);

function MoviesController($scope, $stateParams, $state, $http) {
   var URL = 'http://www.omdbapi.com/?s=';
   $http.get(URL + $stateParams.movie + '&r=json')

   .then(function (result) {
     console.log(result.data.Search);
     $scope.movieResults = result.data.Search;
 })
}

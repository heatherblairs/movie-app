angular
   .module('gMovies', ['ui.router'])
   .config(config)

function config($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');

 $stateProvider
 .state('home', {
   url: '/',
   controller: 'HomeController',
   templateUrl: 'home.html'
 }).state('home.movies', {
   url: 'movie/:movie',
   controller: 'MoviesController',
   templateUrl: 'movies.html'
 }).state('home.detail', {
   url: 'movie/detail/:movieID',
   controller: 'DetailController',
   templateUrl: 'detail.html'
 })
}

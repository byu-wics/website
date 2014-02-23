var app = angular.module('wics', ['ui.directives', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      //home
      when('/home', {templateUrl: 'partials/home.html',   controller: HomeCtrl}).
      
      //about section
      when('/mission', {templateUrl: 'partials/about/mission.html',   controller: MissionCtrl}).
      when('/history', {templateUrl: 'partials/about/history.html',   controller: HistoryCtrl}).
      when('/contributions', {templateUrl: 'partials/about/contributions.html',   controller: ContributionsCtrl}).

      //events section
      when('/events', {templateUrl: 'partials/events.html'}).

      //resources section
      when('/research', {templateUrl: 'partials/resources/thumbnail.html', controller: ResearchCtrl}).
      when('/scholarships', {templateUrl: 'partials/resources/thumbnail.html', controller: ScholarshipCtrl}).
      when('/internships', {templateUrl: 'partials/resources/thumbnail.html', controller: InternshipsCtrl}).
      when('/organizations', {templateUrl: 'partials/resources/thumbnail.html', controller: OrganizationsCtrl}).

      //contact
      when('/contact', {templateUrl: 'partials/contact_us.html', controller: ContactUsCtrl}).
      otherwise({redirectTo: '/home'});
}]);



function HomeCtrl($scope, $timeout, $routeParams, $http) {
  $http.get('content/home.json').success(function (data){
    $scope.slides = data.slides;
    $scope.mission_bullets = data.mission_bullets;
    $scope.myInterval = 5000;
  });
}

function MissionCtrl($scope, $routeParams, $http) {
 $http.get('content/about/mission.json').success(function (data){
   $scope.content = data;
 });
}

function HistoryCtrl($scope, $routeParams, $http) {
 $http.get('content/about/history.json').success(function (data){
   $scope.content = data;
   $scope.semesters = data.semesters;
 });
}

 function ContributionsCtrl($scope, $routeParams, $http) {
 $http.get('content/about/contributions.json').success(function (data){
     $scope.content = data;
 });
}

function ResearchCtrl($scope, $routeParams, $http) {
  $http.get('content/resources/research.json').success(function (data){
    $scope.content = data;
  });
}

function ScholarshipCtrl($scope, $routeParams, $location, $http){
  $http.get('content/resources/scholarships.json').success(function (data){
    $scope.content = data;
  });
}

function InternshipsCtrl($scope, $routeParams, $http) {
 $http.get('content/resources/internships.json').success(function (data){
   $scope.content = data;
 });
}

function OrganizationsCtrl($scope, $routeParams, $http) {
  $http.get('content/resources/organizations.json').success(function (data){
   $scope.content = data;
  });
}

function ContactUsCtrl($scope, $routeParams, $http) {
  $http.get('content/contact_us.json').success(function (data){
    $scope.content = data;
  });
}
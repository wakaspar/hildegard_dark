angular
  .module('Hildegard')
  .controller('PortfolioController', PortfolioController);

PortfolioController.$inject = ['$http'];
function PortfolioController($http){
  let vm = this;
  // Get all projects
  $http({
    method: 'GET',
    type: 'json',
    url: '/api/projects'
  }).then(function successCallback(res) {
    // set vm.projectList to full reponse
    vm.projectList = res.data;
  }, function errorCallback(res) {
    console.log('$http fail: ', res);
  });
}

var firebaseConfig = {
    apiKey: "AIzaSyAmPXGEFSY5mET3LsT6qQBw_-BVcLhqbTY",
    authDomain: "maxapp-db8e1.firebaseapp.com",
    databaseURL: "https://maxapp-db8e1.firebaseio.com",
    projectId: "maxapp-db8e1",
    storageBucket: "maxapp-db8e1.appspot.com",
    messagingSenderId: "567029314884",
    appId: "1:567029314884:web:cc3bd06f82cee91f81d311",
    measurementId: "G-YPEQZ7J80N"
};
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();


pagina = angular.module("pagina",[])


pagina.controller("productosCtr", function($scope){
    $scope.almacenar = function(producto){
        firebase.database().ref("Productos").push(producto).then(function a(x){
            
        }).catch(function b(error){

        })
    }
})
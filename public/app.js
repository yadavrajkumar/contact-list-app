 var app = angular.module("myContactApp",[]);



  app.controller("myContactController",
	                  ["$scope","$http","contactFactory", 
	                     function($scope,$http,contactFactory){

                 refresh()
   

 $scope.createContact=function(){
                 contactFactory.createContact($scope.contact)
                    .then(function(response){
                    	refresh();

                })
        }

 function refresh(){

                     
	                contactFactory.getContact()
	                  .then(function(response){
                         $scope.contactList = response.data
		  
		        })
        }


$scope.editContact = function(id){

	             contactFactory.editContact(id)
	               .then(function(response){
  
                       $scope.contact = response.data;

                   })
        }


$scope.updateContact = function(){

                  refresh();
                  contactFactory.updateContact( $scope.contact._id,
                  	                                  $scope.contact)
	              
	                                  .then(function(response){


		})
}

$scope.removeContact = function(id){

                 refresh();
	             contactFactory.deleteContact(id)
	                .then(function(response){


	})
}



}])
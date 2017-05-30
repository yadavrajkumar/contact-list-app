app.factory("contactFactory",["$http",function($http){

var factory = {}

 factory.createContact = function(contact){

	return $http.post("/createContact",contact)



	}


factory.getContact=function(){

      return $http.get("/getContact")

}

factory.editContact = function(id){

 return $http.get("/getContactById/"+id)

}


factory.updateContact = function(contactId,contact){

 return $http.put("/updateContact/"+contactId,contact)

}

factory.deleteContact = function(id){

	return $http.delete("/removeContact/"+id)
}


   return factory;
}])
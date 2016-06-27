
'use strict';

angular.module('myApp')
.service('Myitems', function($http){
  this.getAll = () => {
    return $http.get('/items');
  }

  this.addItem = (newItem) => {
    return $http.post('/items');
  }

  this.deleteItem = (id) => {
    return $http.delete(`/items/${id}`);
  }

  this.editItem = (editItem) => {
    return $http.put(`/items`);
  }

  this.queryByRoom = (room) => {
    return $http.get(`/items/${room}/queryByRoom`);
  }
})


'use strict';


app.service('Myitems', function($http){
  this.getAll = () => {
    return $http.get('/items');
  }

  this.addItem = (newItem) => {
    return $http.post('/items', newItem);
  }

  this.deleteItem = (id) => {
    return $http.delete(`/items/${id}`);
  }

  this.editItem = (editItem) => {
    return $http.put(`/items`, editItem);
  }

  // this.queryByRoom = (room) => {
  //   return $http.get(`/items/${room}/queryByRoom`);
  // }
})

'use strict';


angular.module('myApp')
.controller('mainCtrl', function($scope, Myitems){

  Myitems.getAll()
    .then(res => {
      // console.log("res.data", res.data);
      $scope.items = res.data;
    })
    .catch(err => {
      console.log("err: ",err);
    })

  $scope.addItem = () => {
    console.log("$scope.newItem", $scope.newItem);
    let newItem = angular.copy($scope.newItem);
    $scope.newItem=null;

    Myitems.addItem(newItem)
      .then(res => {
        console.log("added");
      })
      .catch(err => {
        console.log("err: ", err);
      })

  }

  $scope.deleteIt = (index) => {
    let id = $scope.items[index].id;
    console.log("id: ",id);
    Myitems.deleteItem(id)
      .then(res => {
        console.log("deleted");
      })
      .catch(err => {
        console.log("err: ", err);
      })

    $scope.items.splice(index, 1);

  }

  $scope.editItem = () => {
    Myitems.editItem(editItem)
      .then(res => {
        console.log("edited");
      })
      .catch(err => {
        console.log("err: ", err);
      })
  }

  $scope.editIt = (index) => {
    // swal({title: "Tobi is sexier", text: "take a pic in the club"});
    $scope.Editing = ['doing'];
    console.log("editIt obj: ",$scope.items[index]);
    $scope.editObj = $scope.items[index];




  }


  $scope.queryByRoom = () => {
    console.log($scope.selected.room);
    Myitems.queryByRoom($scope.selected.room)
      .then(res => {
        $scope.items = res.data;
      })
      .catch(err => {
        console.log("err: ", err);
      })
  }

  $scope.$watch(function() {
    return angular.toJson($scope.items);
  }, function() {
    let total = $scope.items.reduce((sum,item)=>{
      return sum+item.amount;
    },0);
    $scope.total = total;
  });
});

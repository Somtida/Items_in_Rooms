'use strict';

const db = require('../config/db')
const moment = require('moment');
const uuid = require('uuid');
// db.query('drop table roomitems');


db.query(`create table if not exists roomitems(
  id VARCHAR(100),
  createdAt VARCHAR(100),
  name VARCHAR(100),
  room VARCHAR(100),
  amount INT
)`);

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.query('select * from roomitems', function(err, items){
      if(err){
        reject(err);
      }else{
        // console.log("getAll items: ",items);
        resolve(items);
      }
    });
  });
}

exports.queryByRoom = room => {
  console.log("queryByRoom room: ",room);
  return new Promise((resolve, reject) => {
    db.query(`select * from roomitems where room = "${room}"`, function(err, items){
      if(err){
        reject(err);
      }else{
        console.log("get queryByRoom items: ",items);
        resolve(items);
      }
    });
  });
}

exports.deleteItem = (id) => {
  return new Promise((resolve, reject) => {
    db.query(`delete from roomitems where id =  "${id}"`, function(err, items){
      if(err){
        reject(err);
      }else{
        // console.log("getAll items: ",items);
        resolve();
      }
    });
  });
}

exports.editItem = editItemObj => {
  editItemObj.createdAt = new Date();
  return new Promise((resolve, reject) => {
  db.query(`update roomitems set ? where id="${editItemObj.id}"`, editItemObj, function(err, items){
      if(err){
        reject(err);
      }else{
        resolve();
      }
    })

  })
}

exports.addItem = newItemObj => {
  newItemObj.id = uuid();
  newItemObj.createdAt = new Date();
  return new Promise((resolve, reject) => {
  db.query('insert into roomitems set ?', newItemObj, function(err, items){
      if(err){
        reject(err);
      }else{
        resolve();
      }
    })

  })
}

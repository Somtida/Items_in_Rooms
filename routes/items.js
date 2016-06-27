'use strict';

const express = require('express');

let router = express.Router();

let Myitems = require('../models/item');

router.get('/', (req, res) => {
  Myitems.getAll()
    .then(items => {
      console.log("items: ",items);
      res.send(items);
    })
    .catch(err => {
      res.status(400).send(err);
    })
});

router.post('/', (req, res) => {
  console.log("req.body: ",req.body);
  Myitems.addItem(req.body)
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      res.status(400).send(err);
    })
})

router.delete('/:id', (req, res) => {
  console.log("req.params.id: ",req.params.id);
  Myitems.deleteItem(req.params.id)
    .then(() => {
      res.send();
    })
    .catch(err => {
      res.status(400).send(err);
    })
})


router.put('/', (req, res) => {
  Myitems.editItem(req.body)
    .then(items => {
      res.send(items);
    })
    .catch(err => {
      res.status(400).send(err);
    })
})


router.get('/:room/queryByRoom', (req, res) => {
  console.log("req.params.room: ", req.params.room);
  Myitems.queryByRoom(req.params.room)
    .then(items => {
      console.log("router queryByRoom items: ",items);
      res.send(items);
    })
    .catch(err => {
      res.status(400).send(err);
    })
});

module.exports = router;

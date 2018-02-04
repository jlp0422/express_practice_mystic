/* eslint-disable */

const app = require('express').Router()
const db = require('../db');


module.exports = app

app.get('/', (req, res, next) => {
  const friends = db.getFriends()
  res.render('friends', {title: 'Friends', friends})
});

// app.get('/:id', (req, res, next) => {
//   const friend = db.getFriend(req.params.id)
//   console.log(req.params.id)
//   res.render('friend', {title: `${friend.firstName} ${friend.lastName}`, friend})
// })

app.get('/:firstName', (req, res, next) => {
  const friend = db.getFriend(req.params.firstName);
  // console.log(friend)
  res.render('friend', {title: `${friend.firstName} ${friend.lastName}`, friend})
})

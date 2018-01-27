/* eslint-disable */

const app = require('express').Router();
const db = require('../db');

module.exports = app;

app.get('/', (req, res, next) => {
  res.render('places', {title: `Place We've Gone`})
});

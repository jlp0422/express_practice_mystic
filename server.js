/* eslint-disable */

const express = require('express');
const app = express();
const path = require('path')
const nunjucks = require('nunjucks')
nunjucks.configure({noCache: true})

const port = process.env.PORT || 3000;

app.set('view engine', 'html')
app.engine('html', nunjucks.render);

app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));

app.use((req, res, next) => {
  res.locals.path = req.url
  next();
})

app.use('/friends', require('./routes/friends'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});



app.get('/', (req, res, next) => {
  res.render('index', {title: 'Home'})
});

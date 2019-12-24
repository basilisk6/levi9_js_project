var express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes').setRoutes;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

setRoutes(app);

app.listen(3000);
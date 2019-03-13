var express = require('express');
var bodyParser = require('body-parser');
var db = require('./database/db');
var app = express();
var cors = require('cors');
var passport = require('./passport/passport');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


var profilApi = require('./api/profilApi');
var companyApi = require('./api/companyApi');
var UserApi = require('./api/userApi');
app.use(cors());

app.use('/Profil',profilApi);
app.use('/Company',companyApi);
app.use('/User', UserApi);




app.listen(4000);
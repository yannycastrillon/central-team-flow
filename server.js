var
  express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require('body-parser'),
  logger = require("morgan")

 // Middleware
 app.use(logger('dev'));
 app.use(bodyParser.json());

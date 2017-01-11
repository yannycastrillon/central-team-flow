var
  express = require("express"),
  app = express(),
  mongoose = require("mongoose")

mongoose.connect('mongodb://localhost/#', (err) => {
	console.log(err || 'Connected')
})
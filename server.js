var
  express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require('body-parser'),
  logger = require("morgan")


// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// because i felt like it
function reverse(myString) {
  var reverseString=""

   for(var i=0; i<myString.length; i++){
     reverseString = myString[i] + reverseString
   }

   return reverseString
}

  console.log(reverse("Better Hello World"));


app.listen(3000, ( () => "Server running on port 3000"))
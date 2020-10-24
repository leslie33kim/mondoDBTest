//index.js
//Import Express
let express = require('express')
//Start App
let app = express();
//Assign port
var port = process.env.PORT || 8080;
// Welcome message
app.get('/', (req, res) => res.send('Hello World!'));
// Launch app to the specified port
app.listen(port, function() {
    console.log("Running test on Port "+ port);
})

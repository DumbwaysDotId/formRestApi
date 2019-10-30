const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
require('express-group-routes')

const app = express();
const port = 5000


//mongodb Connection
mongoose.connect("mongodb://localhost:27017/formDB",  {useNewUrlParser: true,useUnifiedTopology: true})
mongoose.Promise = global.Promise;

//initial body-parser
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const UserController = require("./controllers/users")

app.group("/api/v1", (router) => {
    
    //Private
    router.get("/users", UserController.listUser)
})

//create the homepage route
app.get('/', (req, res) => {
    //res means, response, and it send string "Hello Express!" to the API
    res.send('Hello Ini RestAPi')
})    

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Listening on port ${port}!`))
const jwt = require('jsonwebtoken')
const User = require("../models/user")

// get all data
exports.listUser = (req, res) => {
    User.find({}).then(function(result){
        res.send(result)
    })
}

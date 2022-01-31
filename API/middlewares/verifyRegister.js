const db = require("../models")
const ROLES = db.ROLES
const User = db.user

checkDuplicateEmail = (req, res, next) => {
    //Email verification
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if(err){
            res.status(500).send({message: err})
            return;
        }

        if(user){
            res.status(400).send({message: "Email already exists"})
            return;
        }

        next();
    })

}

checkRoles = (req, res, next) => {
    //
}

const verifyRegister = {checkDuplicateEmail}

module.exports = verifyRegister
'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secretKey = require('../util/jwt').secretKey;


function createToken (user){
    var payload = {
        sub: user._id,
        name: user.name,
        nick: user.nick,
        surname: user.surname,
        email: user.email,
        role: user.role,
        iat: moment().unix(),
        exp: moment().add(30, 'days').unix()
    };

    return jwt.encode(payload, secretKey);
}

module.exports ={
    createToken
};

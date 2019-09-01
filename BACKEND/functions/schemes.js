const admin = require('firebase-admin');
const data = require('./schemes.json');

module.exports = function(req, res) { 
    return res.status(200).send(JSON.stringify(data));
}
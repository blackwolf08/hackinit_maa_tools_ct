const admin = require('firebase-admin');
const motivation = require('./motivation.json');
const relax = require('./relax.json');
const cheer = require('./cheer.json');

module.exports = (req,res) => {
    if(req.body.value < 0.3){
        return res.status(200).send(JSON.stringify(motivation));
    }
    else if (req.body.value < 0.6){
        return res.status(200).send(JSON.stringify(relax));
    }
    else {
        return res.status(200).send(JSON.stringify(cheer));
    }
}
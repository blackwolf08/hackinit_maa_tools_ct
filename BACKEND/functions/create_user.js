const admin = require('firebase-admin');
module.exports = (req,res) => {
    if(!req.body.phone) { 
        return res.status(422).send({ error:'Bad Input - No Phone Number-' });
    }
    const phone = String(req.body.phone).replace(/[^\d]/g,"");
    const provider = new firebase.auth.GoogleAuthProvider();
}
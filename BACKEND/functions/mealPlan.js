const admin = require('firebase-admin');
const data = require('./food.json');
module.exports = function(req, res) {
    let mealPlan = {
        "breakfast": data['data-breakfast'][Math.floor(Math.random()*data['data-breakfast'].length)],
        "lunch": data['data-lunch'][Math.floor(Math.random()*data['data-lunch'].length)],
        "dinner": data['data-dinner'][Math.floor(Math.random()*data['data-dinner'].length)],
    }
    return res.status(200).send(mealPlan);
}
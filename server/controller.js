const houses = require('./db.json')


module.exports = {
    sendHouses: (req, res) => {
        res.status(200).send(houses)
    }
}
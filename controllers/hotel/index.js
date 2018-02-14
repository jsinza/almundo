const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};

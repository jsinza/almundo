const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {
    console.log(req.body);
    let name = req.body.name;
    let stars = req.body.stars;
    Repository.search(name,stars, (data) => res.json(data));

};

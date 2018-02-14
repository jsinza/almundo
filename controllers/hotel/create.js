const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {
    if (req.file)
        req.body.image = req.file.originalname;
    Repository.create(req.body, (data) => res.json(data));

};

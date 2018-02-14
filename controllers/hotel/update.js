const Repository = require('../../repositories/hotel');

module.exports = (req, res) => {

    let id = req.params.id;
    if (req.file)
        req.body.image = req.file.originalname;
    Repository.update(id, req.body, (data) => res.json(data));

};


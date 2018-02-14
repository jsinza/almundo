const Hotel = require('../models/Hotel');

module.exports = {

    all: (cb) => {
        Hotel.find({}, (err, hotels) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': { hotels }
            };

            return cb(data);

        });

    },
    get: (id, cb) => {

        Hotel.findOne({'id': id }, (err, hotel) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': { hotel }
            };

            return cb(data);

        });
    },
    create: (data, cb) => {
        let hotel = {
            id: data.id,
            name: data.name,
            stars: data.stars,
            price: data.price,
            image: data.image,
            amenities: data.amenities
        }
        Hotel.create(hotel, (err, hotel) => {
            let data = {};
            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                'data': { hotel }
            };

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        Hotel.update({ 'id': id }, { $set: data }, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            Hotel.findOne({ 'id': id }, (err, hotel) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                }

                data = {
                    'data': { hotel }
                };

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        Hotel.findOneAndRemove({ "id": id }, (err) => {

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            data = {
                status: true
            };

            return cb(data);

        });
    },
    search: (name, stars, cb) => {
        console.log({
            'name':'/^' + name + '/',
            'stars':'{$in:[' + stars+']}'
        });
        Hotel.find({
            'name':'/^' + name + '/',
            'stars':'{$in:[' + stars+']}'
        }, (err, hotels) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }
            data = {
                'data': { hotels }
            };

            return cb(data);

        });
    }

};

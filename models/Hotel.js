const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    id: { type: Number, required: 'Identificador del hotel requerido', index: true },
    name: {
        type: String,
        required: 'Nombre del Hotel es Requerido', index: true
    },
    stars: { type: Number, required: 'Cantidad de estrella del hotel es Requerido' },
    price: { type: Number, required: 'Precio del hotel es Requerido' },
    image: { type: String },
    amenities: {
        type: [String],
        required: 'Comodidades  del hotel son Requerido'
    }
});

module.exports = mongoose.model('Hotel', schema);

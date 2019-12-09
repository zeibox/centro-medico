var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var consultorioSchema = new Schema({
    area: { type: String, required: [true, 'El area es necesario'] },
    piso: { type: Number, required: [true, 'El piso es necesario'] },
    numero: { type: Number, requiered: [true, 'El número es necesario'] }
}, { collection: 'consultorios' });



module.exports = mongoose.model('Consultorio', consultorioSchema);
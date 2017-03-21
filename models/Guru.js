var mongoose = require('mongoose');

var GuruSchema = new mongoose.Schema({
    nama: String,
    Lokasi: String,
    Biaya: Number
});

module.exports = mongoose.model('Guru', GuruSchema);

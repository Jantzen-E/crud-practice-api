const mongoose = require('mongoose');

const waterFilterSchema = new mongoose.Schema({
    name: { type: String, required: true},
    type: { type: String, required: true},
    price: { type: String, required: true}
})

module.exports = mongoose.model('WaterFilter', waterFilterSchema, 'water-filters')
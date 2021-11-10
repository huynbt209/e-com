const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TrademarkSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    description: String,
},
{
    timestamps: true
})


const Trademark = mongoose.model('Trademark', TrademarkSchema)

module.exports = Trademark
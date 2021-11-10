const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        unique: true 
    },
    image: { 
        type: String 
    },
    trademark: {
        type: Schema.Types.ObjectId, 
        ref: "Trademark" 
    },
    category: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    rating: { 
        type: Number, 
        default: 0
    },
    customerReviews: { 
        type: Number, 
        default: 0
    },
    quantity: { 
        type: Number, 
        required: true 
    },
    description: {
        type: String
    },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product

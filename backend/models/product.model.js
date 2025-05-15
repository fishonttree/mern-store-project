import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true // ensures createdAt, updatedAt fields  
}) ;

//  create a MODEL / COLLECTION Product, based on SCHEMA productSchema
const Product = mongoose.model("Product", productSchema) ;

export default Product ;
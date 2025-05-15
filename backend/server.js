//  const express = require('express') ;
import express from 'express' ;
import dotenv from "dotenv" ;
import { connectDB } from "./config/db.js" ;

dotenv.config() ;

const app = express() ;

//  create route: param 1 - path (e.g localhost:5000/...), 
app.get("/", (req, res) => {
    res.send("Server is ready, it also updates!"); 
});

//  endpoint for DB - post() sends data along with request
app.post("/products", async(req, res) => {
    
    const product = req.body;   //  user sends this data

    //  check whether data has sufficient data to be a Product object
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success:false,
                                        message: "Please provide all fields." });
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save() ;
        //  201: object created
        res.status(201).json({ success: true, data: newProduct}) ;
    } 
    catch (error) {
        console.error("Error in creating product: ", error.message) ;
        //  500: internal server error
        res.status(500).json({ success:false, message: "Server Error"}) ;
    }
});

//  Postman for testing without front-end app



//  attempt to connect to server and print message
app.listen(5000, () => {
    connectDB() ;
    console.log("Server started at http://localhost:5000. Hey, it's running!") ;
});
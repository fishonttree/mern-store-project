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

//  attempt to connect to server and print message
app.listen(5000, () => {
    connectDB() ;
    console.log("Server started at http://localhost:5000. Hey, it's running!") ;
});
const express = require('express');
const mongoose = require('mongoose')

const app = express();

// mongoose.connect("mongodb://localhost:27017/school").then(()=>{
//     console.log('LISTENING TO PORT 5000')
// })

app.listen(5000, ()=>{
    console.log('LISTENING TO PORT 5000')
})
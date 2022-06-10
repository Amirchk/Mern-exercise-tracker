//module setup
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
//
const app = express()
const port = process.env.PORT || 8000;

//connection 
const connection = mongoose.connect("mongodb://localhost:27017/Tracker",{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=> console.log("connection established") )
.catch( (err)=> console.log(err) );

//files routers
const exerciseRouter = require('./routes/exercises')
const userRouter = require('./routes/users')

//app code
app.use(cors());
app.use(express.json());

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
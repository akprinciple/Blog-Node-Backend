const express = require('express')

const app = express()
app.use(express.json())
const cors = require("cors")
const blogRouter = require("./routes/post")
const connect = require('./connection/connect')
app.use(cors())
const path = require('path');

app.use('/blog', blogRouter)
// For rendering image
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get('/', function (req,res) {
    res.send('Logout')
 })
 app.post('/api/v1', async function (req,res) {
    console.log(req.body);
    res.status(200).json(req.body)
 })
 let port = 5001

 const start = async ()=>{
   
   try {
      connect()
      app.listen(port, ()=>{
      console.log('App is runninng on port '+ port);})

   } catch (error) {
       console.log(error);
  }
     
 }
 start()
 
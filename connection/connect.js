const mongoose = require("mongoose")

const dburl = "mongodb://localhost:27017/news"
  // mongodb+srv://akeemolayiwola9:9000Naira@cluster0.mpus68f.mongodb.net/
const connect = ()=>{
    mongoose.connect(dburl)
    .then(()=>{
    console.log("Database Connection Successful");
     
    })
    .catch((error)=>{
      console.log(error);
    })
    
  }

  module.exports = connect
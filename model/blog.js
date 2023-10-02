const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    
    date:{ type: Date, default: Date.now },
    status:{
        type: String,
        default: 'Approved'
    },
    image:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('blogpost', blogSchema)
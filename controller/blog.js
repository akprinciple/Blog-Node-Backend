const blogpost = require("../model/blog");
// const multer = require('multer');


async function Addpost(req, res) {
  try{
      const image = 'http://localhost:5001/'+req.file.path
      
      if (!req.file) {
             res.status(400).json({ message: 'No file uploaded.' });
             return;
           }
    const {title, category, description, date} = req.body
    const make = await blogpost.create({title, category, description, date,image})
  
    res.status(200).json({message: 'Post successfully Added'})
      
   } catch (error) {
    res.json({message: 'Post not Added'})
    console.log(error);
   }
    
}
// Admin Fetching post
async function Allpost(req, res) {
   try {
      const data = await blogpost.find().limit(50).sort({date: -1})
      // console.log(data);
   res.status(200).json(data)
   // console.log('Good');
   } catch (error) {
      console.log(error);
   }
   
}
// User fetching Data
async function Allposts(req, res) {
   try {
      const data = await blogpost.find({status: 'Approved'}).limit(50).sort({date: -1})
      // console.log(data);
   res.status(200).json(data)
   // console.log('Good');
   } catch (error) {
      console.log(error);
   }
   
}
async function singlePost(req,res) {
   try {
      const {id} = req.params
      const finder = await blogpost.findById(id)
      res.status(200).json(finder)

   } catch (error) {
      console.log(error);
      
   }
}

async function approvePost(req,res) {
   try {
      const {_id,status} = req.body
      const finder = await blogpost.findById(_id)
      // console.log(finder);
      if (finder) {
         if(finder.status==='Approved'){
            data = {status: 'Unapproved'}
         }else{
            data = {status: 'Approved'}

         };
         try {
            const update = await blogpost.findByIdAndUpdate(_id, data, {new:true})
         // console.log('Updated');
         return res.status(200).json({message: 'Update Successful'})
         } catch (error) {
            res.status(400).json({message: 'Update Not Success'})
         }
         
      }

   } catch (error) {
      console.log(error);
      
   }
}

async function Updatepost(req,res) {
  const {id} = req.params
  const data = req.body
  try {
     const finder = await blogpost.findById({_id:id})
   //   console.log(data);
     if (finder) {
      // const findTitle = 
        const up = await blogpost.findByIdAndUpdate({_id:id}, data, {new:true})
        res.status(200).json({message: 'Update Successful'})
     }else{
        res.status(500).json({message: 'The system encountered an Error, Please try again!'})
   
     }
   
  } catch (error) {
   console.log(error);
  }

   
}
async function UpdateImage(req,res) {
   const {id} = req.params
  const image = 'http://localhost:5001/'+req.file.path
//   console.log(image);
  try {
   if (!req.file) {
      res.status(400).json({ message: 'No file uploaded.' });
      return;
    }
     const finder = await blogpost.findById(id)
     if (finder) {
        const up = await blogpost.findByIdAndUpdate({_id:id}, {image: image}, {new:true})
        res.status(200).json({message: 'Image Successfully Updated'})
     }else{
        res.status(500).json({message: 'The system encountered an Error, Please try again!'})
   
     }
   
  } catch (error) {
   console.log(error);
  }

}

module.exports = {Addpost, Allpost, Allposts, singlePost, approvePost, Updatepost, UpdateImage}
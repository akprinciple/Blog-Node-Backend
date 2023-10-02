const express = require ('express');

const { Addpost, Allpost, singlePost, approvePost, Updatepost, UpdateImage, Allposts } = require('../controller/blog');
const uploader = require('../middleware/imagemiddleware');

const router = express.Router();



router.post('/api/v1/addpost', uploader,  Addpost)
router.get('/api/v1/allpost', Allpost)
router.get('/api/v1/allposts', Allposts)
router.get('/api/v1/viewpost/:id', singlePost)
router.patch('/api/v1/approve', approvePost)
router.patch('/api/v1/updatepost/:id', Updatepost)
router.patch('/api/v1/updateimage/:id', uploader, UpdateImage)


module.exports = router
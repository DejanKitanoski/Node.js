const { request } = require('express')
const Post = require('../model/forumSchema')

const sendEmail = require('../handler/emailHandler')
exports.getPosts = async (req,res)=>{
  
  const queryObj = {...req.query};
    let queryString = JSON.stringify(queryObj);
    queryString = queryString.replace(/\b(gte|gt|lte|lt|regex|options)\b/g, (match) => `$${match}`);
    const query = JSON.parse(queryString);
    console.log(query)
    let posts = await Post.find(query);

    
    try{
        res.status(201).json({
            status:true,
            data:{
                lenght: posts.length,
                allPosts: posts,
            }
        })

    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err.message
            })
    }

}
//Zemam so id 
exports.getPost = async (req,res) =>{
    try{
const postId = req.params.id
const postFor = await  Post.findById(postId)
res.status(201).json({
    status:'success',
   
    data:{
        post: postFor,
    },

})
}catch(err){
res.status(500).json({
status:'fail',
message:err.message
})
}

}
exports.createPost = async (req, res) => {
    try {
    const newPost = await Post.create(req.body); 
    res.status(201).json({
    status: "success",
    data: {
          post: newPost,
        },
      });
      // await sendEmail({
      //   email: newPost.email,
      //   subject:'Post',
      //   messages:`Thenk you ${newPost.name} for creating a post`
      //       })
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };

  exports.createByUser = async (req,res) =>{
    try{
    const  newForum = await Post.create({
        title: req.body.title,
        content: req.body.content,
        slika: req.body.slika,
        author: req.auth.id
    })
    res.status(201).json({
        status: "success",
        data: {
              post: newForum,
            },
          });
          await sendEmail({
            email: req.auth.email,
            subject:'ForumnewForum',
            messages:`Thenk you ${req.auth.name} for creating a post`
                })
}catch(err){
    res.status(500).json({
        status: "fail",
        message: err.messages,
      });
}
}

exports.getByUser = async (req, res) => {
    try {
      const ForumUser = await Post.find({ author: req.auth.id });
  
      res.status(200).json(ForumUser);
    } catch (err) {
      res.status(404).json({ status: 'fail', message: err.message });
    }
  };


  exports.createPostPost = async (req,res)=>{
    try{
      console.log(req.body)
     
      await Post.create(req.body)
      res.redirect("/viewposts")
    }catch(err){
      res.status(500).send(err.message)
    }
  }
  
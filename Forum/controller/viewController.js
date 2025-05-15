const Post = require('../model/forumSchema')

exports.getLoginForm = (req,res) =>{
    try{
        res.status(200).render('login',{
            title: "login",
            podnaslov:'Login too see our Forum'
        })
    }catch(err){
        res.status(500).send('ERROR')
    }
}

exports.forumView = async (req,res )=>{
    try{

        const posts = await Post.find()


        res.status(200).render('forumView',{
            title: "Out Forum",
            podnaslov:'Welcome',
            
            posts,
        })
    }catch(err){
        res.status(500).send(err.message)
    }
}

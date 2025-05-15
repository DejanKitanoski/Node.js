const Post = require('../model/forumSchema')
const multer = require('multer')
const uuid = require('uuid')


const imageid = uuid.v4()
const multerStorage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"/img")
    },
    filename: (req,file,callback)=>{
        const ext = file.mimetype.split('/')[1]
        callback(null,`movie-${imageid}-${Date.now()}.${ext}`)
    }
})
const multerFilter = (req,file,callback)=>{
    if(file.mimetype.statsWith('imgae')){
        callback(null,true)
    }else{
        callback(new Error('Nee tocen fajlot'),false)
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
})

exports.uploadPhoto = upload.single('slika')



exports.update = async (req,res) =>{
    try{
        if(req.files){
            const fileName = req.files.filename
            req.body.slika = fileName
        }
        if(req.files && req.files.sliki){
            const filenames = req.files.sliki.map((file)=> file.fileName)
        }
        const post = await Post.findByIdAndUpdate(req.parms.id,{
            new: true,
            runValidators:true
        })
        res.status(200).json({
            status:'success',
            data:{
                Post,
            },
        })
    }catch(err){
        console.log
        res.status(404).json({
            starus:'fail',
            message: err,
        })
    }
}

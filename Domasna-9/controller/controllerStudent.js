const student = require('../model/studentSchema')
exports.getAllStudents = async (req,res) =>{
const students = await student.find();
try{
    res.status(201).json({
        status:true,
        data:{
            length: students.length,
            allStudents: students,
        },

    })
}catch(err){
res.status(500).json({
    status:'fail',
    message:err.message
})
}
}
exports.getStudnet = async (req,res) =>{
    try{
const studentId = req.params.id
const Student = await  student.findById(studentId)
res.status(201).json({
    status:'success',
   
    data:{
        student: Student,
    },

})
}catch(err){
res.status(500).json({
status:'fail',
message:err.message
})
}

}
exports.updateStudent = async (req,res) =>{
    try{
    const studentID =  req.params.id
    const updatedStudent = await student.findByIdAndUpdate(studentID,req.body)
        res.status(201).json({
            status:'success',
            data:{
            updateStudent: updatedStudent,
          },
})
    }catch(err){
res.status(500).json({
status:'fail',
message:err.message
})
    }
}

exports.addCreateStudent = async (req,res) => {
 try{
    console.log(req.body)
    
    const studdent = await student.create(req.body)
    console.log(studdent)
    res.status(201).json({

        status:'success',
        data:{
            newStudent: studdent
        },
      })
    } catch(err){
        res.status(500).json({
            status:'fail',
            message:err.message
         })
    }
    
}

exports.deleteStudent = async(req,res) => {
    try{
    const Studentid = req.params.id
    const deleteStudent = await student.findByIdAndDelete(Studentid)
    res.status(201).json({
    status:'success',
   
    data:{
        deleteStudent: deleteStudent,
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
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };
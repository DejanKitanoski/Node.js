const student = require('./model/studentSchema')
exports.getAllStudents = async () =>{
const students = await student .find();
try{
    res.status(201).json({
        status:true,
        length: students.length,
        data:{
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
const Student = await  student.findByid(studentId)
res.status(201).json({
    status:'success',
   
    data:{
        Student,
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
const updatedStudent = await student.findByidAndUpdate(studentID,req.body)
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
const studdent = await student.create(req.body)

res.status(201).json({
    status:'success',
   
    data:{
        newStudent: studdent
    },
})


    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err.message
            })
    }
}
exports.deleteStudent = async(req,res) => {
    try{
const Studentid = req.params.id
const deleteStudent = await student.findByidAndDelete(Studentid)
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
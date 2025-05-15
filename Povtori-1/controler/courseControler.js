const Course = require('../model/Course')

exports.createCourse = async (req, res) => {
    try {
    const newCourse = await Course.create(req.body); 
    res.status(201).json({
    status: "success",
    data: {
          course: newCourse,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };

  exports.getAllCourse = async (req,res) =>{
const course = await Course.find();
try{
    res.status(201).json({
        status:true,
        data:{
            length: course.length,
            allCourse: course,
        },

    })
}catch(err){
res.status(500).json({
    status:'fail',
    message:err.message
})
}
}
exports.updateCourse = async (req,res) =>{
    try{
    const courseID =  req.params.id
    const updatedCourse = await Course.findByIdAndUpdate(courseID,req.body)
        res.status(201).json({
            status:'success',
            data:{
            updatedCourse: updatedCourse,
          },
})
    }catch(err){
res.status(500).json({
status:'fail',
message:err.message
})
    }
}







exports.deleteCourse = async (req, res) => {
    try{
    await Course.findByIdAndDelete(req.params.id);
    res.status(201).json({
        status: "success",
    });
} catch(err){
    res.status(500).json({
        status: "fail",
        message: err.message,
    });
};
}
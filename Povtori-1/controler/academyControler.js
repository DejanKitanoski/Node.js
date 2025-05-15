const Academy = require('../model/Academy')


exports.createAcademy = async (req, res) => {
    try {
    const newAcademy = await Academy.create(req.body); 
    res.status(201).json({
    status: "success",
    data: {
          academy: newAcademy,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };



exports.getAllAcademys = async (req,res) =>{
const academys = await Academy.find();
try{
    res.status(201).json({
        status:true,
        data:{
            length: academys.length,
            allAcademys: academys,
        },

    })
}catch(err){
res.status(500).json({
    status:'fail',
    message:err.message
})
}
}


exports.updateAcademy = async (req,res) =>{
    try{
    const academyID =  req.params.id
    const updatedAcademy = await Academy.findByIdAndUpdate(academyID,req.body)
        res.status(201).json({
            status:'success',
            data:{
            updatedAcademy: updatedAcademy,
          },
})
    }catch(err){
res.status(500).json({
status:'fail',
message:err.message
})
    }
}
exports.deleteAcademy = async (req, res) => {
  try {
    await Academy.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message,
    });
  }
};
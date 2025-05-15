const Program = require('../model/programModel')





exports.createProgram = async (req, res) => {
    try {
    const newProgram = await Program.create(req.body); 
    res.status(201).json({
    status: "success",
    data: {
          program: newProgram,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };

    exports.getAllProgram= async (req,res) =>{
    const program = await Program.find();
    try{
        res.status(201).json({
            status:true,
            data:{
                length: program.length,
                allProgram: program,
            },
    
        })
    }catch(err){
    res.status(500).json({
        status:'fail',
        message:err.message
    })
    }
    }



exports.updateProgram = async (req,res) =>{
 try{
const programlID =  req.params.id
const updatedProgram= await Program.findByIdAndUpdate(programlID,req.body)
          res.status(201).json({
              status:'success',
              data:{
              updatedProgram: updatedProgram,
            },
  })
      }catch(err){
  res.status(500).json({
  status:'fail',
  message:err.message
  })
      }
  }
  
  exports.deleteProgram = async (req, res) => {
    try {
      await Program.findByIdAndDelete(req.params.id);
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
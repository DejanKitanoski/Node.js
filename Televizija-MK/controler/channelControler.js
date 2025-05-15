const Chanenel = require('../model/tvModel')

exports.createChannel = async (req, res) => {
    try {
    const newChannel = await Chanenel.create(req.body); 
    res.status(201).json({
    status: "success",
    data: {
          channel: newChannel,
        },
      });
    } catch (err) {
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  };

  exports.getAllChannel = async (req,res) =>{
  const channel = await Chanenel.find();
  try{
      res.status(201).json({
          status:true,
          data:{
              length: channel.length,
              allChannel: channel,
          },
  
      })
  }catch(err){
  res.status(500).json({
      status:'fail',
      message:err.message
  })
  }
  }

  exports.updateChannel = async (req,res) =>{
      try{
      const channelID =  req.params.id
      const updatedChannel = await Channel.findByIdAndUpdate(channelID,req.body)
          res.status(201).json({
              status:'success',
              data:{
              updatedChannel: updatedChannel,
            },
  })
      }catch(err){
  res.status(500).json({
  status:'fail',
  message:err.message
  })
      }
  }
  
  exports.deleteChannel = async (req, res) => {
    try {
      await Channel.findByIdAndDelete(req.params.id);
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
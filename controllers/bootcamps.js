//@desc     Get all bootcamps
//@route    GET api/v1/bootcamps
//@access   Public 
exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({success:true,message:'Show all bootcamps'});
} 

//@desc     Get single bootcamp
//@route    GET api/v1/bootcamps/:id
//@access   Public 
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json({success:true,message:`Show bootcamps ${req.params.id}`});
} 

//@desc     Create new bootcamp
//@route    POST api/v1/bootcamps
//@access   Private
exports.createBootcamps = (req,res,next) =>{
    res.status(200).json({success:true,message:'Create all bootcamps'});
} 

//@desc     Update bootcamp
//@route    PUT api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamps = (req,res,next) =>{
    res.status(200).json({success:true,message:`Update bootcamps ${req.params.id}`});
} 

//@desc     Delete bootcamp
//@route    DELETE api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamps = (req,res,next) =>{
    res.status(200).json({success:true,message:`Delete bootcamps ${req.params.id}`});
} 
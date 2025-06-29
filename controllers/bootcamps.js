const Bootcamp = require('../models/Bootcamp');

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
exports.createBootcamps = async (req,res,next) =>{
    try {
        const bootcamp = await Bootcamp.create(req.body);

        res.status(201).json({
        success:true,
        data:bootcamp
    });
        
    } catch (error) {
        res.status(400).json({success:false});
    }
};

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
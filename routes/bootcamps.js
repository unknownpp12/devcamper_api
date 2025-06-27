const express = require('express');
const {getBootcamps,getBootcamp,deleteBootcamps,createBootcamps,updateBootcamps} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamps);

router.route('/:id').get(getBootcamp).put(updateBootcamps).delete(deleteBootcamps);

module.exports= router;
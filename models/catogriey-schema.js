'use strict';

const mongoose = require('mongoose');


const catogriey = mongoose.Schema({
  name:{type:String,required:true},
});

module.exports = mongoose.model('catogriey',catogriey);
'use strict';

const Model = require('./memory-data-model');

const schema = require('./models/catogriey-schema');
class Catogriey extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = Catogriey;
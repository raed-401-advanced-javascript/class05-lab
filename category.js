'use strict';

const model = require('./memory-data-model');

const schema = require('./models/catogriey-schema');
class catogriey extends model{
  constructor(){
    super(schema);
  }
}

module.exports = catogriey;
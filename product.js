'use strict';

const Model = require('./memory-data-model');

const schema = require('./models/products-schema');
class Product extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = Product;
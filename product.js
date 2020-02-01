'use strict';

const model = require('./memory-data-model');

const schema = require('./models/products-schema');
class Product extends model{
  constructor(){
    super(schema);
  }
}

module.exports = Product;
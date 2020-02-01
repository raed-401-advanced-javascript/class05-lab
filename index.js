'use strict';
const Products = require('./models/products-schema');
const mongoose = require('mongoose');

const MONGOOSE_URI = 'mongodb://localhost:27017/lab5';

mongoose.connect(MONGOOSE_URI,{useNewUrlParser:true,useUnifiedTopology: true});

const new_product = new Products({price:5,weight:6,quantity_in_stock:7});

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.set('useUnifiedTopology',true);
// mongoose.set('useUnifiedTopology', true);
new_product.save();





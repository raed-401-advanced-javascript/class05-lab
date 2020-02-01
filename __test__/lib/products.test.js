'use strict';

const Products = require('../../product');
require('@code-fellows/supergoose');

describe('Products Model', () => {
  let product;
  beforeEach(()=>{
    product = new Products();
        
  });


  it('can post() a new product', () => {
    let obj = { price: 9, quantity_in_stock: 10 };
    return product.create(obj)
      .then(record => {
        // console.log(record)
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      }).catch(e => console.error('ERR', e));
  });
  it('can get() a product', () => {
    let obj = { price: 7, quantity_in_stock: 8 };
    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(product_data => {
            // console.log(product_data)
            Object.keys(obj).forEach(key => {
              expect(product_data[key]).toEqual(obj[key]);
            });
          });
      });
  });
  it('can update() a product', () => {
    let obj = { price: 5, quantity_in_stock: 6 };
    return product.create(obj)
      .then(record => {
        record.price = 3;
        record.quantity_in_stock = 10;
        return product.update(record._id, record)
          .then(newPorduct => {
            return product.get(newPorduct._id)
              .then(data => {
                // console.log(category)
                Object.keys(obj).forEach(key => {
                  expect(data[key]).toEqual(newPorduct[key]);
                });
              });
          });
      });
  });
  it('can delete() a product', () => {
    let obj = { price: 2, quantity_in_stock: 10 };
    return product.create(obj)
      .then(record => {
        return product.get(record._id)
          .then(product_data => {
            return product.delete(product_data._id)
              .then(record => {
                return product.get(record._id)
                  .then(product_data => {
                    // console.log(record)
                    expect(product_data).toBe(null);
                  });
              });
          });
      });
  });
});
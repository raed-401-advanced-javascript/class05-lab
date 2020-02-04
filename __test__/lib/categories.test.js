'use strict';

require('@code-fellows/supergoose');

const Categories = require('../../category');


describe('check the caetogriey model',()=>{
  let categoriey;
  beforeEach(()=>{
    categoriey = new Categories();
  });
  it('check if can post()',()=>{
    let obj = {name : 'raed'};
    return categoriey.create(obj)
      .then(output =>{
        Object.keys(obj).forEach(key=>{ 
          expect(obj[key]).toEqual(output[key]);
        });
      });
  });
  it('check if can get()',()=>{
    let obj = {name:'raed'};
    return categoriey.create(obj)
      .then(output=>{
        return categoriey.get(output._id)
          .then(data=>{
            Object.keys(obj).forEach(key =>{
              expect(obj[key]).toEqual(data[key]);
            });
          });
      });
  });
  it('check if it can update()',()=>{
    let obj = {name:'raed'};
    return categoriey.create(obj)
      .then(output =>{
        console.log('&&&&&&&',output);
        obj.name = 'travis scoot';
        output.name = 'travis scoot';
        return categoriey.update(output._id,output)
          .then(data =>{
            // console.log('update output',data);
            Object.keys(obj).forEach(key=>{
              expect(obj[key]).toEqual(data[key]);
            });
          });
      });
  });
  it('check if it can delete()',()=>{
    let obj = {name:'raed'};
    return categoriey.create(obj)
      .then(output =>{
        return categoriey.delete(output._id)
          .then(data =>{
            return categoriey.get(data._id)
              .then(get_output=>{
                expect(get_output).toBe(null);
              });

          });
      });
      
  });
});
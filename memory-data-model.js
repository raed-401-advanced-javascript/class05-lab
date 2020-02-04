/* eslint-disable no-undef */
'use strict';

class Model {

  constructor(schema) {
    this.schema = schema;
  }

  get(_id) {
    if(_id) {
      return this.schema.findOne({_id});
    }
    else {
      return this.schema.find({_id});
    }
    // let response = id ? this.database.filter((record) => record.id === id) : this.database;
    // return Promise.resolve(response);
  }

  create(record) {
    return this.schema.create(record);
    // record.id = uuid();
    // this.database.push(record);
    // return Promise.resolve(record);
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, {new: true});
    // this.database = this.database.map((item) => (item.id === id) ? record : item);
    // return Promise.resolve(record);
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
    // this.database = this.database.filter((record) => record.id !== id);
    // return Promise.resolve();
  }

}

module.exports = Model;
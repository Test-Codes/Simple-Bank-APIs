/**
* Accounts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    owner: {
      type: 'string',
      required: true
    },

    deposit: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    }
  },

  // Lifecycle Callbacks
  beforeValidate: function (values, cb) {
    if (!values.owner)
      values.owner = 'Anonymous';
    cb();
  }
};

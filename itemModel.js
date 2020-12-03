var mongoose = require("mongoose");
// ! Setup schema
var datalistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    require: true,
  },
  time: {
      type: String,
      require: true
  },
  type: {
    type: String,
    require: true,
  },
  imgUrl: {
    type: String,
    require: true,
  },
  rate: {
    type: String,
    require: true,
  },
  category: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});
// ! Export Contact model
var DataList = (module.exports = mongoose.model("datalists", datalistSchema));
module.exports.get = function (callback, limit) {
  DataList.find(callback).limit(limit);
};

/*
     My rating chart will be like this:
      1  ==> Very Boring
      2  ==> Not so dusty!
      3  ==> Wonderful
      4  ==> Very cool
      5  ==> Just WOW
    */

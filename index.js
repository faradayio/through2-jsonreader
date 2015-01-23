var through2 = require('through2');

module.exports = function(){
  return through2.obj(function(chunk, enc, cb){
    chunk = chunk.toString();
    var err = null;

    try {
      chunk = JSON.parse(chunk);
    } catch (error) {
      err = error;
      chunk = null;
    }

    cb(err, chunk);
  });
};
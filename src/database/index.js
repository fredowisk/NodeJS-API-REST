const mongoose = require("mongoose");
mongoose.connect("mongodb://192.168.99.100:28017/noderest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);
mongoose.Promise = global.Promise;

module.exports = mongoose;

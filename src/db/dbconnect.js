const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const uname = "admin";
const pass = "admin";
const prefix = "mongodb+srv";
function Database(dbName) {
  this.url = `${prefix}://${uname}:${pass}@cluster0.clvp4.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  this.connect = function () {
    return mongoose
      .connect(this.url)
      .then((res) => {
        isDbConnected = true;
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error");
      });
  };
}
module.exports = Database;
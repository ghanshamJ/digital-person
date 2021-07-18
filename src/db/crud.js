const Database = require("./dbconnect");
const PersonModel = require("../models/personschema");
const db = new Database("persondb");
let isDbConnected = false;
db.connect();

class PersonDbOperation {
  insert(data) {
    const person = new PersonModel(data);
    return person.save();
  }
  selectAll() {
    return new Promise((res, rej) => {
      PersonModel.find(function (error, data) {
        if (error) {
          rej({ error });
        } else {
          res(data);
        }
      });
    });
  }
  selectOne(id) {
    return new Promise((res, rej) => {
      PersonModel.findOne({ _id: id }, function (error, data) {
        if (error) {
          rej({ error });
        } else {
          res(data);
        }
      });
    });
  }
  update(id, data) {
    return new Promise((res, rej) => {
      PersonModel.findByIdAndUpdate(
        { _id: id },
        data,
        function (error, result) {
          if (error) {
            rej({ error });
          } else {
            res(result);
          }
        }
      );
    });
  }

  getPersonCountByCountry(){
    return PersonModel.aggregate([
      {"$group" : {_id:"$country", count:{$sum:1}}}
  ])
  }
}
module.exports = PersonDbOperation;

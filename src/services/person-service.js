const PersonDbOperation = require("../db/crud");
const personDbOperation = new PersonDbOperation();
class PersonService {
  insert(data) {
    return personDbOperation.insert(data);
  }
  selectAll() {
    return personDbOperation.selectAll();
  }
  selectOne(id) {
    return personDbOperation.selectOne(id);
  }
  update(id, data) {
    return personDbOperation.update(id, data);
  }
}
module.exports = PersonService;

/**
 * Created by ling.zou on 2018/4/19.
 */

const user = require('../model/user');

class handler {
  getAll() {
    return user.find();
  }
  getOne(data) {
    return user.findOne(data);
  }
  add(data) {
    return user.create(data);
  }
  edit(data) {
    return user.update({_id: data._id}, data);
  }
  del(id) {
    return user.remove({_id: id});
  }
}

module.exports = new handler;

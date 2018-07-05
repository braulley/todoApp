const mongoose = require('mongoose')

mongoose.Promise = global.Promise
//module.exports = mongoose.connect('mongodb://localhost/todo')
module.exports = mongoose.connect('mongodb://todo:todo123@ds125881.mlab.com:25881/todo-25')
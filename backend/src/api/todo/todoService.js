const Todo = require('./todo')

Todo.methods(['get','post','put','delete'])
//Retornar registros atualizados e 
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
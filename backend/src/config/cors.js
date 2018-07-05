module.exports = function(req, res, next) {
    res.header('Acces-Control-Allow-origin','*')
    res.header('Acces-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH DELETE')
    res.header('Acces-Control-Allow-origin','Origin, X-Requested-With, Content-Type, Accept')
    next()
}
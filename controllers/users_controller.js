module.exports.users = function(req, res){
    return res.send("<h1>Hello from Users</h1>");
}

module.exports.another = function(req, res){
    return res.send('<p>This is another function from users controller</p>' )
}
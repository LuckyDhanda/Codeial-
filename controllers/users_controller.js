module.exports.users = function(req, res){
    return res.render('users', {title : 'Codeial'});
}

module.exports.another = function(req, res){
    return res.send('<p>This is another function from users controller</p>' )
}
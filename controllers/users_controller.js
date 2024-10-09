module.exports.users = function(req, res){
    return res.render('users', {title : 'Codeial'});
}

module.exports.signUp = function(req, res){
    return res.render('signUp', {title: 'sign up page'});
}

module.exports.signIn = function(req, res){
    return res.render('signIn', {title: 'sign in page'});
}


// Form action will be written here
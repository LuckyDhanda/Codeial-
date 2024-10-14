const User = require('../models/user');

module.exports.users = function(req, res){
    return res.render('users', {title : 'Codeial'});
}

module.exports.signUp = function(req, res){
    return res.render('signUp', {title: 'sign up page'});
}

module.exports.signIn = function(req, res){
    return res.render('signIn', {title: 'sign in page'});
}


// get the sign up data
module.exports.create = async function(req, res) {
    try {
        // Check if the passwords match
        if (req.body.password !== req.body.password_repeat) {
            return res.redirect('/users/sign-up'); // Redirect if passwords do not match
        }

        // Find the user by email
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            // If the user does not exist, create a new user
            try {
                const newUser = await User.create(req.body); // Create a new user
                return res.redirect('/users/sign-in'); // Redirect to sign-in on success
            } catch (err) {
                console.log(`Error in creating user while signing up: ${err}`);
                return res.redirect('/users/sign-up'); // Redirect on error
            }
        } else {
            // If the user already exists, redirect
            return res.redirect('/users/sign-in');
        }
    } catch (err) {
        console.log(`Error in finding user: ${err}`);
        return res.redirect('/users/sign-up'); // Redirect on error
    }

}

module.exports.createSession = async function (req, res){
    return res.redirect('/');
} 

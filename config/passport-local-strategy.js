const passport = require ('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.use(new LocalStrategy({
  usernameField: 'email' // Specify that the username field is actually the email field
},
async function(email, password, done) {
  try {
    // Use await with findOne (it returns a promise now)
    const user = await User.findOne({ email: email });

    // Check if the user exists
    if (!user || user.password !== password) {
      return done(null, false, { message: 'Incorrect email/password' });
    }

    // If user is found and password matches
    return done(null, user);
  } catch (err) {
    // Handle any errors that occur
    return done(err);
  }
}
));



// serializeUser: This function determines what data should be stored in the session. In this case, it stores the user ID after a successful login.
passport.serializeUser(function(user, done) {  
  done(null, user.id);    // Store user ID in the session
});

// deserializeUser: This function retrieves the user data based on the stored ID. It is called on subsequent requests to fetch the user object associated with the session.

passport.deserializeUser(async function(id, done){
  try{
    const user = await User.findById(id);
    return done(null, user);
  }catch(err){
    console.log('Error in finding user --> Passport');
          return done(err);
  }
});

module.exports = passport;
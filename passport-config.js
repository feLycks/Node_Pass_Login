const localStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserByEmail) {
    const authenticateUser = (email, passport, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'User not found' })
        }
        try {
            if (await bcrypt.compare(password, user.passport)) {
                return done(user)
            } else {
                return done(null, false, { message: 'Password Missmatch' })
            }
        } catch (e) {
            return done
        }
    }

    passport.use(new localStrategy({ usernameField: 'email' }), authenticateUser)
        // save user password on sessions
    passport.serializeUser((user, done) => {})
    passport.serializeUser((id, done) => {})

}

module.exports = initialize
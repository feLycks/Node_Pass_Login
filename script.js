// const { urlencoded } = require('express');
const express = require('express')
const app = express();
const bcrypt = require('bcrypt');
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

// routes 

const initializePassport = require('./passport-config')
initializePassport(passport, email => {
    return users.find(user => user.email === email)
})

// get users 
// @TODO publish the users to mongoDB atlas 
const users = []

app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
app.use(flash)




app.get('/', (req, res) => {
    res.render('index.ejs')
})

// LOGIN 
app.get('/login', (req, res) => {
    res.render('login.ejs')

})
app.post('/login', (req, res) => {

})

// REGISTER 
app.get('/register', (req, res) => {
    res.render('register.ejs')

})

// Register Users 
app.post('/register', async(req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    } catch {
        res.redirect('/register')
    }
    // push users to DB 
    // console.log(users);
})

// HOMEPAGE 
app.get('/home', (req, res) => {
    res.render('home.ejs')

})

app.listen(3000, () => console.log('Server Running'));
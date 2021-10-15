const { urlencoded } = require('express');
const express = require('express')
const app = express();

const users = []

app.set('view-engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))


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

app.post('/register', (req, res) => {

})

// HOMEPAGE 
app.get('/home', (req, res) => {
    res.render('home.ejs')

})

app.listen(3000, () => console.log('Server Running'));
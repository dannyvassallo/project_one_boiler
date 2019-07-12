const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const app = express()
const port = process.env.PORT || 3000
const html_dir = './public/html/'

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.listen(port, () => console.log(`App is running. Visit localhost:${port} in chrome.`))
app.get('/', (req, res) => res.sendFile(html_dir + 'index.html', { root: __dirname }))
app.get('/login', (req, res) => res.sendFile(html_dir + 'login.html', { root: __dirname }))
app.get('/home', (req, res) => res.sendFile(html_dir + 'home.html', { root: __dirname }))
app.get('/signup', (req, res) => res.sendFile(html_dir + 'signup.html', { root: __dirname }))
app.get('/login', (req, res) => res.sendFile(html_dir + 'login.html', { root: __dirname }))
app.get('/forgot', (req, res) => res.sendFile(html_dir + 'forgot.html', { root: __dirname }))
app.get('/homepage', (req, res) => res.sendFile(html_dir + 'homepage.html', { root: __dirname }))
app.get('/booking', (req, res) => res.sendFile(html_dir + 'booking.html', { root: __dirname }))
app.get('/about', (req, res) => res.sendFile(html_dir + 'about.html', { root: __dirname }))


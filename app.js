const exp = require('constants');
const express = require('express');
const req = require('express/lib/request');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/list', (req, res) => {
    res.render('list');

});

app.get('/list', (req, res) => {
    let name = document.getElementsByName("name")
    
    console.log(name)
    
    let qty = document.getElementsByName("measurement")
    
    console.log(qty)
    
    let cost = document.getElementsByName("cost")
    
    console.log(cost)
   res.send("post")
   res.redirect('/list')
})
app.post('/list', (req, res) => {
    let name = document.getElementsByName("name")
    
    console.log(name)
    
    let qty = document.getElementsByName("measurement")
    
    console.log(qty)
    
    let cost = document.getElementsByName("cost")
    
    console.log(cost)


    res.send('${name}, qty, cost')
    res.redirect('/list')
})




app.listen(port);
console.log('Server started at http://localhost:' + port);
const express = require('express');
const app = express();

const PORT = process.env.PORT | 8000;
app.set('view engine', 'ejs');


const firstName = 'Hamza';
const lastName = 'Ashraf';
const rollNum = 'SP19-BCS-046'
const email = 'sp19-bcs-046@cuilahore.edu.pk';

app.get('/', (req, res)=>{
    res.render('home',{firstName, lastName, rollNum});
});
app.get('/login', (req, res)=>{
    res.render('login');
});
app.get('/register', (req, res)=>{
    res.render('register');
});
app.get('/profile', (req, res)=>{
    res.render('profile', {firstName, lastName, email});
});

app.listen(PORT, ()=>{
    console.log(`Listening to port ${PORT}`);
})
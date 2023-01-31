const express = require('express');
const ejs = require('ejs');
const port = 8000;


const app = express()
app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));




app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})

app.get('/skill',(req,res)=>{
    res.render('skill')
})
app.get('/service',(req,res)=>{
    res.render('service')
})
app.get('/project',(req,res)=>{
    res.render('project')
})
app.get('/contact',(req,res)=>{
    res.render('contact')
})

app.listen(port,()=>{
    console.log('server ready');
});
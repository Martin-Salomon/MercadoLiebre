const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './Public'); 
app.use(express.static(publicPath));

/* app.listen(3050, ()=>{
    console.log("servidor corriendo en el puerto http://localhost:3050");
}); */

app.listen(process.env.PORT || 3050, ()=>{
    console.log("servidor corriendo en el puerto http://localhost:3050");
});

 app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.post('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});
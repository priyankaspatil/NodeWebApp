const express= require('express')
const fs=require('fs')

var app=express();


const port=process.env.PORT||3400;
app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'));

/* app.use((req,res,next)=>{
    res.render('maintainance.ejs');
    
}); */

app.use((req,res,next)=>{
    var logg= new Date().toString();
    logg =logg + req.method + req.path;
    fs.appendFile('server.log',logg)
    next();
});

app.get('/',(req,res)=>{
    res.send('<h1>Hello Express</h1>');
});


app.get('/user',(req,res)=>{
  res.render('home.ejs',{
      pagetitle:"Home Page",
      username:"Nikita"
  });
  
  
  
    /*  res.send({
        name:'FIGmd',
        address:'Baner'
    }); */
});

app.listen(port,()=>{
    console.log('server started  at localhost:3000')
});

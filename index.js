var express=require('express')
var app=express()

app.set('view engine', ejs)

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.listen(3000, ()=>{
    console.log('app is running')
})
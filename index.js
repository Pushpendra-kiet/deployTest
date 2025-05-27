var express=require('express')
const bodyParser = require('body-parser');
var app=express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index',{title:'My App'})
})

app.listen(3000, ()=>{
    console.log('app is running')
})
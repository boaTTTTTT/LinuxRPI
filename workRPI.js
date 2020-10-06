const mongoose=require('mongoose');
var express=require("express");

var app=express();
mongoose.set('debug',true)
mongoose.connect('mongodb://localhost/s60030089',{useNewUrlParser: true, useUnifiedTopology: true});
const myModel=mongoose.model('Boat',new mongoose.Schema({name: String, surname: String, email : String, picUrl: String}));
var query=myModel.where({email:'60030089@kmitl.ac.th'});
app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res){
    query.findOne((err, data)=>{
        if(!err){
            //res.json(data);
            var html=
                "<html>"+
                "<title>My profile </title>"+
                "<head>"+
                "<link rel='stylesheet' type='text/css' href='RPI.css'>"+
                "</head>"+
                "<body>"+
                "<b>Hello</b>"+
                "<br></body>"+
                "<a>"+data.name+" "+data.surname+"<br></a>"+
                "<b>Contact Me<br></b>"+
                "<a>Email : "+data.email+"<br></a>"+
                "<img class='"+data.picUrl+"' src='./profile.jpg' >"+
                "</html>";
                res.send(html)
        }
    });
    
    
    // res.send(html);

});

app.get('/myprofile',(req, res)=>{
    res.send("This is myprofile page.");
})

app.listen(3012);
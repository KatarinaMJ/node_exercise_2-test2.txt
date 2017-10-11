const express = require('express')
const app = express ()

app.use(express.static ('public'))

function greet (){

    var myArry = ["hello","hei","hej","jeg liker brokoli"];
    var random = myArry [Math.floor(Math.random()* myArry.length)];
    return random;
}

app.get('/random/:id', function(req,res){
    res.send(greet () + " " + req.params.id);

})

app.listen(8080, function (){
    console.log('Example app listening on port 8080!')
    console.log(greet());
    // console.log (greet());
})
const express = require('express');
const app = express();
const Datastore = require('nedb');
app.listen(3000,() => console.log("listening at 3000"));

const database = new Datastore('database.db');
database.loadDatabase();

app.use(express.static('public'));

app.use(express.json({limit:'1mb'}));

app.post('/api',(req,res)=>{
    console.log("i got a request");
console.log(req.body);

database.push(req.body);

res.json({
    status:'success',
    latitude:req.body.lat,
    longitude:req.body.lon
});

console.log(database);

});





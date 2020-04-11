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
        const data = req.body;
        const timestamp = Date.now();
       
        data.timestamp=timestamp;

    database.insert(data);

    res.json({
        status:'success',
        latitude:data.lat,
        longitude:data.lon,
        timestamp
    });

    console.log(database);

    });





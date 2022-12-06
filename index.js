const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes');

const app = express();
const PORT = 4000;

// mongoose connection
require('./Modules/database/index');


// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

routes(app);

app.use((req,res)=>{
    res.status(404).send({Status:'Not Found'});
});

process.on('uncaughtException',(e)=>{
    console.log(e);
});

process.on('unhandledRejection',(e)=>{
    console.log(e);
});

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

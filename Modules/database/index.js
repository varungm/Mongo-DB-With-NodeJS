const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/productsdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error',()=>{
    console.log("Error connecting to Mongo DB");
});

db.once('open',()=>{
    console.log("Connected to Mongo DB Database");
});

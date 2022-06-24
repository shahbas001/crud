const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/crudDB', (err) => {
    if(!err) 
        console.log('mongoDB connection succeeded');
    else
        console.log('error in DB' + JSON.stringify(err, undefined, 2));
              
});
module.exports = mongoose;
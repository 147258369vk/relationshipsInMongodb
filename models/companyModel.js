const mongoose = require('mongoose');

var compSchema=mongoose.Schema({
    cname:{
        type:String
    },
    cadd:{
        type:String
    }
});

mongoose.model('comp',compSchema);
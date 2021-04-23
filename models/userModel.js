const mongoose = require('mongoose');

var companySchema=mongoose.Schema({

    name:{ 
        type:String
    },
    address:{
        type:String
    },
    product:[{
        pname:{
            type:String   
        },
        price:{
            type:Number
        }
    }]
})

mongoose.model('company',companySchema);
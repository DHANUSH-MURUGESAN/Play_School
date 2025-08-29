const mongoose = require('mongoose')

const AdmissionSchema = new mongoose.Schema({
    childName:{
        type : String
    },
    dob:{
        type:Number
    },
    gender:{
        type:String
    },
    parentName:{
        type:String
    },
    contact:{
        type:String
    },
    email:{
        type:String
    },
    address:{
        type: String
    },
    message:{
        type:String
    }
},{
    collection: "AdmissionForm"
})

const AdmissionModel = mongoose.model("AdmissionForm",AdmissionSchema)
module.exports = AdmissionModel
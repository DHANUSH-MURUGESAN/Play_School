const mongoose = require('mongoose');

const KidSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: Number
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
}, {
    collection: "Contactform"
});

const KidsModel = mongoose.model("Contactform", KidSchema);
module.exports = KidsModel;
const mongoose = require('mongoose');

const KidSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      minlength: [3, "First name must be at least 3 characters"],
      maxlength: [50, "First name cannot exceed 50 characters"],
    },
    lastName: {
      type: String,
      trim: true,
      maxlength: [50, "Last name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email is required"],
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
      lowercase: true,
      trim: true,
    },
    mobile: {
      type: Number,
      required: [true, "Mobile number is required"],
      match: [/^[0-9]{10}$/, "Mobile number must be exactly 10 digits"],
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    state: {
      type: String,
      required: [true, "State is required"],
      trim: true,
    },
}, {
    collection: "Contactform"
});

const KidsModel = mongoose.model("Contactform", KidSchema);
module.exports = KidsModel;
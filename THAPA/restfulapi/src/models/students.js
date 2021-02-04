const mongoose = require("mongoose")
const validator = require("validator")

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 12,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        // min: 3,
        // max: 30,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }

})

// create new collection
const Student = new mongoose.model('Student', studentSchema)

module.exports = Student
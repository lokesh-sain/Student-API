const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    street:{type:String,required:[true,"provide address to process"]},
    pincode:{type:Number,required:[true,"enter a valid pincode no."]},
    phone:{type:Number,required:[true,"enter a valid mobile no."]}
})

const studentSchema = new mongoose.Schema({
    firstName:{type:String,required:[true,"firstname is required to proceed."],min:[2,"Min 2 Characters Required."],max:[16,"Max 16 Characters."]},
    lastName:{type:String,required:false,max:[16,"Max 16 Characters."]},
    age:{type:Number,min:[2,"Age Should Be Grater Than 12"],max:[100,"Age Should Not Exceed 100."]},
    email:{type:String,required:[true,"email is required."],unique:[true,"email already exits"], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    contact:{type:contactSchema,required:[true,"contact details required to proceed."]}
});

const studentModel = mongoose.model('student',studentSchema);

module.exports = studentModel;
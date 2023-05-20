import mongoose from 'mongoose';



const userRegistrationSchema = mongoose.Schema({
    Name: String,
    mailId: String,
    pin: Number,
    city: String,
    state: String,
    country: String,
    phoneNumber:Number,
    status:{
        type:String,
        default:"unattended"
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var UserRegistration = mongoose.model('userRegistration', userRegistrationSchema);

export default UserRegistration;


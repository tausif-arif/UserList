import  mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const UserSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    city:String,
}) ;

// autoIncrement.initialize(mongoose.connection)
// UserSchema.plugin(autoIncrement.plugin,'user');
const user = mongoose.model('user',UserSchema);


export default user;
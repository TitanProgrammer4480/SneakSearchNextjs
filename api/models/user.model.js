import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A username is required"],
        trim: true,
        minLength: [2, "Your username is too short"],
        maxLength: [50, "Your username is too long"],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please fill a valid email address"]
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLength: [6, "Your password is to short"]
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
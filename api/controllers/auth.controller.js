import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.model.js";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../env.js";

export const signUp = async (req, res, next) => {
    console.log("started transaction");
    const session = await mongoose.startSession();
    session.startTransaction();

    try {

        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        console.log("got info");

        if(existingUser) {
            const error = new Error("User already exists");
            error.statusCode = 409;
            throw error;
        }
        console.log("checked user");
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        console.log("encrypted password");
        const newUsers = await User.create([{ name, email, password: hashedPassword}], { session });
        const token = jwt.sign({ userId: newUsers[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

        await session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: {
                token,
                user: newUsers[0]
            }
        });
    } catch (err) {
        await session.abortTransaction();
        session.endSession();
        next(err);
    }
}

export const signIn = async (req, res, next) => {}

export const signOut = async (req, res, next) => {}
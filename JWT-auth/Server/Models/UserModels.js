import express from "express";
import mongoose from "mongoose";

const UserData = new mongoose.Schema(
  {
    UserName: {
      type: String,
      unique: true,
      required: true,
      default: "Not Mentioned",
      minlength: 5
    },
    Password: {
      type: String,
      unique: false,
      required: true,
      default: "Not Mentioned",
      minlength: 4
    },
    FirstName:{
      type: String,
      unique: false,
      required: true,
      default: "Not Mentioned",
      minlength: 3
    },
    LastName:{
      type: String,
      unique: false,
      required: false,
      default: "Not Mentioned",
      minlength: 2
    },
    Year:{
      type: String,
      unique: false,
      required: true,
      default: "Not Mentioned",
      minlength: 4
    },
    Brach:
    {
      type: String,
      unique: false,
      required: true,
      default: "Not Mentioned",
      minlength: 2
    },
    Email:{
      type: String,
      unique: true,
      required: true,
      default: "Not Mentioned",
      minlength: 7
    }

  },
  { timestamps: true }
);

const AdminData = new mongoose.Schema(
  {
    UserName: {
      type: String,
      unique: true,
      required: true,
      default: "Not Mentioned",
      minlength: 6
    },
    Password: {
      type: String,
      unique: false,
      required: true,
      default: "Not Mentioned",
      minlength: 6
    },
    TypeOfAdmin:{
      type: String,
      unique: false,
      required: true,
      default: "Placement",
      minlength: 6
    },
  },
  { timestamps: true }
);

const UserLoginData = mongoose.model("UserLoginData", UserData);
const AdminLoginData = mongoose.model("UserLoginData", UserData);

export default UserLoginData;
export { AdminLoginData };

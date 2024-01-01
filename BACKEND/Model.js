import mongoose from "mongoose";

const LoginSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

let LoginAuth = mongoose.model("Login", LoginSchema);
let RegisterAuth = mongoose.model("Register", RegisterSchema);

export { LoginAuth, RegisterAuth };

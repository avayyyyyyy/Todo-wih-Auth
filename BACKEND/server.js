import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import zod from "zod";
import { LoginAuth, RegisterAuth } from "./Model.js";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const emailValid = zod.string().email();
const passwordValid = zod.string().min(8);

await mongoose.connect(
  "DB_URL"
);
console.log("DB Connected!");

app.get("/", (req, res) => {
  res.send("Ok");
});

app.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
  let hashedPass = bcrypt.hashSync(password, 10);
  let inserted = new RegisterAuth({
    name,
    email,
    password: hashedPass,
  });
  await inserted.save();
  res.json({ redirect: "/todo" });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await RegisterAuth.findOne({ email });
  let hashedpass = await bcrypt.compareSync(password, user.password);
  if (hashedpass === true) {
    res.json({ redirect: "todo" });
  } else {
    res.json({ redirect: "http://localhost:5173/error" });
  }
});

app.listen(3000, () => {
  console.log("Server Started!");
});

import mongoose from "mongoose";

const { Schema } = mongoose;

const uesrSchema = new Schema({
  name: String,
  email: String,
});

const UserModule = mongoose.model("User", uesrSchema);

export { uesrSchema, UserModule };

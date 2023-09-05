import mongoose from "mongoose";

const { Schema } = mongoose;

const addressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  postalCode: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const AddressModule = mongoose.model("Address", addressSchema);

export { addressSchema, AddressModule };

import { AddressModule } from "../modules/address.module";

const addAddress = async (req, res) => {
  try {
    const { userId, street, city, state, postalCode } = req.body;

    const AddressDocument = new AddressModule({
      userId,
      street,
      city,
      state,
      postalCode,
    });

    const createdAddress = await AddressDocument.save();

    res.status(201).json({ createdAddress });
  } catch (e) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

export { addAddress };

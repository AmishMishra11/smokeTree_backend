import { UserModule } from "../modules/user.module";

const userSignup = async (req, res) => {
  try {
    const { name, email } = req.body;

    const existingUser = await UserModule.find({ email });

    if (existingUser.length) {
      res.status(422).json({ message: "Email already exists" });
    } else {
      const UserDocument = new UserModule({
        name,
        email,
      });

      const createdUser = await UserDocument.save();

      res.status(201).json({ createdUser });
    }
  } catch (e) {
    res.status(500).json({ message: "Internal server error!" });
  }
};

export { userSignup };

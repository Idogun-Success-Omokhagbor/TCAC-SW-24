// src/pages/api/user/auth/reset-password.js
import User from "../../../../models/User";
import connectDB from "../../../../utils/connectDB";
import bcryptjs from "bcryptjs";

export default async function handler(req, res) {
  await connectDB();
  if (req.method === "POST") {
    const { email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      user.password = await bcryptjs.hash(password, 10);
      await user.save();

      res.status(200).json({ message: "Password reset successful" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

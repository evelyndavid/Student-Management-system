require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.log("❌ MongoDB Connection Error:", err));

// Define User Schema & Model
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model("User", UserSchema);

// ✅ Sign-Up Route (Fix applied)
app.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists!" });
        }

        // Save user in DB
        const newUser = new User({ name, email, password });
        await newUser.save();

        res.status(201).json({ message: "✅ User signed up successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { name, password } = req.body;
  
    try {
      const user = await User.findOne({ name });
      if (!user) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      // Compare plain text password directly
      if (password !== user.password) {
        return res.status(400).json({ error: 'Invalid credentials' });
      }
  
      res.json({ message: 'Login successful!', success: true });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'CodeEditor.js'));
  });
  
// ✅ Get All Users (Optional for debugging)
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

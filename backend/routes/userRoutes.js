const express = require('express');
const userRouter = express.Router();
const User = require('../models/users'); // Import your User model

userRouter.post('/createUser', async (req, res) => {
  try {
    const { name, address } = req.body;
    const newUser = new User({ name, address });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
userRouter.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Route to get users by name
  userRouter.get('/users/:name', async (req, res) => {
    try {
      const users = await User.find({ name: req.params.name });
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = userRouter;

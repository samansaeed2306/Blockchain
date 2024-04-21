const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter=require('./routes/userRoutes')
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Use routes
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
//Ayesha Ahmed ///Saman Saeed //Eeman Qadeer// Hania Khan ///Warda Sajjad// Areeba Asif// Fatima Jamal//Umama Qasim//Khadijah Mehmood//Mehreen Ishtiaq// Muqadusa Ijaz
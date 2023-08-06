// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const path = require('path');


const app = express();
app.use(bodyParser.json());
app.use(cors());
/*
// Connect to MongoDB
const dbURL = 'mongodb+srv://hnani2002:harishnani@cluster0.i39z7mb.mongodb.net/'; // Change this with your MongoDB URL
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define MongoDB schema and models for Comment and User
const commentSchema = new mongoose.Schema({
  content: String,
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  nestedComments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Comment = mongoose.model('Comment', commentSchema);
const User = mongoose.model('User', userSchema);

// Implement your API routes here

*/

app.get('/', function(req, res) {
    // Use the path.join() function to create the complete file path
    const filePath = path.join(__dirname, 'index.html');
  
    // Send the HTML file as a response
    res.sendFile(filePath);
  });

// Start the server
const PORT = 3000; // Change this to your desired port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

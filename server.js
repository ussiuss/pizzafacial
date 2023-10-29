const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Endpoint to get a list of image file names
app.get('/api/images', (req, res) => {
  const directoryPath = path.join(__dirname, 'public/images/merch');

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred while reading the directory.');
    } else {
      // Create an array of objects with file names and descriptions
      const images = files.map(file => ({
        fileName: file,
        description: path.parse(file).name, // Use the file name without the extension as the description
      }));
      res.json(images);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
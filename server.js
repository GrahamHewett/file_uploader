const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:1234'}));
app.use(fileUpload());

// Upload Endpoint
app.post('/upload', (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }
  const file = req.files.file;
  file.mv(`${__dirname}/client/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    console.log('file successfully uploaded');
  });
});

app.listen(5000, () => console.log('Server Started...'));
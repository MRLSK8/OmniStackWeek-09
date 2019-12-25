const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./routes');
const path = require('path');

mongoose.connect(
  'mongodb+srv://omnistack9:omnistack9@cluster0-mge5c.mongodb.net/omnistack09db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

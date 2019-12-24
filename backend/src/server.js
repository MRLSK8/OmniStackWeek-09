const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3333;
const routes = require('./routes');

mongoose.connect(
  'mongodb+srv://omnistack9:omnistack9@cluster0-mge5c.mongodb.net/omnistack09db?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

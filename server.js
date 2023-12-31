
require("dotenv").config();
const express = require('express');


const app = express();
const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

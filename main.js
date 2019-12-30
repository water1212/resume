const express = require('express');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, () => console.log(`${Date.now()} Example app listening on port ${port}!`))
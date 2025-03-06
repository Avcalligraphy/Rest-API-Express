const express = require('express');

const app = express();

// app.use('/', (req, res, next) => {
//     res.send('Hello World');
// })

app.get("/", (req, res) => {
  res.send("Hello get user");
});
app.post("/", (req, res) => {
  res.send("Hello post user");
});

app.listen(4000, () => {
    console.log('Server Running on port 4000')
})
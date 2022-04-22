const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// use middleware 
app.use(cors());
app.use(express.json());

// get 
app.get('/', (req, res) => {
    res.send("success");
});

app.listen(port, () => {
    console.log("Listening to port", port)
});
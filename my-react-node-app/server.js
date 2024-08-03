const express = require('express');
const app = express();
const port = 3001; // this may change?

var corsOptions = {
    origin: '',
    optionsSuccessStatus: 200
};

//review what all of this means :sob: my memory has declined severely
app.get('/', (req, res) =>{
    //API LOGIC
    const data = {message : 'i forgot how this worked'};
    res.json(data.message);
});

app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
 });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//app.use(cors(corsOptions));
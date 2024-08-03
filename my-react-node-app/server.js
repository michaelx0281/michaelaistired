const express = require('express');
const app = express();
const port = 3001; // this may change?

var corsOptions = {
    origin: '',
    optionsSuccessStatus: 200
};

//review what all of this means :sob: my memory has declined severely
app.get('/api/data', (req, res) =>{
    //API LOGIC
    const data = {message: 'i forgot how this worked'};
    res.json(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(cors(corsOptions));
const express = require('express');
const axios = require('axios');
const app = express();
const port = 8080;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://backend:3000/data');
        res.send(`<h1>Frontend: Data from backend API</h1><p>${JSON.stringify(response.data)}</p>`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to the backend API');
    }
});

app.listen(port, () => {
    console.log(`Frontend running on http://localhost:${port}`);
});

const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'db',
    database: 'postgres',
    password: 'password',
    port: 5432,
});

app.get('/', (req, res) => {
    res.send('Hello from the backend API!');
});

app.get('/data', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error querying the database');
    }
});

app.listen(port, () => {
    console.log(`Backend API running on http://localhost:${port}`);
});

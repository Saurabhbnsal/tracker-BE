import express from 'express';
import { connect } from './connectors/mongo.connector'; // Ensure the file extension is included

const app = express();
const port = 5000;

connect(); // Connecting to the database

app.get('/', (req, res) => {
    res.send('GET request to homepage');
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html', {root: 'public'});
});

const PORT = process.env.PORT || 5000;

// START THE SERVER
app.listen(PORT, '0.0.0.0', () => {
    console.log(`SERVER STARTED ON PORT ${PORT}`);
});
import express from 'express';
import {} from 'dotenv/config'

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {res.sendFile('index.html')});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => Console.LOG(`SERVER STARTED ON PORT ${PORT}`))
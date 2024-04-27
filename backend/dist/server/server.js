"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const app = (0, express_1.default)();
const port = 3000;
const cors = require('cors');
app.use(express_1.default.json());
app.use(cors());
// const bunnies: any[] = [];
app.get('/', (req, res) => {
    res.send('Home page for bunny app!');
});
app.get('/bunnies', async (req, res) => {
    try {
        const bunnies = await database_1.default.getBunnyData();
        res.status(200).json(bunnies);
    }
    catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/breeds', async (req, res) => {
    try {
        const breeds = await database_1.default.getBreedData();
        res.status(200).json(breeds);
    }
    catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.get('/bunnyform', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.json({ message: 'BunData received successfully' });
});
app.post('/bunny', async (req, res) => {
    console.log({ body: req.body });
    const data = await database_1.default.createBunnyData(req.body);
    res.send(data);
});
app.put('/bunny/:id', async (req, res) => {
    try {
        const bunnyId = parseInt(req.params.id, 10);
        const updatedBunny = await database_1.default.updateBunnyData(req.body, bunnyId);
        console.log({});
        res.json({ message: 'Bunny updated!', updatedBunny });
    }
    catch (error) {
        console.error('Update failed:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.delete('/bunny/:id', async (req, res) => {
    const message = await database_1.default.deleteBunny(Number(req.params.id));
    res.send({ message });
});
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

const express = require('express');
const app = express();

require('dotenv/config');

const api = process.env.Api_Url;

//Middleware
app.use(express.json);

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: "Hair Dresser",
        image: 'some_URL'
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
})

app.listen(3000, () => {
    console.log(api);
    console.log('Server is running http://localhost:3000');
});
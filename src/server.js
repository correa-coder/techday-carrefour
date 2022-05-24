/*
* This server works as an interface to the Carrefour APIs
*/

const axios = require("axios");
const cors = require("cors");
const express = require("express");
const app = express();

const SERVER_PORT = 5000;

app.use(cors());

app.get("/sellers", async (request, response) => {
    const postalCode = request.query.postalCode;
    const sellersEndpoint = `https://mercado.carrefour.com.br/api/checkout/pub/regions?country=BRA&postalCode=${postalCode}`;

    try {
        const sellersResponse = await axios(sellersEndpoint);
        const data = await sellersResponse.data;
        return response.json(data);
    }
    catch (error) {
        console.error(error);
    }
});

app.get("/products", async (request, response) => {
    const sellerName = request.query.fq;
    const productsEndpoint = `https://mercado.carrefour.com.br/api/catalog_system/pub/products/search?fq=${sellerName}`;

    try {
        const productsResponse = await axios(productsEndpoint);
        const data = await productsResponse.data;
        return response.json(data);
    }
    catch (error) {
        console.error(error);
    }
});

console.log("Server started on port", SERVER_PORT);
app.listen(SERVER_PORT);
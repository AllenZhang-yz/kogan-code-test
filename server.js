const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(express.static(path.join('build')));

app.get('/api/get-products', async (req, res) => {
  let page = 1;
  let fetchNext = true;
  const productsData = [];
  do {
    const response = await axios.get(`${process.env.SERVER_FETCH_URL}/${page}`);
    page++;
    productsData.push(...response.data.objects);
    if (!response.data.next) {
      fetchNext = false;
    }
  } while (fetchNext);
  res.status(200).json(productsData);
});

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening to port ${port}......`);
});

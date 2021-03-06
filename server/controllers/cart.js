const HEROKU_URL = require('./heroku-url.js');
const { TOKEN } = require('./config.js');
const axios = require('axios');

module.exports = {
  addToCart: async function (req, res) {
    const body = req.body;
    try {
      await axios.post(`${HEROKU_URL}/cart`, body, {
        headers: {
          Authorization: `${TOKEN}`,
        },
      });
      res.status(201).json('CREATED');
    } catch (err) {
      console.error(err);
    }
  },
  getCart: async function (req, res) {
    try {
      const response = await axios.get(`${HEROKU_URL}/cart`, {
        headers: {
          Authorization: `${TOKEN}`,
        },
      });
      res.status(200).json(response.data);
    } catch (err) {
      console.error(err);
    }
  },
};

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/fetch', (req, res) => {
  const url = req.query.url || '';

  if (url) {
    console.log('Received url', url);
    // Fetch headers
    axios
      .get(url)
      .then(axiosRes => {
        console.log(axiosRes.headers);
        res.json({ headers: axiosRes.headers });
      })
      .catch(err => {
        console.log(err);
        res.json({ error: err });
      });
  } else {
    console.log('Did not receive any URL');
    res.json({ error: 'Provide `url` query param' });
  }
});

const server = app.listen(process.env.PORT || 3001, () => {
  console.log('Server started', server.address().port);
});

var express = require('express');
var router = express.Router();
const dotenv = require('dotenv').config();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Explore CloudCone API' });
});

/**
 * Get VM status
 */
router.get('/:id/status', function(req, res, next) {
  const https = require('https');
  const options = {
    hostname: 'api.cloudcone.com',
    port: 443,
    path: '/api/v1/compute/:' + req.params.id + '/status',
    method: 'GET',
    headers: {'App-Secret': process.env.API_KEY, 'Hash': process.env.API_HASH}
  };

  const request = https.request(options, (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (d) => {
      //process.stdout.write(d);
      console.log(d.toString());
      res.status(response.statusCode).send(d.toString());
    });
  });

  request.on('error', (e) => {
    console.error(e);
  });
  request.end();

});


/**
 * Get VM info
 */
router.get('/:id/info', function(req, res, next) {
    const https = require('https');
    const options = {
      hostname: 'api.cloudcone.com',
      port: 443,
      path: '/api/v1/compute/' + req.params.id + '/info',
      method: 'GET',
      headers: {'App-Secret': process.env.API_KEY, 'Hash': process.env.API_HASH}
    };

    const request = https.request(options, (response) => {
      console.log('statusCode:', response.statusCode);
      console.log('headers:', response.headers);

      response.on('data', (d) => {
        //process.stdout.write(d);
        console.log(d.toString());
        res.status(response.statusCode).send(d.toString());
      });
    });

    request.on('error', (e) => {
      console.error(e);
    });
    request.end();

});

/**
 * Get VM graphs
 */
router.get('/:id/graphs', function(req, res, next) {
  const https = require('https');
  const options = {
    hostname: 'api.cloudcone.com',
    port: 443,
    path: '/api/v1/compute/' + req.params.id + '/graphs',
    method: 'GET',
    headers: {'App-Secret': process.env.API_KEY, 'Hash': process.env.API_HASH}
  };

  const request = https.request(options, (response) => {
    console.log('statusCode:', response.statusCode);
    console.log('headers:', response.headers);

    response.on('data', (d) => {
      //process.stdout.write(d);
      console.log(d.toString());
      res.status(response.statusCode).send(d.toString());
    });
  });

  request.on('error', (e) => {
    console.error(e);
  });
  request.end();

});

module.exports = router;

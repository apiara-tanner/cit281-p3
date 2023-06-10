const fs = require('fs');
//import fastify from "fastify";
const { coinCount } = require('./p3-module');

// Require the Fastify framework and instantiate it
const fastify = require("fastify")({
logger: false,
});
// Handle GET verb for / route using Fastify
// Note use of "chain" dot notation syntax
const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;


fastify.get('/', (req, res) => {
  fs.readFile("./index.html", (err, content) => {
      res.code(200).type('text/html').send(content);
    })
  });

fastify.get('/coin', (req, res) => {
  const { denom = 0, count = 0 } = req.query;
  const denomInt = parseInt(denom);
  const countInt = parseInt(count);
  const result = coinCount({ denom: denomInt, count: countInt});
  res.code(200).type('text/plain').send(`<h2>Value of ${count} of ${denom} is ${result}</h2><br /><a href="/">Home</a>`);
});

fastify.get('/coins', (req, res) => {
  const { option } = req.query;
  let coinValue;
switch (option) {
  case '1':
    coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
    break;
  case '2':
    coinValue = coinCount(...coins);
    break;
  default:
    coinValue = 0;
}
  res.code(200).type('text/plain').send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
});


const listenIP = 'localhost';
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    // fastify.log.error(err);
    console.log(err);
    process.exit(1);
  }
// fastify.log.info(`Server listening on ${address}`);
  console.log(`Server listening on ${address}`);
})

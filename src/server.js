const express = require("express");
const bodyParser = require("body-parser");
const echo = require('./handlers/echo');

const server = express();
const BOT_TOKEN = process.env.BOT_TOKEN;

server.use(bodyParser.json());

server.post(`/webhook/${BOT_TOKEN}`, (req, res) => {
  const { message } = req.body;
  echo(bot, message);
  res.sendStatus(200);
});

module.exports = server;

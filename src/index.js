require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const server = require("./server");

const BOT_TOKEN = process.env.BOT_TOKEN;
const webhookUrl = `https://your-server.com/webhook/${BOT_TOKEN}`;

const bot = new TelegramBot(BOT_TOKEN);

bot.setWebHook(webhookUrl);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

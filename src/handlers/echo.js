function echo(bot, message) {
  const id = message.chat.id;
  const text = message.text;
  bot.sendMessage(id, text);
}

module.exports = echo;

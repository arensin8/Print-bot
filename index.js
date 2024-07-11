const { Telegraf } = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
 Help list : 
 /start - starting teh bot
 /help - Find your answers
 /print - prints sth
 /print with parameter - prints your text
`;

bot.start((ctx) => {
  ctx.reply("Welcome to print-bot");
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.reply(helpMessage);
});

bot.command("print", (ctx) => {
  const msg = ctx.message.text;
  const msgList = msg.split(" ");
  let message = "";
  if (msgList.length == 1) {
    message = "You said print!";
  } else {
    message = msgList.slice(1).join(" ");
  }
  ctx.reply(message);
});

bot.launch();

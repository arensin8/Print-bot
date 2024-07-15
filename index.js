const { Telegraf } = require("telegraf");
require("dotenv").config();
const path = require("path");
const { createReadStream } = require("fs");
const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
 Help list : 
 /start - starting teh bot
 /help - Find your answers
 /print - prints sth
 /print with parameter - prints your text
 /cities - Shows the list of the greatest cities of the world
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

bot.command("cities", (ctx) => {
  const citiesList = `
 /Yerevan - Armenia
 /Paris - France
 /madrid - Spain
`;
  ctx.reply(citiesList);
});

bot.command(["yerevan", "Yerevan"], (ctx) => {
  ctx.sendPhoto({
    source: createReadStream(path.join(__dirname, "photos", "yerevan.jpg")),
  });
});

bot.command(["Paris", "paris"], (ctx) => {
  ctx.sendPhoto({
    source: createReadStream(path.join(__dirname, "photos", "paris.jpg")),
  });
});

bot.command(["Madrid", "madrid"], (ctx) => {
  ctx.sendPhoto({
    source: createReadStream(path.join(__dirname, "photos", "madrid.jpg")),
  });
});

bot.launch();

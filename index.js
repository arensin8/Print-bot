const { Telegraf } = require("telegraf");
require("dotenv").config();
const path = require("path");
const { createReadStream } = require("fs");
const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMessage = `
 Help list : 
 /start - starting the bot
 /help - Find your answers
 /print - prints sth
 /print with parameter - prints your text
 /cities - Shows the list of the greatest cities of the world
`;

bot.start((ctx) => {
  ctx.sendChatAction("typing");
  ctx.reply("Welcome to print-bot");
  ctx.reply(helpMessage);
});

bot.help((ctx) => {
  ctx.sendChatAction("typing");
  ctx.reply(helpMessage);
});

bot.command("print", (ctx) => {
  ctx.sendChatAction("typing");
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
  ctx.sendChatAction("typing");
  const citiesList = `
 /Yerevan - Armenia
 /Paris - France
 /Madrid - Spain
`;
  ctx.reply(citiesList);
});

bot.command(["yerevan", "Yerevan"], (ctx) => {
  ctx.sendChatAction("upload_photo"); // Ensure this action is correctly set
  ctx.sendPhoto(
    {
      source: createReadStream(path.join(__dirname, "photos", "yerevan.jpg")),
    },
    {
      reply_to_message_id: ctx.message.message_id,
    }
  );
});

bot.command(["Paris", "paris"], (ctx) => {
  ctx.sendChatAction("upload_photo"); // Ensure this action is correctly set
  ctx.sendPhoto(
    {
      source: createReadStream(path.join(__dirname, "photos", "paris.jpg")),
    },
    {
      reply_to_message_id: ctx.message.message_id,
    }
  );
});

bot.command(["Madrid", "madrid"], (ctx) => {
  ctx.sendChatAction("upload_photo"); // Ensure this action is correctly set
  ctx.sendPhoto(
    {
      source: createReadStream(path.join(__dirname, "photos", "madrid.jpg")),
    },
    {
      reply_to_message_id: ctx.message.message_id,
    }
  );
});

bot.launch();

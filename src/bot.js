//
// Main Libraries
//

require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client();
const auth = require("./core/auth");

//
// Event Listener
//

const events = require("./events");

events.listen(client);

//
// Initialize Bot
//

client.login(auth.token);


//
// Initialize Web Server
//
const express = require("express");
const app = express();

app.get("/", function (req, res)
{
   const inviteUrl = [
      "https://discordapp.com/api/oauth2/authorize?",
      `client_id=${process.env.DISCORD_CLIENT_ID}`,
      "&scope=bot&permissions=1"
   ].join("");

   const response = [
      "Louie is listening. ",
      "To invite him to your server, ",
      `<a href="${inviteUrl}">`,
      "click here",
      "</a>",
      "."
   ].join("");

   res.send(response);
});

app.listen(8080);

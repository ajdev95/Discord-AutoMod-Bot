const Discord = require("discord.js");
const { Collection } = require("discord.js");

const client = new Discord.Client({ 
    intents: 3276799
});


const { loadEvents } = require("./handlers/eventhandler");
client.config = require("./config.json");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login("yourbottoken");
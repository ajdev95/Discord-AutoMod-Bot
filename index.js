const Discord = require("discord.js");
const { Collection } = require("discord.js");

const client = new Discord.Client({ 
    intents: 3276799
});


const { loadEvents } = require("./handlers/eventhandler");
client.events = new Collection();
client.commands = new Collection();

loadEvents(client);

client.login("MTA3ODk5MTk0OTE5NDg2Njc3OQ.G0j1aF.hy49t8-F_F0itzGZd3SnnzDyR5ZHTOTPuNZ6_w");

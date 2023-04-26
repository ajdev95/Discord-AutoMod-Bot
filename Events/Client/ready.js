const { loadCommands } = require("../../handlers/cmdhandler");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    
    loadCommands(client);
    console.log(`${client.user.username} is ready`);
  },
};

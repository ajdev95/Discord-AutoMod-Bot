const Discord = require("discord.js")
const { SlashCommandBuilder } = require ('@discordjs/builders')

module.exports = {
data : new  SlashCommandBuilder ()
        .setName('ping')
        .setDescription('pong'),

        async execute(interaction, client) {
        interaction.reply({ content: `pong`, ephemeral: true })
    }
}
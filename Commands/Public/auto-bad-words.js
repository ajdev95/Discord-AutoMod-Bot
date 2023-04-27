const Discord = require("discord.js")
const { PermissionsBitField } = require('discord.js');
const { SlashCommandBuilder, EmbedBuilder } = require ('@discordjs/builders');

module.exports = {
        data: new SlashCommandBuilder()
        .setName('automod-bad-words')
        .setDescription('Creates an automated rule for bad words')
        .addStringOption(option => option.setName('word').setDescription('Add the word to be removed from the automod').setRequired(true)),

        async execute (interaction, client) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: "Seems like you don't have `manage_messages` intents or a role named `Deletes`", ephemeral: true }) }

        const {options , guild} = interaction;
        const word = options.getString('word');
        const rule = await guild.autoModerationRules.create(
            {
                name: `Prevent bad word by ${client.user.username}`,
                creatorId: `487229623810129922`,
                enabled: true,
                eventType: 1,
                triggerType: 1,
                triggerMetadata:
                {
                    keywordFilter : [`${word}`]
                },
                actions: [
                    {
                        type: 1,
                        metadata: {
                            channel: interaction.channel,
                            durationSeconds: 10,
                            customMessage: `This message was prevented by ${client.user.username} auto moderation`
                        }
                    }
                ]

        }).catch(async err => {
            console.log(err)
        })
            const embed = new EmbedBuilder()
            .setAuthor({name: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL()})
            .setDescription(`**Your automod rule for \`Bad Words\` has been created successfully**`)
            .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
            .setColor(0x00FF00)
            .setFooter({text: `Made by: ${interaction.user.id}`, iconURL: interaction.user.avatarURL()})
            .setTimestamp();

            await interaction.deferReply({ fetchReply: true })

           return await interaction.editReply({ embeds: [embed] })
    }


}

const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "contador",
    description: "Ative o contador de ping no servidor.",
    type: "CHAT_INPUT",

    run: async (client, interaction, args) => {

        if (!interaction.member.permissions.has("MANAGE_GUILD")) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let canal = await interaction.guild.channels.create(`📈 Total usuários: ${interaction.guild.memberCount}`, {
                type: "GUILD_VOICE",
                parent: "990707141939707904",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: "CONNECT",
                    }
                ]
            });

            interaction.reply(`O sistema de contador de membros foi ativado em ${canal}.`)
            db.set(`use_${interaction.guild.id}`, canal.id)
        }

    }
}
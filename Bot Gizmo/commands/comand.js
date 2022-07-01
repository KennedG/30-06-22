const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
    name: "contador",
    description: "Ative o contador de servidores no servidor.",
    type: "CHAT_INPUT",

    run: async (client, interaction, args) => {
       
        if (!interaction.member.permissions.has("MANAGE_GUILD")) {
            interaction.reply({ content: `Você não possui permissão para utilizar este comando.`, ephemeral: true })
        } else {
            let canal = await interaction.guild.channels.create(`📝C. Usados: ${interaction.guild.memberCount}`, {
                type: "GUILD_VOICE",
                parent: "990707141939707904",
                permissionOverwrites: [
                    {
                        id: interaction.guild.id,
                        deny: "CONNECT",
                    }
                ]
            });

            interaction.reply(`O sistema de contador de comandos foi ativado em ${canal}.`)
            db.set(`comandos_${interaction.guild.id}`, canal.id)
        }

    }
}

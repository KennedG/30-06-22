const Discord = require("discord.js");
const { MessageSelectMenu, MessageActionRow } = require("discord.js");
const db = require("quick.db");
module.exports = {

    name: "ping",
    alises: [""],
    author: "",

    run: async(client, interaction, args) => {

        let comandos = await db.get(`comandos`)

        let criado_por_pereira1 = new Discord.MessageEmbed()
        .setColor("RED")
        .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
        .setDescription(`
> <a:verificado:908562051927007242> Já Executei \`${comandos} Comandos\`
`)
        .setFooter("Para atualizar o número, selecione no menu abaixo.");

        let painel = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Selecione abaixo para atualizar.')
        .addOptions([{
                    label: 'Atualize o número!',
                    description: 'Atualize o número atual do bot.',
                    emoji: '<a:verificado:908562051927007242>',
                    value: 'pingmenu',
                }
            ])

        );


        interaction.reply({ embeds: [criado_por_pereira1], components: [painel], ephemeral: true }).then(interaction => {

            const filtro = (interaction) => 
              interaction.isSelectMenu()
        
            const coletor = interaction.createMessageComponentCollector({
              filtro
            });
        
            coletor.on('collect', async (collected) => {

              let valor = collected.values[0]
              collected.deferUpdate()

        
        if (valor === 'pingmenu') {

            let criado_por_pereira2 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(client.user.username, client.user.displayAvatarURL({ dynamic: true }))
                    .setDescription(`
                    > <a:verificado:908562051927007242> Já Executei \`${comandos} Comandos\``)
            .setFooter("Última atualização!")
            .setTimestamp()

            interaction.edit({ embeds: [criado_por_pereira2], components: [painel], ephemeral: true });

        };
        
        })

    })

}
}
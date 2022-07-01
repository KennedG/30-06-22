const Discord = require('discord.js')

module.exports = {
    run: async(client, message, args)=>{
        if (!message.member.permissions.has("MANAGE_CHANNELS")) {
            message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor('RED')
                    .setDescription('**❌ Opa opa amigão, você não tem permissão para utilizar esse comando!')
                ], ephemeral: true
            })
        } else {

            let cargo = (`@everyone`)
            let user = message.author;
            let canal = message.channel;
            
            message.reply({
                embeds: [
                    new Discord.MessageEmbed()
                    .setColor('#DCDCDC')
                    .setDescription(`**✅ | O canal foi privado para o cargo \`${cargo}\` por \`${user}\` com sucesso!**`)
                ], ephemeral: true
            }).then(msg => { 
                message.channel.permissionOverwrites.edit(message.guild.id, { VIEW_CHANNEL: false }).catch(e => {
                console.log(e)
                msg.edit({
                    embeds: [
                        new Discord.MessageEmbed()
                        .setColor('RED')
                        .setDescription('**❌ Infelizmente ocorreu um erro ao tentar privar o canal**')
                    ], ephemeral: true
                })
            })
        })
    }
    }
}

const { MessageEmbed } = require('discord.js');

module.exports = {
name: 'memebers',
aliases: ["mem"],

run: async (client, message, args) => {
         
      let embed = new MessageEmbed()
        .setAuthor(`Servidor ${message.guild.name}`)
        .setThumbnail(`${message.guild.iconURL({dynamic : true})}`)
        .setDescription(`> <:novo_membro:910474113594830858> **Total de membros:** \`${message.guild.memberCount}\` membros \n> <a:1370everythingisstable:938556914911035402> **Membros online:** \`${message.guild.members.cache.filter((x) => x.presence?.status == 'online').size}\` membros \n>     <a:9366laydowntorest:938556915460476948> **Membros ocupados:** \`${message.guild.members.cache.filter((x) => x.presence?.status == 'dnd').size}\` membros \n>  <:ausente:992037186377633882> **Membros ausentes:** \`${message.guild.members.cache.filter((x) => x.presence?.status == 'idle').size}\` membros`)
        .setColor(`RANDOM`)
        .setFooter(`${message.guild.name}`, message.guild.iconURL({dynamic : true}))
      message.reply({embeds: [embed] });
}
}    
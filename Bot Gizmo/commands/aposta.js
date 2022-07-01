const Discord = require('discord.js');
const db = require("quick.db");

module.exports = {


run: async (client, message, args) => {

    let user = message.mentions.users.first() ||  message.author;
    let din = args[1]

let moneyMy = await db.fetch(`gizmo.${user.id}`) || 0

if(din < 1000) return message.reply({content: `**🗞️︰Tente apostar um valor acima de \`1,000\` moedas.**`, ephemeral: true});


if(moneyMy < din) return message.reply({content: `**🗞️︰Você não tem moedas o suficiente para efetuar esta aposta. Você precisa de mais \`${parseInt(din-moneyMy).toLocaleString()}\`**`, ephemeral: true});

let lucky = Math.floor(Math.random() * 10);

if(lucky < 4) {

db.add(`gizmo.${user.id}`,din);

return imessage.reply(`**🏆︰Você ganhou \`${din.toLocaleString()}\` moedas!**`);
} else {

db.subtract(`gizmo.${user.id}`, args[1])
//db.subtract(`gizmo.${user.id}`, din);

return message.reply(`**☹️︰Você perdeu \`${din.toLocaleString()}\` moedas!**`);
}

}};
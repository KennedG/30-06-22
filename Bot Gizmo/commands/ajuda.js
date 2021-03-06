const Discord = require("discord.js");
const config = require("../config.json")
const { MessageSelectMenu, MessageActionRow } = require("discord.js");
const db = require("quick.db")

module.exports = {

    name: "help",


    run: async(client, message, args) => {
        let comandos = await db.get(`comandos`)


        let embed = new Discord.MessageEmbed()
        .setColor(
          config.embed
      )
		.setTitle("<:V_CorretoTKF:910509220015788073> | Gizmo")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
	    .setDescription(`Olá ${message.author}, Eu sou o <@814726444377833532>, Um bot com múltiplas funções legais é divertidas! 


> __Links Importante:__
<:V_CorretoTKF:910509220015788073> | Me adicione [Clicando aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
<:az_moderador_old:909264644168900629> | Entre no meu servidor de [Suporte](https://discord.gg/Ex7jUrMZF2)
<a:sintonia_emoji239:909266143204741181> | Acesse meu [Website](https://sites.google.com/view/botgizmo)

<:void:829507703856562216> | Vote em mim usando **G!votar** ou [Clicando aqui](https://voidbots.net/bot/814726444377833532) 
não conte para ninguém, tem um segredo usando o **G!votar**.

> __Informações:__
<a:online:925875488944164894> **Online**
<a:hype:897139138661351434> Estou em ${client.guilds.cache.size} servidores.
<:branco_pessoaRDM:908562579117453342> Gerenciando de ${client.users.cache.size} usuários.
<:download:910474079931338813> No total de **159** Comandos.
<:5413blurplechat:938556141414273044> Já Executei **${comandos}** Comandos!
<:emoji_41:910474334986985502>  Criador: <@493282797222494230> - 493282797222494230


> __Minhas categorias abaixo:__
`)


    
        let pani_1 = new MessageActionRow().addComponents( new MessageSelectMenu()
        .setCustomId('menu')
        .setPlaceholder('Clique aqui para ter acesso!') 
        .addOptions([
		       {
			    label: 'Central de comandos',
                description: 'Volta para o menu inicial',
                emoji: '<:firewall:942415761857728532>',
                value: '0',
               },
               {
                label: 'Diversão',
                description: 'Comandos de Diversão',
                emoji: '<a:dana:897138061211758633>',
                value: '1',
               },
               {
                label: 'Economia',
                description: 'Comandos De Economia',
                emoji: '<:coinGizmo:940747974206713886>',
                value: '12',
               },
               {
                label: 'Perfil',
                description: 'Comandos De Perfil',
                emoji: '<:info:916909634403573801>',
                value: '9',
               },
               {
                label: 'Transação',
                description: 'Comandos De Transação',
                emoji: '🏦',
                value: '13',
               },
               {
                label: 'Música',
                description: 'Comando DESATIVADO!',
                emoji: '<a:9366laydowntorest:938556915460476948>',
                value: '2',
               },
               {
                label: 'Utilidade',
                description: 'Comandos De Utilidade',
                emoji: '<a:Desenvolvedor:861997097598844929>',
                value: '3',
               },
               {
                label: 'Moderação',
                description: 'Comandos De Moderação',
                emoji: '<a:coroa:898814229640019968>',
                value: '4',
               },
               {
                label: 'Vip',
                description: 'Sistema configurável vip',
                emoji: '<a:vip_idf:951252620146794526>',
                value: '11',
               },
               {
			    label: 'Premium',
                description: 'Comandos Premium',
                emoji: '<a:Red_DinheiroCDL:949097070969630790>',
                value: '10',
               },
               {
                label: 'Crie sua call',
                description: 'Sistema de Canais De Voz',
                emoji: '<a:az_call_old:944034717576081448>',
                value: '8',
                },
               {
                label: 'Logs',
                description: 'Comandos De Logs',
                emoji: '<:engrenagem:916913635169816597>',
                value: '5',
               },
	   	       {
                label: 'Suporte',
                description: 'Comandos De Suporte',
                emoji: '<a:developer:912914634846109706>',
                value: '6',
               },
			   {
			    label: 'Outros',
                description: 'Sites,Instagram...',
                emoji: '<:dcl_ypSino:914350019182723122>',
                value: '7',
               },
 ])

        );


        message.channel.send({ embeds: [embed], components: [pani_1] }).then(msg => {


            const pani_2 = (interaction) => 
            interaction.isSelectMenu()
      
          const coletor = msg.createMessageComponentCollector({
            pani_2, time: 0
          });
      

          coletor.on('collect', async (collected) => {

            let valor = collected.values[0]
            collected.deferUpdate()




            if (valor === "0") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("<:V_CorretoTKF:910509220015788073> | Central De Comandos Gizmo")
		.setColor("#A020F0")
		.setFooter("")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`Olá ${message.author}, Eu sou o <@814726444377833532>, Um bot com múltiplas funções legais é divertidas! 


        > __Links Importante:__
        <:V_CorretoTKF:910509220015788073> | Me adicione [Clicando aqui](https://discord.com/oauth2/authorize?client_id=814726444377833532&scope=bot&permissions=8)
        <:az_moderador_old:909264644168900629> | Entre no meu servidor de [Suporte](https://discord.gg/Ex7jUrMZF2)
        <a:sintonia_emoji239:909266143204741181> | Acesse meu [Website](https://sites.google.com/view/botgizmo)
        
        <:void:829507703856562216> | Vote em mim usando **G!votar** ou [Clicando aqui](https://voidbots.net/bot/814726444377833532) 
        não conte para ninguém, tem um segredo usando o **G!votar**.
        
        > __Informações:__
        <a:online:925875488944164894> **Online**
        <a:hype:897139138661351434> Estou em ${client.guilds.cache.size} servidores.
        <:branco_pessoaRDM:908562579117453342> Gerenciando de ${client.users.cache.size} usuários.
        <:download:910474079931338813> No total de **159** Comandos. 
        <:5413blurplechat:938556141414273044> Já Executei **${comandos}** Comandos!
        <:emoji_41:910474334986985502> | Criador: <@493282797222494230> - 493282797222494230
        
        > __Minhas categorias abaixo:__
`)
msg.edit({embeds: [embed_1]})



            }
                   if (valor === "1") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("😂 | Comandos De Diversão")
		.setColor("#A020F0")
        .setFooter("Gizmo")  
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
.addField('😂 Comandos Diversão:',
'`Akinator|Ship|Cafune|Beijar|Casar|Abraço|Atacar|Futebol|Jokempo|Dados|Brindar|Stonks|8ball|Coinflip|emojiinfo|Adestramento|Faustão|Cantadas|Traficaranao|Bolsonaro|Corno|Gay|Audio|Falar`', true) 

msg.edit({embeds: [embed_1]})



            }
                   if (valor === "2") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("<a:9366laydowntorest:938556915460476948> __COMANDO DESATIVADO__")
		.setColor("#A020F0")
        .setFooter("Gizmo") 
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('<a:9366laydowntorest:938556915460476948> __COMANDO DESATIVADO__',   
'`Para meu desenvolvedor animar, vote em mim! logo logo irei aprender esses comandos novamente! `', true) 

msg.edit({embeds: [embed_1]})
}

if (valor === "11") {


    let embed_1 = new Discord.MessageEmbed()
    .setColor(
      config.embed
    )
    .setTitle("<a:vip_idf:951252620146794526>| Comandos Vips:")
    .setColor("#A020F0")
    .setFooter("Gizmo")  
.setThumbnail(message.guild.iconURL({ dynamic: true }))
.addField('<a:vip_idf:951252620146794526> Comandos Vips:',
'`Vip | Setvip | Setcategoria`', true) 

msg.edit({embeds: [embed_1]})
}

if (valor === "10") {


    let embed_1 = new Discord.MessageEmbed()
    .setColor(
      config.embed
    )
    .setTitle("<a:Red_DinheiroCDL:949097070969630790> | Comandos Premium")
    .setColor("#A020F0")
    .setFooter("Gizmo") 
.setThumbnail(message.guild.iconURL({ dynamic: true }))
    .addField('<a:Red_DinheiroCDL:949097070969630790> Comandos Premium',   
'`Mineração | Implorar | Crime |`', true)
    .setDescription(`> <a:vip_idf:951252620146794526> Para adquirir **MEU SISTEMA VIP** entre no meu servidor! [Meu servidor](https://discord.gg/Vk8sEtb4n5)`)


msg.edit({embeds: [embed_1]})



}




                   if (valor === "9") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("💰 | Comandos De editar perfil")
		.setColor("#A020F0")
        .setFooter("Gizmo") 
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
.addField('💰 | Comandos De editar perfil:', 
'`Perfil|Nome|Idade|Sobremim|Background|Emblemas|Cooldowns`', true) 



msg.edit({embeds: [embed_1]})



            }



            if (valor === "12") {


                let embed_1 = new Discord.MessageEmbed()
                .setColor(
                  config.embed
                )
                .setTitle("💰 | Comandos De Economia")
                .setColor("#A020F0")
                .setFooter("Gizmo") 
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('💰 Comandos Economia:', 
        '`Daily|Work|Caverna|Lotofacil|Crime|Mineração|Implorar|	Roubar`', true) 
        
        
        
        msg.edit({embeds: [embed_1]})
        
        
        
                    }


                    if (valor === "13") {


                        let embed_1 = new Discord.MessageEmbed()
                        .setColor(
                          config.embed
                        )
                        .setTitle("💰 | Comandos de Transação")
                        .setColor("#A020F0")
                        .setFooter("Gizmo") 
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                .addField('💰 Comandos de Transação:', 
                '`Atm|Saldo|Depositar|Sacar|Pay`', true) 
                
                
                
                msg.edit({embeds: [embed_1]})
                
                
                
                            }


       if (valor === "3") {



        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("📣 | Comandos De Utilidade")
		.setColor("#A020F0")
        .setFooter("Gizmo") 
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
         .addField('📣 Comandos Utilidade:',   
   '`Avatar|Playstore|Clear|Lembrete|Ms|Say|Userinfo|Serverinfo|Infobot|Status|Uptime|Bigtext|Gerarsenha|Cpu|Emoji|Banner|Anuncio|Calculadora|Traduzir|Addemoji|Google|Filme|Comandos|Membros|`', true)
msg.edit({embeds: [embed_1]})



            }
       if (valor === "4") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("⚒️ | Comandos De Moderação")
		.setColor("#A020F0")
        .setFooter("Gizmo") 
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
	.addField('⚒️ Comandos Moderação:',  
            '`Warn | Warns/warnings | removerwarn | |Ban | Unban | Unbanall | Voicekick | Antilink | Lock | Unlock | Setnick | Addcargo | Removecargo | Lockall | Unlockall | Roleinfo | Contador | Autorole | Privar | Desprivar | `', true) 




msg.edit({embeds: [embed_1]})



	   }
       if (valor === "5") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("⚙️ | Comandos De Logs")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setFooter("Gizmo") 
 .addField('⚙️ Comandos Logs:',  
           '`Editmsg | Delmsg | Setentrada | Setsaida`', true) 




msg.edit({embeds: [embed_1]})



            }
           if (valor === "6") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("☎️ | Comandos De Suporte")
        .setColor("A020F0")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
		.setFooter("Gizmo") 
        .addField('☎️ Comandos Suporte:', 
   '`Suporte | Sugestão | Site | Bug | Meustatus | Convitedm| Votar| Addbot`', true) 

msg.edit({embeds: [embed_1]})



            }
          if (valor === "7") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("✨ | Outros")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter("Gizmo") 
        .setDescription(`

🌐  __Redes socias__

     
        > 🌟  Instagram Do Bot [Gizmo](https://instagram.com/botgizmo?utm_medium=copy_link)
        > 👑  Instagram Do Criador [Kenned](https://www.instagram.com/guilhermekenned_/)
        > <:void:829507703856562216> Vote no <@814726444377833532> [VoidBot](https://voidbots.net/bot/814726444377833532)


 
<:dcl_ypSino:914350019182723122> __g!novidades__
<:dcl_ypSino:914350019182723122>__**Novidades do Gizmo**__
         
⠀
`)

msg.edit({embeds: [embed_1]})



            }
                   if (valor === "8") {


        let embed_1 = new Discord.MessageEmbed()
        .setColor(
          config.embed
        )
		.setTitle("🚩 | Comandos de criar call")
		.setColor("#A020F0")
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setFooter("Gizmo") 
        .setDescription(`
        🚩  __Comandos de criar call__
        
        Como utilizar os canais privados temporários?
    
        Para utilizar o sistema de canais privados temporários é bem simples, basta você criar um canal de voz chamado **Clique aqui ✅**(COM O EMOJI "✅") e automaticamente o bot irá criar um canal privado com o seu nome!

        Depois de feito apenas entrar na call ele ira criar o canal quando você entrar!

`)

msg.edit({embeds: [embed_1]})



            }


          })

          
            coletor.on('end', () => {    let embeds = new Discord.MessageEmbed()
            .setDescription("Esse painel expirou faça o comando novamente!")
             msg.edit({ 
          
              embeds: [embeds], components: [] }); });    

        });

        

    }
}

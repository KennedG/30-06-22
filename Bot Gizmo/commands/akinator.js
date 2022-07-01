const discord = require("discord.js")
const akinator = require("discord.js-akinator")



module.exports = {
    name: "akinator",
    aliases: ["akinatorr"],
    run: async (client, message, args) => {

        const PREFIX = "G!";


        const language = "pt";
        const childMode = false;
        const gameType = "character";
        const useButtons = true;
        const embedColor = "#ef3921";
        
    
            if(message.content.startsWith(`${PREFIX}akinator`)) {
                akinator(message, {
                    language: language,
                    childMode: childMode,
                    gameType: gameType,
                    useButtons: useButtons, 
                    embedColor: embedColor
                });
            }

    }}        
const Discord = require("discord.js");
const config = require("../config.json");
const { Client, RichEmbed, Attachment} = require('discord.js');



exports.run = async (client, message, args) => {
    message.delete();
    let messagea = "*Réponse sous 24 heures*"
    message.channel.send(messagea)
     var date = new Date();
     var mois = ('0'+(+date.getMonth()+1)).slice(-2);
     date = ('0'+date.getDate()).slice(-2)+"/"+mois+"/"+ date.getFullYear()
      let embed = new Discord.RichEmbed()
        .setColor(config.color_embed)
        .addField("**𝗥𝗘𝗖𝗛𝗘𝗥𝗖𝗛𝗘 𝗣𝗔𝗥𝗧𝗘𝗡𝗔𝗥𝗜𝗔𝗧**", `
Postez la présentation de votre serveur située dans #•『🌍』globale et les fondateurs se chargeront de vous envoyez des serveurs respectant vos critères, avec lesquels vous pourrez ensuite faire des partenariats si vous le souhaitez.

        `, true)
 
        message.channel.send(embed);
}

exports.help = {
    name: '|//',
};

const Discord = require("discord.js");
const config = require("../config.json");
const { Client, RichEmbed, Attachment} = require('discord.js');



exports.run = async (client, message, args) => {
    message.delete();
     var date = new Date();
     var mois = ('0'+(+date.getMonth()+1)).slice(-2);
     date = ('0'+date.getDate()).slice(-2)+"/"+mois+"/"+ date.getFullYear()
      let embed = new Discord.RichEmbed()
        .setAuthor(`𝐇𝐄𝐋𝐏`)
        .setColor(config.color_embed)
        .addField("**𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐄𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒**", `**\`\`/lightshot\`\`** *génère 10 images aléatoires* \n**\`\`/top\`\`** *affiche le top des personnes ayant le plus parlé du jour*`, true)
        //.addField("**𝐒𝐎𝐋𝐎**", `**Victoires:** ${winsSolo}\n**Tués:** ${kills}\n**Parties jouées:** ${mPlayed}\n**Pourcentage de victoires:** ${winper}\n**Ratio:** ${kd}`, true)
       // .addField("**𝐃𝐔𝐎**", `**Victoires:** ${winsDuo}\n**Tués:** ${kills}\n**Parties jouées:** ${mPlayed}\n**Pourcentage de victoires:** ${winper}\n**Ratio:** ${kd}`, true)
        //.addField("**𝐒𝐐𝐔𝐀𝐃**", `**Victoires:** ${winsSquad}\n**Tués:** ${kills}\n**Parties jouées:** ${mPlayed}\n**Pourcentage de victoires:** ${winper}\n**Ratio:** ${kd}`, true)
        //.addField("Kills", kills, true)
        //.addField("Score", score, true)
        //.addField("Parties jouées", mPlayed, true)
        //.addField("Pourcentage de victoires", winper, true)
        //.addField("Ratio", kd, true);
        .setFooter(`Send by ${message.author.tag}`)
        message.channel.send(embed);
}

exports.help = {
    name: '/help',
};

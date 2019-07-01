const Discord = require("discord.js");
const config = require("../config.json");
const { Client, RichEmbed, Attachment} = require('discord.js');



exports.run = async (client, message, args) => {
    message.delete();
    let messagea = "**Veuillez envoyer votre demande pour être dans la liste des partenariats en respectant le formulaire ci-dessous.** \n*Réponse sous 24 heures*"
    message.channel.send(messagea)
     var date = new Date();
     var mois = ('0'+(+date.getMonth()+1)).slice(-2);
     date = ('0'+date.getDate()).slice(-2)+"/"+mois+"/"+ date.getFullYear()
      let embed = new Discord.RichEmbed()
        .setAuthor(`𝐅𝐎𝐑𝐌𝐔𝐋𝐀𝐈𝐑𝐄 𝐏𝐎𝐔𝐑 𝐔𝐍𝐄 𝐃𝐄𝐌𝐀𝐍𝐃𝐄 𝐃𝐄 𝐏𝐀𝐑𝐓𝐄𝐍𝐀𝐑𝐈𝐀𝐓`)
        .setColor(config.color_embed)
        .addField("**𝐕𝐎𝐓𝐑𝐄 𝐒𝐄𝐑𝐕𝐄𝐔𝐑**", `
__**1.**__ Nom du serveur (*obligatoire*)
__**2.**__ Description du serveur (*obligatoire*)
__**3.**__ Nombre de membres (*obligatoire*)
__**4.**__ Lien d'invitation permanent (*obligatoire*)
__**5.**__ Informations supplémentaires (*facultatif*)
        `, true)
        .addField("**𝐒𝐄𝐑𝐕𝐄𝐔𝐑 𝐑𝐄𝐂𝐇𝐄𝐑𝐂𝐇É**", `
        __**1.**__ Type de serveur recherché (*facultatif*)
        __**2.**__ Nombre minimum de membres (*facultatif*)
        __**3.**__ Informations supplémentaires (*facultatif*)        
                `, true)
        //.addField("**𝐒𝐎𝐋𝐎**", `**Victoires:** ${winsSolo}\n**Tués:** ${kills}\n**Parties jouées:** ${mPlayed}\n**Pourcentage de victoires:** ${winper}\n**Ratio:** ${kd}`, true)
       // .addField("**𝐃𝐔𝐎**", `**Victoires:** ${winsDuo}\n**Tués:** ${kills}\n**Parties jouées:** ${mPlayed}\n**Pourcentage de victoires:** ${winper}\n**Ratio:** ${kd}`, true)
        //.addField("**𝐒𝐐𝐔𝐀𝐃**", `**Victoires:** ${winsSquad}\n**Tués:** ${kills}\n**Parties jouées:** ${mPlayed}\n**Pourcentage de victoires:** ${winper}\n**Ratio:** ${kd}`, true)
        //.addField("Kills", kills, true)
        //.addField("Score", score, true)
        //.addField("Parties jouées", mPlayed, true)
        //.addField("Pourcentage de victoires", winper, true)
        //.addField("Ratio", kd, true);
        message.channel.send(embed);
}

exports.help = {
    name: '|**',
};
const { Client, RichEmbed, Attachment} = require('discord.js');



exports.run = async (client, message, args) => {

        var onlineMembers = message.member.guild.members;
        var stats =Array.from(onlineMembers)
       
            for(var i = stats.length-2;i<=0;i = i-2){
                     setTimeout(function() {
                stats =Array.from(onlineMembers)
                stats =  stats[i]
                message.channel.send(stats[2])
           
        }, 500);
       }
      

      
      console.log(`${message.author.id} | La personne tirée au sort est: ${stats[1]}`)
       
}

exports.help = {
    name: 'help',

};

const { Client, RichEmbed, Attachment} = require('discord.js');



exports.run = async (client, message, args) => {

        var onlineMembers = message.member.guild.members;
        var stats =Array.from(onlineMembers)
       console.log(`stats${stats.lenght}`)
            for(var i = stats.length-2;i<=0;i = i-2){
                     setTimeout(function() {
                stats =Array.from(onlineMembers)
                stats =  stats[i]
                                console.log(`1${stats}`)
                             console.log(`2${stats[1]}`)
                                  console.log(`3${stats[2]}`)
                message.channel.send(stats[2])
           console.log(`${message.author.id} | La personne tirée au sort est: ${stats[2]}`)
        }, 500);
       }
      

      
      
       
}

exports.help = {
    name: 'help',

};

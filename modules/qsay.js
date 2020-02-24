const { Client, RichEmbed, Attachment} = require('discord.js');







exports.run = async (client, message, args) => {
 let botmessage = "󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪"
 message.delete();
 setInterval(() => {
	message.channel.send(botmessage);	
         message.channel.bulkDelete(1);
 },61000 );
}

exports.help = {

    name: 'a',



};

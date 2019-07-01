const { Client, RichEmbed, Attachment} = require('discord.js');



exports.run = async (client, message, args) => {
    message.channel.send(`${message.author} <:ouiii:570649732414832641>`)
}

exports.help = {
    name: 'ping',

};
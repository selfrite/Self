const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
client.commands_fr = new Discord.Collection();




    // Modules Français
    fs.readdir("./modules/", (err, files) => {
      console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Modules-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
      if(err) console.log(err);
      let jsfile = files.filter(f => f.split(".").pop() === "js");
      if(jsfile.length <= 0){
        console.log(`Erreur de chargement d'un module`);
        return;
      }

      jsfile.forEach((f, i) =>{
        let props = require(`./modules/${f}`);
        console.log(`${f} a chargé`);
        client.commands_fr.set(props.help.name, props);
      });
    });






    client.on('guildMemberAdd', member => {
      const channel = member.guild.channels.find(ch => ch.id === '577889134031405059');
      if (!channel) return;
      channel.send(`${member}`).then(() => {
        channel.bulkDelete(1)})
    });


 client.on('ready', async () => {
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-BOT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
  console.log(`${client.user.username} a été  !`);

  
  client.user.setStatus('idle')
  client.user.setPresence({
    game: {
      name: `regarde 𝐂𝐄𝐍𝐓𝐑𝐄 𝐃𝐄 𝐏𝐀𝐑𝐓𝐄𝐍𝐀𝐑𝐈𝐀𝐓𝐒`,
      type: "STREAMING",
      url: "https://www.twitch.tv/solaryfortnite"
        }
    })

  
      //const channelLock = client.channels.find(channel => channel.id === "530001215388516363");
 })





client.on("message", async message => {
  //if(message.author.bot) return;
  if(message.channel.type === "dm");
  if(message.channel === "584389679520940043"){
      
    message.member.removeRole("584395246981480587")
  }

  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(0);



  

    let commandFile = client.commands_fr.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, message, args);
    if (message.author.id == 'undefined') return;
  

 




      
      
      
    })




client.login(process.env.token)

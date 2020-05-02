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




/*

    client.on('guildMemberAdd', member => {
      const channel = member.guild.channels.find(ch => ch.id === '577889134031405059');
      if (!channel) return;
      channel.send(`${member}`).then(() => {
        channel.bulkDelete(1)})
    });

*/
 client.on('ready', async () => {
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-BOT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
  console.log(`${client.user.username} !`);
  /*const botmessage = "󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪"
  	 const salon = client.channels.get("410070418939183105");
	salon.send(botmessage);	
         salon.bulkDelete(1);
 setInterval(() => {
	console.log("Message sent !")
	 const salon = client.channels.get("410070418939183105");
	salon.send(botmessage);	
         salon.bulkDelete(1);
 },63000 );*/
/*
const poke = client.channels.get("423164462942519297");
poke.send("?daily");	
poke.send("?hourly");
poke.send("?peche mega");	
poke.send("?catch");	
setInterval(() => {
	salon.send("?catch");	
         salon.bulkDelete(1);
 },903000);
setInterval(() => {
	poke.send("?hourly");	
         poke.bulkDelete(1);
 },3605000); 
setInterval(() => {
	poke.send("?daily");	
         poke.bulkDelete(1);
 },86405000); */
  //client.user.setStatus('online')
 })

    client.on('guildMemberAdd', member => {

const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0xff0000')
	.setTitle( 'Clique ici pour rejoindre le serveur', 'https://discord.gg/UEkCs46')
	.setURL('https://discord.gg/UEkCs46')
	.setAuthor('🥶 close the door', 'https://cdn.discordapp.com/icons/703339395604021289/0176586fd81d97559967d65f3a9bb2fe.png?size=2048', 'https://discord.gg/sCpCBTj')
  .setThumbnail('https://cdn.discordapp.com/icons/674294359595810846/a9920eb9b4b269a5383fff4ed48f21ea.png?size=2048')
  .addField(`1.`, `💚 Des activités régulières avec les clans`, false)
  .addField(`2.`, `💙 Une concurrence amicale`, false)
  .addField(`3.`, `💜 Nouez de nouvelles amitiés `,  false)
  .addField(`4.`, `🧡 Ayez la chance de peut-être gagner le fameux concours de tous les deux mois`,  false)
  .addField(`5.`, `💛 De la bonne rigolade dès que l'occasion se présente !`,  false)
  .setImage('https://cdn.discordapp.com/attachments/703621702990430329/706209815361225134/tenor.gif')
  .setFooter('A bientôt sur notre serveur, et désolé du dérangement ^^', 'https://cdn.discordapp.com/icons/703339395604021289/0176586fd81d97559967d65f3a9bb2fe.png?size=2048');
  
member.send(exampleEmbed);
member.send(`Saluut ${member}, excuse moi de te déranger mais tout d'abord si tu as un serveur, je peux le rejoindre en échange :) | https://discord.gg/ebfbXpS`)

    });



client.on("message", async message => {

   
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(0);


  

    let commandFile = client.commands_fr.get(cmd.slice(prefix.length));
    if (commandFile) commandFile.run(client, message, args)
    if (message.author.id == 'undefined') return;
  

 




      
      
      
    })




client.login(process.env.token)
/*
const client1 = new Discord.Client({disableEveryone: true});
 client1.on('ready', async () => {
  console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-BOT-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n")
  console.log(`${client1.user.username} !`);
  const botmessage = "󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪 󠂪󠂪"
  	 const salon = client1.channels.get("410070418939183105");
	salon.send(botmessage);	
         salon.bulkDelete(1);
 setInterval(() => {
	console.log("Message sent !")
	 const salon = client1.channels.get("410070418939183105");
	salon.send(botmessage);	
         salon.bulkDelete(1);
 },63000 );
 })
client1.login(process.env.token1)*/

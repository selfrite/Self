const Discord = require("discord.js");
const config = require("../config.json");


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
module.exports.run = async (client, message, args) => {
    let messagea = message.channel;
    message.delete();
    function light(){
    let image = "https://prnt.sc/";
    var aa = getRandomInt(3);
    var bb = getRandomInt(3);
    var cc = getRandomInt(3);
    var dd = getRandomInt(3);
    var ee = getRandomInt(3);
    var ff = getRandomInt(3);



    var aa = getRandomInt(3);
    if(aa == 1){
        aa = getRandomInt(9)
    } else if (aa == 3){
        aa = getRandomInt(26) + 65    
        aa = String.fromCharCode(aa)
    } else {
        aa = getRandomInt(26) + 97  
        aa = String.fromCharCode(aa)  
    }

    if(bb == 1){
        bb = getRandomInt(9)
    } else if (bb == 3){
        bb = getRandomInt(26) + 65    
        bb = String.fromCharCode(bb)
    } else {
        bb = getRandomInt(26) + 97  
        bb = String.fromCharCode(bb)  
    }   
    
    if(cc == 1){
        cc = getRandomInt(9)
    } else if (aa == 3){
        cc = getRandomInt(26) + 65    
        cc = String.fromCharCode(cc)
    } else {
        cc = getRandomInt(26) + 97  
        cc =String.fromCharCode(cc)  
    }    
    
    if(dd == 1){
        dd = getRandomInt(9)
    } else if (dd == 3){
        dd = getRandomInt(26) + 65    
        dd = String.fromCharCode(dd)
    } else {
        dd = getRandomInt(26) + 97  
        dd =String.fromCharCode(dd)  
    }   
    
    if(ee == 1){
        ee = getRandomInt(9)
    } else if (ee == 3){
        ee = getRandomInt(26) + 65    
        ee = String.fromCharCode(ee)
    } else {
        ee = getRandomInt(26) + 97  
        ee =String.fromCharCode(ee)  
    }   
    
    if(ff == 1){
        ff = getRandomInt(9)
    } else if (aa == 3){
        ff = getRandomInt(26) + 65    
        ff = String.fromCharCode(ff)
    } else {
        ff = getRandomInt(26) + 97  
        ff =String.fromCharCode(ff)  
    }

        image = image+aa+bb+cc+dd+ee+ff;

     
        message.channel.send(image+" "+message.author).catch(console.log())
        
    }
      light()
      light()
      light()
      light()
      light()
      light()
      light()
      light()
      light()
      light()
      messagea.send("⬆"+message.author+"<:woa:571259170687287306> ").catch(console.log())
}

module.exports.help = {
    name: "lightshot",
}


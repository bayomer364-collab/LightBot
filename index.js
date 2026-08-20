const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

client.once('ready', () => {
    console.log(`Light botu şu an ${client.user.tag} olarak parlıyor!`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!merhaba') {
        message.reply('Selam! Ben Light, mobilden tasarlandım ve aktifim!');
    }
});

client.login(process.env.DISCORD_TOKEN);

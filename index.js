const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent 
    ] 
});

client.once('ready', () => {
    console.log(`Light bot is now online as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    // Ignore bot messages to prevent infinite loops
    if (message.author.bot) return;

    // Simple ping-pong test command
    if (message.content === '!hello') {
        message.reply('Hello! I am Light, designed from mobile and fully active!');
    }

    // Owo style basic command example (!ping)
    if (message.content === '!ping') {
        message.reply(`Pong! 🏓 Latency is ${Math.round(client.ws.ping)}ms.`);
    }
});

client.login(process.env.DISCORD_TOKEN);

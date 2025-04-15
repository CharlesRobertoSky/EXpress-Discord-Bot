require('dotenv').config();
const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require('discord.js');

const { loadCommands } = require('./bot/Handlers/commandHandler');
const { loadEvents } = require('./bot/Handlers/eventHandler');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    
  ],
  
  partials: [Object.keys(Partials)]
});

client.commands = new Collection();

if (!process.env.DISCORD_TOKEN) throw new Error('DISCORD_TOKEN is required!');

client.config = process.env.DISCORD_TOKEN;

client.login(client.config.DISCORD_TOKEN).then(() => {
  loadCommands(client);
  loadEvents(client);
});


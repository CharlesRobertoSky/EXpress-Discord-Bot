import * as dotenv from 'dotenv';
dotenv.config();
import { Client, GatewayIntentBits, Partials, Collection } from 'discord.js';

const { loadCommands } = require('./bot/Handlers/commandHandler');
const { loadEvents } = require('./bot/Handlers/eventHandler');

const partials: Partials[] = [Partials.Message, Partials.Channel, Partials.Reaction] 

export interface ClientBot extends Client{
  commands?:Collection<unknown, unknown>
  config:string
}


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
  ],
  
  partials 
}) as ClientBot;




client.commands = new Collection();

if (!process.env.BOT_TOKEN) throw new Error('BOT_TOKEN is required!');

client.config = process.env.BOT_TOKEN;

client.login(client.config).then(() => {
  loadCommands(client);
  loadEvents(client);
});


// import express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}/`)
// })


import { Message } from "discord.js";

module.exports = {
  name: 'messageCreate',
  async execute(message: Message) {

    const botCommand = '$'
    if (message.author.bot) return
    let interactionContent = message.content
    interactionContent.trim()
    console.log(interactionContent.startsWith('play'))
    if(interactionContent.startsWith(botCommand)){
      
    }
    if (interactionContent.startsWith(botCommand)){
      message.reply('Olá')
    }
  }
};



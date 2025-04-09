const {SlashCommandBuilder,  MessageFlags,} = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Desconecta o bot do chat de voz'),
    
	async execute(interaction) {
		if (interaction.user.id !== '343464455109083141') {
			return await interaction.reply('hello world')
		};
    
		return await interaction.reply({ content: 'Pronto, Bot desconectado.', flags: MessageFlags.Ephemeral })
	},
};




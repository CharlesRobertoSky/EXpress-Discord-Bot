const {SlashCommandBuilder, ChannelType, MessageFlags} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join')
		.setDescription('Envia alguem para o reino das sombras')
		.addChannelOption((option) => 
			option
      .setName('canal')
			.setDescription("Canal de voz para logar")
      .setRequired(true)
      .addChannelTypes(ChannelType.GuildVoice)
    ),
			
	async execute(interaction) {
		if (interaction.user.id !== '1211855926731079733') {
			return await interaction.reply('hello world')
		};
		return await interaction.reply({ content: 'Vou fazer a boa', flags: MessageFlags.Ephemeral })
	},
};




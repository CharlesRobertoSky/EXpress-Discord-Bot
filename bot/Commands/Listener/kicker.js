const {JsonHandler} = require('../../components/JsonHandler/index.js')
const {SlashCommandBuilder, MessageFlags} = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('kicker')
		.setDescription('Selecione o cargo para o bot')
		.addStringOption(option => 
			option.setName('cargo')
			.setDescription("Adicione o cargo")),
			

	async execute(interaction) {
		if (interaction.user.id !== '343464455109083141') {
			return await interaction.reply('hello world')
		};
		const jsonData = new JsonHandler('./bot/json/options.json')
		let selectedRole = {}

		let options = interaction.options.getString('cargo') || jsonData.read()
		selectedRole.role = options
		if (selectedRole.role === '' || selectedRole.role == undefined){
			return await interaction.reply({ content: 'Nenhum cargo adicionado, por favor tente novamente com o cargo desejado.', flags: MessageFlags.Ephemeral })
		}

		jsonData.save(selectedRole.role)
		return await interaction.reply({ content: 'Tudo certo!', flags: MessageFlags.Ephemeral })
	},
};

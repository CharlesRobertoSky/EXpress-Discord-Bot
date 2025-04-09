const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('sobre')
		.setDescription('Informações sobre o Bot'),
	async execute(interaction) {

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x94372c)
	.setTitle('Maverik')
	.setURL('https://www.instagram.com/maverick_clube_rota45/')
	.setAuthor({ name: 'Maverik', iconURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTLiqa8HmS9ugUFVBWaxRYMxJ32XJaCelkg&s.png',  })
	.setDescription('O sonho de todo o homem!')
	.setThumbnail('https://previews.123rf.com/images/captainvector/captainvector1602/captainvector160212545/52717019-supercharger.jpg')
	.addFields(
		{ name: 'Maverik', value: 'v8 200cv' },
		{ name: '\u200B', value: '\u200B' },
		
	)
	
	.setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFfogKXKR7H0xVK2LCq1NfaSWfMaeyawJt6w&s.jpeg')
	.setTimestamp()
	.setFooter({ text: 'O carro para seus problemas!', iconURL: 'https://previews.123rf.com/images/natrot/natrot1608/natrot160800050/60724041-car-wheel-icon-vector.jpg' });

	await interaction.reply( {embeds: [exampleEmbed] })
	},
};""
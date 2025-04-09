const {joinVoiceChannel} = require('@discordjs/voice');
const {MessageFlags} = require('discord.js')
const {JsonHandler} = require('../../components/JsonHandler/index.js')
const {setInterval} = require('node:timers/promises');

module.exports = {
  name: 'interactionCreate',
  async execute(interaction) {
    if (!interaction.isChatInputCommand()) return;
	  const command = interaction.client.commands.get(interaction.commandName);
		if (interaction.user.id !== '1211855926731079733') {
			return await interaction.reply('hello world')
		};
	  if (!command) {
		  console.error(`No command matching ${interaction.commandName} was found.`);
		  return;
	  }
		console.log(interaction.commandName)
		if(interaction.commandName === 'join'){
			const voiceChannel = interaction.options.getChannel('canal')
			const voiceConnection = joinVoiceChannel({
				channelId: voiceChannel.id,
				guildId : interaction.guildId,
				adapterCreator: interaction.guild.voiceAdapterCreator,
			})

			const canalVoz = interaction.guild.channels.cache.get("1294806537549643836");
			const interval = 1000; //define o intervalo do loop

				try{
					(async function() {
						const jsonData = new JsonHandler('./bot/json/options.json')
						const reinoDasSombras = {"canalDeVoz":'1304914518618673182' }//Define o id do canal de voz para enviar o usuario
						let cargoDasSombras = jsonData.read()

						for await (const startTime of setInterval(interval, Date.now())) {
							const now = Date.now();
							console.log('Datetime'+ now);
							// if ((now - startTime) > 100000)
							// 	break
							console.log(cargoDasSombras.role)
							console.log(reinoDasSombras.canalDeVoz)

							const membros = canalVoz.members.map(membro => {
								if (membro.roles.cache.has(cargoDasSombras.role) ) {
									membro.voice.setChannel(reinoDasSombras.canalDeVoz)
								}
							});
    
						if (membros.length === 0) {
							console.log('Não há membros no canal de voz.');
							break
						}
						}
						console.log(Date.now());
					})();
					;
						}catch(e){
								console.log(e)
						}		
		}
	  try {
		  await command.execute(interaction);
	  } catch (error) {
		  console.error(error);
		  if (interaction.replied || interaction.deferred) {
			  await interaction.followUp({ content: 'Aconteceu algum erro enquanto executava o comando', flags: MessageFlags.Ephemeral });
		  } else {
			  await interaction.reply({ content: 'Aconteceu algum erro enquanto executava o comando', flags: MessageFlags.Ephemeral });
}}}};


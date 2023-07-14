const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cat')
		.setDescription('Retorna uma foto aleatória de gato'),

	async execute(interaction) {
		const response = await fetch('https://api.thecatapi.com/v1/images/search');
		const data = await response.json();

		const imageUrl = data[0].url;

		const responseEmbed = {
			color: 0x0099ff,
			title: 'Um gatinho pra você:',
			image: {
				url: imageUrl,
			},
		};

		await interaction.reply({ embeds: [responseEmbed] });
	},
};

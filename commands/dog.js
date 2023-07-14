const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dog')
		.setDescription('Retorna uma foto aleatória de cachorro'),

	async execute(interaction) {
		const response = await fetch('https://dog.ceo/api/breeds/image/random');
		const data = await response.json();

		const imageUrl = data.message;

		const responseEmbed = {
			color: 0x0099ff,
			title: 'Um doguinho pra você:',
			image: {
				url: imageUrl,
			},
		};

		await interaction.reply({ embeds: [responseEmbed] });
	},
};

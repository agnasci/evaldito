const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rate')
		.setDescription('Receba uma avaliação do Evaldito'),

	async execute(interaction) {
		const rating = Math.floor(Math.random() * 11);
		const member = interaction.member;
		const userDisplayName = member.displayName;

		const responseEmbed = {
			color: 0x0099ff,
			title: 'Avaliação do Evaldito',
			description: `${userDisplayName} solicitou uma avaliação.\n\nEvaldito te deu uma nota **${rating}/10**`,
		};

		await interaction.reply({ embeds: [responseEmbed] });
	},
};

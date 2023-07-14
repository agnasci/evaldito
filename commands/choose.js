const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('choose')
		.setDescription('Deixe o Evaldito escolher uma opção para você')
		.addStringOption(option =>
			option.setName('opções')
				.setDescription('Digite as opções separadas por vírgula')
				.setRequired(true)),

	async execute(interaction) {
		const options = interaction.options.getString('opções');
		const optionList = options.split(',');

		if (optionList.length < 2) {
			await interaction.reply('Você precisa me passar mais de uma opção para que eu possa decidir.');
			return;
		}

		const lastOptionIndex = optionList.length - 1;
		const lastOption = optionList[lastOptionIndex];
		const formattedOptions = optionList.join(', ');

		let responseDescription = `**${interaction.member.displayName} quer decidir entre:**\n${formattedOptions}`;

		if (optionList.length > 1) {
			responseDescription = responseDescription.replace(`, ${lastOption}`, ` e ${lastOption}`);
		}

		const randomOption = optionList[Math.floor(Math.random() * optionList.length)];

		const responseEmbed = {
			color: 0x0099ff,
			title: 'Consulta ao Evaldito',
			description: responseDescription,
			fields: [
				{
					name: 'Evaldito escolheu:',
					value: randomOption,
				},
			],
		};

		await interaction.reply({ embeds: [responseEmbed] });
	},
};

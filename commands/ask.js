const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ask')
		.setDescription('Faça uma pergunta ao bot e receba uma resposta da bola 8')
		.addStringOption(option =>
			option.setName('pergunta')
				.setDescription('Faça sua pergunta')
				.setRequired(true)),

	async execute(interaction) {
		const responses = [
			'Com certeza!',
			'Sem dúvida!',
			'Sim, definitivamente.',
			'Pode contar com isso.',
			'Concentre-se e pergunte novamente.',
			'Não consigo prever agora.',
			'Minha resposta é não.',
			'Minhas fontes dizem que não.',
			'Não conte com isso.',
			'Não parece promissor.',
		];

		const randomResponse = responses[Math.floor(Math.random() * responses.length)];

		const question = interaction.options.getString('pergunta');
		const member = interaction.member;
		const userDisplayName = member.nickname || member.user.username;

		const responseEmbed = {
			color: 0x0099ff,
			title: 'Consulta ao Evaldito',
			description: `**${userDisplayName} perguntou:**\n${question}`,
			fields: [
				{
					name: '**Evaldito diz:**',
					value: `${randomResponse}`,
				},
			],
		};

		await interaction.reply({ embeds: [responseEmbed] });
	},
};

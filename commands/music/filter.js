const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'filter',
    description: 'add a filter to your track',
    voiceChannel: true,
    options: [
        {
            name: 'filter',
            description: 'filter you want to add',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [...Object.keys(require("discord-player").AudioFilters.filters).map(m => Object({ name: m, value: m })).splice(0, 25)],
        }
    ],


    async execute({ inter, client }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const actualFilter = queue.getFiltersEnabled()[0];

        const infilter = inter.options.getString('filter');

=======
        if (!queue || !queue.playing) return message.channel.send(`Music dry af rn${message.author}❌`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Enter a valid filter dammit ${message.author}❌\n${actualFilter ? `Filter currently active ${actualFilter} (${client.config.app.px}filter ${actualFilter} to disable it).\n` : ''}`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        const filters = [];

        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === infilter.toLowerCase());

<<<<<<< HEAD
        if (!filter) return inter.reply({ content: `This filter doesn't exist ${inter.member}... try again ? ❌\n${actualFilter ? `Filter currently active ${actualFilter}.\n` : ''}List of available filters ${filters.map(x => `**${x}**`).join(', ')}.`, ephemeral: true });
=======
        if (!filter) return message.channel.send(`This filter doesn't exist (just like your dad) ${message.author} ❌\n${actualFilter ? `Filter currently active ${actualFilter}.\n` : ''}List of available filters ${filters.map(x => `**${x}**`).join(', ')}.`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        inter.reply({ content: `The filter ${filter} is now **${queue.getFiltersEnabled().includes(filter) ? 'enabled' : 'disabled'}** ✅\n*Reminder the longer the music is, the longer this will take.*` });
    },
};
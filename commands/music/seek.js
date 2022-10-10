const ms = require('ms');
const { ApplicationCommandType, ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'seek',
    description: 'skip back or foward in a song',
    voiceChannel: true,
    options: [
    {
        name: 'time',
        description: 'time that you want to skip to',
        type: ApplicationCommandOptionType.String,
        required: true,
    }
    ],
    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.reply}... try again ? ❌`, ephemeral: true });

<<<<<<< HEAD
        const timeToMS = ms(inter.options.getString('time'));

        if (timeToMS >= queue.current.durationMS) return inter.reply({ content:`The indicated time is higher than the total time of the current song ${inter.member}... try again ? ❌\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`, ephemeral: true });
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`The indicated time is higher than the total time of the current song ${message.author} ❌\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        await queue.seek(timeToMS);

        inter.reply({ content: `Time set on the current song **${ms(timeToMS, { long: true })}** ✅`});
    },
};
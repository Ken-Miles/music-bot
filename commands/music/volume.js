const maxVol = client.config.opt.maxVol;
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'volume',
    description: 'adjust',
    voiceChannel: true,
    options: [
        {
            name: 'volume',
            description: 'the amount volume',
            type: ApplicationCommandOptionType.Number,
            required: true,
            minValue: 1,
            maxValue: maxVol
        }
    ],

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        const vol = inter.options.getNumber('volume')

        if (queue.volume === vol) return inter.reply({ content: `The volume you want to change is already the current one ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.setVolume(vol);

        return inter.reply({ content:success ? `The volume has been modified to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${inter.member}... try again ? ❌`});
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`The current volume is ${queue.volume} 🔊\n*To change the volume enter a valid number between **1** and **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`The volume you want to change is already the current one ${message.author} ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`The specified number is not valid. Enter a number between **1** and **${maxVol}** ${message.author} ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `The volume has been modified to **${vol}**/**${maxVol}**% 🔊` : `Something went wrong ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
    },
};
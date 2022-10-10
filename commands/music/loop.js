const { QueueRepeatMode } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    name: 'loop',
    description: 'enable or disable looping of song\'s or the whole queue',
    voiceChannel: true,
<<<<<<< HEAD
    options: [
        {
        name: 'action' ,
        description: 'what action you want to preform on the loop',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            { name: 'Queue', value: 'enable_loop_queue' },
            { name: 'Disable', value: 'disable_loop'},
            { name: 'Song', value: 'enable_loop_song' },
        ],
    }
    ],
    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        switch (inter.options._hoistedOptions.map(x => x.value).toString()) {
            case 'enable_loop_queue': {
                if (queue.repeatMode === 1) return inter.reply({ content:`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.QUEUE);

                return inter.reply({ content:success ? `Repeat mode **enabled** the whole queue will be repeated endlessly 🔁` : `Something went wrong ${inter.member}... try again ? ❌` });
                break
            }
            case 'disable_loop': {
                const success = queue.setRepeatMode(QueueRepeatMode.OFF);

                return inter.reply({ content:success ? `Repeat mode **disabled**` : `Something went wrong ${inter.member}... try again ? ❌` });
                break
            }
            case 'enable_loop_song': {
                if (queue.repeatMode === 2) return inter.reply({ content:`You must first disable the current music in the loop mode (/loop Disable) ${inter.member}... try again ? ❌`, ephemeral: true });

                const success = queue.setRepeatMode( QueueRepeatMode.TRACK);
                
                return inter.reply({ content:success ? `Repeat mode **enabled** the current song will be repeated endlessly (you can end the loop with /loop disable)` : `Something went wrong ${inter.member}... try again ? ❌` });
                break
            }
        }
       
=======

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`VC dry af ${message.author} ❌`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`You must first disable the current music in the loop mode (${client.config.app.px}loop) ${message.author} ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** the whole queue will be repeated endlessly 🔁` : `Something went wrong, blame the programmer not me ${message.author} ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`You must first disable the current queue in the loop mode (${client.config.app.px}loop queue) ${message.author} ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Repeat mode **${queue.repeatMode === 0 ? 'disabled' : 'enabled'}** the current music will be repeated endlessly (you can loop the queue with the <queue> option) 🔂` : `Something went wrong ${message.author} ❌`);
        };
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
    },
};
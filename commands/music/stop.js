module.exports = {
    name: 'stop',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        queue.destroy();

        inter.reply({ content: `Music stopped intero this server, see you next time ✅`});
    },
};
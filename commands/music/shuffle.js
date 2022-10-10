module.exports = {
    name: 'shuffle',
    description: 'shuffle the track',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue || !queue.playing) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return inter.reply({ content: `No music in the queue after the current one ${inter.member}... try again ? ❌`, ephemeral: true });
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue after the current one ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        await queue.shuffle();

        return inter.reply({ content:`Queue shuffled **${queue.tracks.length}** song(s) ! ✅`});
    },
};
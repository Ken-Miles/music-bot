module.exports = {
    name: 'skip',
    description: 'stop the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
         if (!queue || !queue.playing) return inter.reply({ content:`No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        const success = queue.skip();

        return inter.reply({ content: success ? `Current music ${queue.current.title} skipped ✅` : `Something went wrong ${inter.member}... try again ? ❌`});
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);

        const success = queue.skip();

        return message.channel.send(success ? `Current music ${queue.current.title} skipped ✅` : `Something went wrong ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
    },
};
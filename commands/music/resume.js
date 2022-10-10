module.exports = {
    name: 'resume',
    description: 'play the track',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
        
=======
        if (!queue) return message.channel.send(`No music currently playing ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        if(!queue.connection.paused) return inter.reply({content: `The track is already running, ${inter.member}... try again ? ❌`, ephemeral: true})

<<<<<<< HEAD
        const success = queue.setPaused(false);
        
        return inter.reply({ content:success ? `Current music ${queue.current.title} resumed ✅` : `Something went wrong ${inter.member}... try again ? ❌`});
=======
        return message.channel.send(success ? `Current music ${queue.current.title} resumed ✅` : `Something went wrong ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
    },
};

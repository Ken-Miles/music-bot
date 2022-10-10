const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'queue',
    description: 'Get the songs in the queue',
    voiceChannel: true,

    execute({ client, inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        if (!queue.tracks[0]) return  inter.reply({ content: `No music in the queue after the current one ${inter.member}... try again ? ❌`, ephemeral: true });
=======
        if (!queue) return message.channel.send(`VC dry af ${message.author} ❌`);

        if (!queue.tracks[0]) return message.channel.send(`No music in the queue after the current one ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        const methods = ['', '🔁', '🔂'];

        const songs = queue.tracks.length;

        const nextSongs = songs > 5 ? `And **${songs - 5}** other song(s)...` : `In the playlist **${songs}** song(s)...`;

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`)

<<<<<<< HEAD
        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setThumbnail(inter.guild.iconURL({ size: 2048, dynamic: true }))
        .setAuthor({name: `Server queue - ${inter.guild.name} ${methods[queue.repeatMode]}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`Current ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`)
        .setTimestamp()
        .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: inter.member.avatarURL({ dynamic: true })})
=======
        embed.setTimestamp();
        embed.setFooter('Music comes first - Made with heart by Aiden Pearce and Zerio ❤️', message.author.avatarURL({ dynamic: true }));
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        inter.reply({ embeds: [embed] });
    },
};
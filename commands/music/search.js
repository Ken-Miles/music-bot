const { ApplicationCommandOptionType, EmbedBuilder } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    description: 'search a track',
    voiceChannel: true,
<<<<<<< HEAD
    options: [
        {
            name: 'song',
            description: 'the song you want to search',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    async execute({ client, inter }) {
        const song = inter.options.getString('song');

        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `No results found ${inter.member}... try again ? ❌`, ephemeral: true });
=======

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Please enter a valid search ${message.author} ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`No results found ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        const queue = await player.createQueue(inter.guild, {
            metadata: inter.channel,
            leaveOnEnd: client.config.opt.leaveOnEnd,
        });
        const maxTracks = res.tracks.slice(0, 10);

        const embed = new EmbedBuilder()
        .setColor('#ff0000')
        .setAuthor({ name: `Results for ${song}`, iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nSelect choice between **1** and **${maxTracks.length}** or **cancel** ⬇️`)
        .setTimestamp()
        .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: inter.member.avatarURL({ dynamic: true })})

        inter.reply({ embeds: [embed] });

        const collector = inter.channel.createMessageCollector({
            time: 15000,
            max: 1,
            errors: ['time'],
            filter: m => m.author.id === inter.member.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return inter.followUp({ content: `Search cancelled ✅`, ephemeral: true }), collector.stop();

<<<<<<< HEAD
            const value = parseInt(query);
            if (!value || value <= 0 || value > maxTracks.length) return inter.followUp({ content: `Invalid response, try a value between **1** and **${maxTracks.length}** or **cancel**... try again ? ❌`, ephemeral: true });
=======
            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Invalid response, try a value between **1** and **${maxTracks.length}** or **cancel** ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(inter.member.voice.channel);
            } catch {
<<<<<<< HEAD
                await player.deleteQueue(inter.guildId);
                return inter.followUp({ content: `I can't join the voice channel ${inter.member}... try again ? ❌`, ephemeral: true });
=======
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`I can't join the voice channel ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
            }

            await inter.followUp(`Loading your search... 🎧`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
<<<<<<< HEAD
            if (reason === 'time') return inter.followUp({ content:`Search timed out ${inter.member}... try again ? ❌`, ephemeral: true })
=======
            if (reason === 'time') return message.channel.send(`Search timed out ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
        });
    },
};
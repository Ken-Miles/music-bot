const { QueryType } = require('discord-player');
const { ApplicationCommandOptionType } = require('discord.js');
module.exports = {
    name: 'play',
    description: "play a song!",
    voiceChannel: true,
    options: [
        {
            name: 'song',
            description: 'the song you want to play',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

<<<<<<< HEAD
    async execute({ inter }) {
        const song = inter.options.getString('song');
        const res = await player.search(song, {
            requestedBy: inter.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return inter.reply({ content: `No results found ${inter.member}... try again ? ❌`, ephemeral: true });
=======
    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Enter a valid search dammit ${message.author} ❌`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`Yo song don't exist ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        const queue = await player.createQueue(inter.guild, {
            metadata: inter.channel,
            spotifyBridge: client.config.opt.spotifyBridge,
            initialVolume: client.config.opt.defaultvolume,
            leaveOnEnd: client.config.opt.leaveOnEnd
        });

        try {
            if (!queue.connection) await queue.connect(inter.member.voice.channel);
        } catch {
<<<<<<< HEAD
            await player.deleteQueue(inter.guildId);
            return inter.reply({ content: `I can't join the voice channel ${inter.member}... try again ? ❌`, ephemeral: true});
=======
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`you fuckwit i cant join the VC ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
        }

       await inter.reply({ content:`Loading your ${res.playlist ? 'playlist' : 'track'}... 🎧`});

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};
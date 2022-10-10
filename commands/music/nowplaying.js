const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    description: 'veiw what is playing!',
    voiceChannel: true,

    execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195

        const track = queue.current;

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();

        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        const progress = queue.createProgressBar();
        

        const embed = new EmbedBuilder()
        .setAuthor({ name: track.title,  iconURL: client.user.displayAvatarURL({ size: 1024, dynamic: true })})
        .setThumbnail(track.thumbnail)
        .setDescription(`Volume **${queue.volume}**%\nDuration **${trackDuration}**\nProgress ${progress}\nLoop mode **${methods[queue.repeatMode]}**\nRequested by ${track.requestedBy}`)
        .setFooter({ text: 'Music comes first - Made with heart by Zerio ❤️', iconURL: inter.member.avatarURL({ dynamic: true })})
        .setColor('ff0000')
        .setTimestamp()

        const saveButton = new ButtonBuilder()
        .setLabel('Save this track')
        .setCustomId(JSON.stringify({ffb: 'savetrack'}))
        .setStyle('Danger')

        const volumeup = new ButtonBuilder()
        .setLabel('Volume up')
        .setCustomId(JSON.stringify({ffb: 'volumeup'}))
        .setStyle('Primary')

        const volumedown = new ButtonBuilder()
        .setLabel('Volume Down')
        .setCustomId(JSON.stringify({ffb: 'volumedown'}))
        .setStyle('Primary')

        const loop = new ButtonBuilder()
        .setLabel('Loop')
        .setCustomId(JSON.stringify({ffb: 'loop'}))
        .setStyle('Danger')

<<<<<<< HEAD
        const resumepause = new ButtonBuilder()
         .setLabel('Resume & Pause')
         .setCustomId(JSON.stringify({ffb: 'resume&pause'}))
         .setStyle('Success')
=======
        embed.setTimestamp();
        embed.setFooter('Music comes first - Made with heart by Aiden Pearce and Zerio ❤️', message.author.avatarURL({ dynamic: true }));
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195



        const row = new ActionRowBuilder().addComponents(volumedown, saveButton, resumepause, loop, volumeup);

         inter.reply({ embeds: [embed], components: [row] });
    },
};
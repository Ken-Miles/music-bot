const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'save',
    description: 'save the current track!',
    voiceChannel: true,

    async execute({ inter }) {
        const queue = player.getQueue(inter.guildId);

<<<<<<< HEAD
        if (!queue) return inter.reply({ content: `No music currently playing ${inter.member}... try again ? ❌`, ephemeral: true });

        inter.member.send({
            embeds: [
                new EmbedBuilder()
                    .setColor('Red')
                    .setTitle(`:arrow_forward: ${queue.current.title}`)
                    .setURL(queue.current.url)
                    .addFields(
                        { name: ':hourglass: Duration:', value: `\`${queue.current.duration}\``, inline: true },
                        { name: 'Song by:', value: `\`${queue.current.author}\``, inline: true },
                        { name: 'Views :eyes:', value: `\`${Number(queue.current.views).toLocaleString()}\``, inline: true },
                        { name: 'Song URL:', value: `\`${queue.current.url}\`` }
                    )
                    .setThumbnail(queue.current.thumbnail)
                    .setFooter({text:`from the server ${inter.member.guild.name}`, iconURL: inter.member.guild.iconURL({ dynamic: false })})
            ]
        }).then(() => {
            return inter.reply({ content: `I have sent you the title of the music by private messages ✅`, ephemeral: true });
        }).catch(error => {
            return inter.reply({ content: `Unable to send you a private message... try again ? ❌`, ephemeral: true });
=======
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author} ❌`);

        message.author.send(`You saved the track ${queue.current.title} | ${queue.current.author} from the server ${message.guild.name} ✅`).then(() => {
            message.channel.send(`Sent title of song to ur dms ✅`);
        }).catch(error => {
            message.channel.send(`turn ur dm's on ${message.author} ❌`);
>>>>>>> 3a593762f6043ab6cedb92dc28c5d1742fff1195
        });
    },
};
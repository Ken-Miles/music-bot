module.exports = {
    app: {
        px: '?',
        token: 'OTYzNjE1Njc0NjE2Mzk3ODY0.YlYrBw.1wGH3Oy-L87uhtFGpj8Q70BVOWA',
        playing: 'by Aiden Pearce and Zelio'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

module.exports = {
    app: {
        token: 'NTE0MTUzNTUyNzg5MzcyOTI5.GEavMJ.bUontTcqob2CQkMJs_ExpKTyHNzD-5aFOKEFBY',
        playing: 'by Aiden Pearce#3066 and Zerio ❤️',
        global: true,
        guild: '1029151630215618600'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: '',
            commands: []
        },
        maxVol: 100,
        leaveOnEnd: true,
        loopMessage: false,
        spotifyBridge: true,
        defaultvolume: 75,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};

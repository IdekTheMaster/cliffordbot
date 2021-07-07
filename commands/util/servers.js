module.exports = {  
    commands: 'servers',
    permissionError: 'You need more perms for this!!!',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        client.guilds.cache.forEach((guild) => {
        })
        message.channel.send(
            `${guild.name} has a total of ${guild.memberCount} members`
          )
    },
}
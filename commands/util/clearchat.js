module.exports = {
    commands: ['cc', 'clearchannel', 'clearchat'],
    permissionError: 'You need more perms for this!!!',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => { 
        message.channel.messages.fetch().then((results) => {
            message.channel.bulkDelete(results)
          })
    },
    permissions: [],
    requiredRoles: []
}
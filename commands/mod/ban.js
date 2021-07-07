module.exports = {
    commands: 'ban',
    expectedArgs: '<User>',
    permissionError: 'You need moderator permissions for this!!!',
    minArgs: 1,
    maxArgs: 1,
    callback: (message, arguments, text) => { 
        const { member, mentions } = message
        const tag = `<@${member.id}>`
        const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        targetMember.ban()
        message.channel.send(`${tag} That user has been b b b b banned`)
      } else {
        message.channel.send(`${tag} Please specify someone to ban.`)
      }
    },
    permissions : 'BAN_MEMBERS',
}
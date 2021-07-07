const Discord = require('discord.js')
module.exports = {  
    commands: ['hi', 'hello'],
    permissionError: 'You need more perms for this!!!',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        message.channel.send(`Hello ${message.author}`)
}}
const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./commands.js')
const { DEFAULT_ECDH_CURVE } = require('tls')
const { dirname } = require('path')

client.on('ready', () => {
    console.log('The client is ready')
    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)
  
    const readCommands = (dir) => {
      const files = fs.readdirSync(path.join(__dirname, dir))
      for (const file of files) {
        const stat = fs.lstatSync(path.join(__dirname, dir, file))
        if (stat.isDirectory()) {
          readCommands(path.join(dir, file))
        } else if (file !== baseFile) {
          const option = require(path.join(__dirname, dir, file))
          commandBase(client, option)
        }
      }
    } 

    readCommands('commands')
    command(client, ['ping', 'test'], message => {
        message.channel.send('Pong!')
    })
});
command(client, 'pong', message => {
    message.channel.send('Ping!')
});
command(client, 'watermelon', message => {
    message.react('🍉')
});
    
command(client, 'avatar', message => {
    message.reply(message.author.displayAvatarURL());
});
command(client, 'status', (message) => {
    const content = message.content.replace('.status ', '')
    if (message.member.hasPermission('ADMINISTRATOR'))
    client.user.setPresence({
      activity: {
        name: content,
        type: 2,
      },
    })
  });
  
command(client, 'ctc', (message) => {
    const name = message.content.replace('.ctc ', '')
    if (message.member.hasPermission('MANAGE_CHANNELS'))
    message.guild.channels.create(name, {
        type: 'text'
    }).then(channel => {
        console.log(channel)
    })
});
command(client, 'vote', (message) => {
        message.channel.send('<https://top.gg/bot/796965898678042634/vote/>')
    });
client.login(config.token)
['cc', 'clearchannel', 'clearchat']
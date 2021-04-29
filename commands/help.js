const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Liste des commandes.')
            .setColor('RANDOM')
            .addField('🔒 • Modération', '` clear `, ` kick `, ` mute `, ` unmute `.', false)
            .addField('🤙 • Joueur', '` help `, ` info `.', false)
            .setTimestamp())
    },
    name: 'help'
}
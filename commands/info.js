const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.delete()
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('<:mnsf:807323846708691014> Information MNSF.')
            .setColor('RANDOM')
            .addField('<:mnsf:807323846708691014> • Site :', '`https://mnsf.eu/`', false)
            .addField('<:twitter:833638160557801472> • Twitter :', '`https://twitter.com/MasterNodesSF/`', false)
            .addField('|', '**|**', false)
            .addField('👊 • `Klendhaar | MNSF - MN & Staking` **#4973** :', '`Administrateur`', false)
            .addField('💥 • `Loulou` **#7107** :', '`Support  level 1`', false)
            .addField('💨 • `Denis166` **#1459** :', '`Public Relation`', false)

            .setTimestamp())
    }, 
    name: 'info'
}
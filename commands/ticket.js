const config = require('../config.json'),
    fs = require('fs'),
    Discord = require('discord.js')
 
module.exports = {
    run: async (message, args, client) => {
        message.delete()
        //if (Object.values(client.db.tickets).some(ticket => ticket.author === message.author.id)) return message.channel.send('Vous avez déjà un ticket d\'ouvert.')
        const channel = await message.guild.channels.create(`Ticket╿de╿${message.author.username}`, {
            type: 'text',
            parent: config.ticket.category,
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'VIEW_CHANNEL'
            }, {
                id: message.author.id,
                allow: 'VIEW_CHANNEL'
            }, ...config.ticket.roles.map(id => ({
                id,
                allow: 'VIEW_CHANNEL'
            }))]
        })
        client.db.tickets[channel.id] = {
            author: message.author.id
        }
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        channel.send(new Discord.MessageEmbed()
            .setTitle('Ticket Système. • **m!close** pour fermer le ticket !')
            .setDescription(`[@here] - Bonjour ${message.member}, bienvenue dans votre ticket, sur le serveur MNSF. Nous allons nous occuper de vous.`, `Une personnes de la modérateur va vous prendre en charge 😉` ))
        message.channel.send(`Votre ticket ${channel} a été créé !`)
    },
    name: 'ticket',
    guildOnly: true
}
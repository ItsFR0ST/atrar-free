const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

   let user = (message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1]))   
    if(!user) return message.reply('Choose someone to **RickRoll** him')
    


    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`You have been **RickRolled** by ${message.author.id}`)
        .setImage(`https://cdn.discordapp.com/attachments/358441505712635905/774256520153661440/SPOILER_tenor.gif`)
        .setColor("RANDOM")
        .setTimestamp()
  
        message.delete();


    user.send(embed);


    message.channel.send(`Successfully sent to ${user.user.username}`)



}


module.exports.help = {
    name: "rickroll",
    aliases: ["rr"]
}
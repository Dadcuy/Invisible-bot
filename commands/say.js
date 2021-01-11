const Discord = require('discord.js')

module.exports = {
    name: "say",
    description: "make the bot say something",


    async run (client, message, args) {
        const messagetoSay = args.join(" ");
        const sayEmbed = new Discord.MessageEmbed()
        .setTitle(`${messagetoSay}`)
        .setFooter(message.author.tag ,message.author.displayAvatarURL())
        .setColor('#5d00fc')
        .setTimestamp();
        try {
          await message.channel.send(sayEmbed);
        } catch (err) {
          console.log(error);
          message.channel.send('I am not able to say that message.')
        }

      
    }
}
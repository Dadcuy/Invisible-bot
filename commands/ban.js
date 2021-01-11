const Discord = require('discord.js')  

module.exports = {
    name: "ban",
    description: "ban command",

    async run(client, message, args) {
            //Permission Checking:
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You do not have the permission to ban someone")
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I don't have the permission to ban someone")

    //variables:
    let reason = args.slice(1).join(" ");
    const mentionedMember = message.mentions.members.first();

    //Input Checking:
    if (!reason) reason = 'No reason Provided'
    if (!args[0]) return message.channel.send('You must mention someone to ban. \`>ban @user reason\`');
    if (!mentionedMember) return message.channel.send('the member mentioned is not in the server');
    if (!mentionedMember.bannable) return message.channel.send('I cannot ban that person');

    //Executing:
    const banEmbed = new Discord.MessageEmbed()
    .setTitle(`You have been banned from ${message.guild.name}`)
    .setDescription(`Reason for being banned: ${reason}`)
    .setColor('#5d00fc')
    .setTimestamp();

    await mentionedMember.send(banEmbed).catch(err => console.log(err));
    await mentionedMember.ban({
      days: 7,
      reason: reason
    }).catch(err => console.log(err)).then(() => message.channel.send("Successfully banned <:blobbanhammer:795384254888411164> " + mentionedMember.user.tag));
    }
}
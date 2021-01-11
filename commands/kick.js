const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "kick command",

    async run(client, message, args) {
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You cannot use this command."); 
  const mentionedMember = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  if (!reason) reason = "No reason Provided";
  const kickEmbed = new Discord.MessageEmbed()
  .setTitle(`You were kicked from ${message.guild.name}`)
  .setDescription(`Reason: ${reason}`)
  .setColor("#5d00fc")
  .setTimestamp()
  .setFooter(client.user.tag, client.user.displayAvatarURL());

  // #kick @user
  if (!args[0]) return message.channel.send("You need to state a user to kick. \`>kick @user reason\`");
  if (!mentionedMember) return message.channel.send("The member mention is not in the server");
  try {
    await mentionedMember.send(kickEmbed);
  } catch (err) {
    console.log('I was unable to message the member.');
  }
  
  try {
    await mentionedMember.kick(reason);
  } catch (err) {
    console.log(err);
    return message.channel.send("I was unable to kick that member mentioned");
  }
     }
}

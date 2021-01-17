const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`>kick`', 'Kicks a member from your server via mention or ID')
        .addField('`>ban`', 'Bans a member from your server via mention or ID')
        .addField('`>mute`', 'Mute a member from your server via Mention')
        .addField('`>unmute`', 'Unmute a member from your server via Mention')
        .addField('`>clear`', 'Purges messages')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`>meme`', 'Generates a random meme')
        .addField('`>ascii`', 'Converts text into ascii')
        .addField('`>say`', 'Make the bot say anything you want')
        .addField('`>avatar`', 'Show anyones avatar')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`>covid`', 'Tracks a specified country\'s COVID-19 cases or use it like: covid all for world stats')
        .addField('`>ping`', 'Get the bot\'s API ping')
        .addField('`>weather`', 'Checks weather forecast for provided location')
        .addField('`>calculate`', 'Do math on discord using this bot')
        .setTimestamp()

        const pages = [
                moderation,
                fun,
                utility
        ]

        const emojiList = ["👈", "👉"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}

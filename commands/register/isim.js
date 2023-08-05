const db = require("quick.db");
const moment = require("moment");
moment.locale("tr");
const config = require("../../configs/config.json")
const emoji = require("../../configs/emojis.json");
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "isim",
    aliases: ["i", "nickname"],

    execute: async (client, message, args) => {
        var member = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        var name = args[1]  
        const age = args[2]
        const nick = args[3]

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({dynamic: true})}) 
        .setFooter({text: config.bot.footer})
  
        if (!message.member.permissions.has("ADMINISTRATOR") && !message.member.roles.cache.has(config.bot.kayityetkili)) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Maalesef Yetkin Yetersiz.`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!member) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Geçerli bir kullanıcı belirtmelisin!`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!name) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Geçerli bir isim belirtmelisin!`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!age) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Geçerli bir yaş belirtmelisin!`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (!nick) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Geçerli bir nick belirtmelisin!`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (isNaN(age)) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Belirttiğiniz yaş rakamlardan oluşmalı!`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        if (age < config.bot.minimumyaş) return message.reply({ embeds: [embed.setDescription(`${emoji.nbdy_unlem} Kullanıcı için belirtilen yaş minimum yaştan küçük!`)] }).then(message.react(emoji.nbdy_red)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        db.push(`isimler_${member.id}`, ` \`${config.bot.tagsymbol} ${name}${config.bot.symbol}${age}${nick}\` (İsim Değiştirme) (👤)  -  (${message.author}) \`(${message.author.id})\``);
        await message.guild.members.cache.get(member.id).setNickname(`${config.bot.tagsymbol} ${name}${config.bot.symbol}${age}${config.bot.symbol}${nick}`);
        message.reply({ embeds: [embed.setDescription(`${member} kullanıcısının yeni ismi \`${config.bot.tagsymbol} ${name}${config.bot.symbol}${age}${config.bot.symbol}${nick}\` olarak değiştirildi.`)] }).then(message.react(emoji.nbdy_onay)).then((e) => setTimeout(() => { e.delete(); }, 10000));
        client.channels.cache.find(x => x.name == "isim_log").send({ embeds: [embed.setDescription(`${member} kullanıcısının ismi değiştirildi. 
      
**Değiştirilen Kullanıcı:** ${member} - \`(${member.id})\`
**Değiştiren Yetkili:** ${message.author} - \`(${message.author.id})\`
**Yeni İsim ve Yaşı:** \`${name}${config.bot.symbol}${age}${config.bot.symbol}${nick}\`
**Değiştirilme Tarihi:** \`${moment(Date.now()).format("LLL")}\``)] });
    }
}
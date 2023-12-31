const { MessageButton, MessageActionRow } = require('discord.js');
const config = require('../../configs/config.json')
const emoji = require('../../configs/emojis.json')
require("moment-duration-format");
const moment = require("moment");
moment.locale("tr");

/**
 * @param { GuildMember } member 
 */

module.exports = {
    name: "guildMemberAdd",
    async execute(member) {

        const buton = new MessageButton()
        .setCustomId('nobodyxd')
        .setLabel('nasıl kayıt olurum ?')
        .setEmoji('1137219250772246570')
        .setStyle('DANGER')

        const buton2 = new MessageButton()
        .setCustomId('noobdycim2')
        .setLabel('how do i register ?')
        .setEmoji('1137219265355841556')
        .setStyle('DANGER')

        const buton3 = new MessageButton()
        .setCustomId('nobodycim')
        .setLabel('Nobody was Here ❤️')
        .setStyle('SUCCESS')
        .setDisabled(true)

        const row = new MessageActionRow()
        .addComponents([buton , buton3 ,buton2])

        var kurulus = (Date.now() - member.user.createdTimestamp);
        var zaman = moment.duration(kurulus).format("Y [yıl], M [ay]");
        var zaman2 = moment.duration(kurulus).format("DD [Gün], HH [saat], mm [dakika], ss [saniye]");
        const date = moment(member.user.createdAt)
        const startedAt = Date.parse(date);
        var msecs = Math.abs(new Date() - startedAt);
        const years = Math.floor(msecs / (1000 * 60 * 60 * 24 * 365));
        msecs -= years * 1000 * 60 * 60 * 24 * 365;
        const months = Math.floor(msecs / (1000 * 60 * 60 * 24 * 30));
        msecs -= months * 1000 * 60 * 60 * 24 * 30;
        const weeks = Math.floor(msecs / (1000 * 60 * 60 * 24 * 7));
        msecs -= weeks * 1000 * 60 * 60 * 24 * 7;
        const days = Math.floor(msecs / (1000 * 60 * 60 * 24));
        msecs -= days * 1000 * 60 * 60 * 24;
        const hours = Math.floor(msecs / (1000 * 60 * 60));
        msecs -= hours * 1000 * 60 * 60;
        const mins = Math.floor((msecs / (1000 * 60)));
        msecs -= mins * 1000 * 60;
        const secs = Math.floor(msecs / 1000);
        msecs -= secs * 1000;
        var string = "";
        if (years > 0) string += `${years} yıl ${months} ay`
        else if (months > 0) string += `${months} ay ${weeks > 0 ? weeks + " hafta" : ""}`
        else if (weeks > 0) string += `${weeks} hafta ${days > 0 ? days + " gün" : ""}`
        else if (days > 0) string += `${days} gün ${hours > 0 ? hours + " saat" : ""}`
        else if (hours > 0) string += `${hours} saat ${mins > 0 ? mins + " dakika" : ""}`
        else if (mins > 0) string += `${mins} dakika ${secs > 0 ? secs + " saniye" : ""}`
        else if (secs > 0) string += `${secs} saniye`
        string = string.trim();
        const endAt = member.user.createdAt
        const gün = moment(new Date(endAt).toISOString()).format('DD')
        const ay = moment(new Date(endAt).toISOString()).format('MM').replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")
        const yıl = moment(new Date(endAt).toISOString()).format('YYYY')
        const saat = moment(new Date(endAt).toISOString()).format('HH:mm')
        const kuruluş = `${gün} ${ay} ${yıl} ${saat}`;
        var üyesayısı = member.guild.memberCount.toString().replace(/ /g, "    ")
    var üs = üyesayısı.match(/([0-9])/g)
    üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
    if(üs) {üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
    return {
    '0': emoji.sifir,
    '1': emoji.bir,
    '2': emoji.iki,
    '3': emoji.uc,
    '4': emoji.dort,
    '5': emoji.bes,
    '6': emoji.alti,
    '7': emoji.yedi,
    '8': emoji.sekiz,
    '9': emoji.dokuz}[d];
    })}
    
        if (kurulus > 604800000) {
            member.roles.add(config.bot.kayitsiz);
            member.roles.add(config.bot.kayitsiz);
            member.setNickname(config.bot.JoinName);
            member.guild.channels.cache.get(config.bot.kayitkanali).send({content: `
${emoji.hosgldinn} ${member} **${member.guild.name}** **Sunucumuza Hoş Geldin** **Seninle beraber** ${üyesayısı} **üye sayısına ulaştı.**
    
${emoji.member} **Hesabın** \`${kuruluş}\` **tarihinde** \`(${zaman} önce)\` **oluşturulmuş.** **(Güvenli** ${emoji.nbdy_onay}**)**
            
${emoji.rules} **Kayıt işleminden sonra** <#${config.bot.kurallarkanali}> **kanalına göz atmayı unutmayın.**
                
${emoji.information} **nasıl kayıt olucağın hakkında bilgi almak için butonlardan birisine basıp seçimini yapıp basabilirsin.**
\`\`\`fix
Kayıt olduktan sonra kuralları okuduğunuzu kabul edeceğiz ve içeride yapılacak cezalandırma işlemlerini bunu göz önünde bulundurarak yapacağız. ${member.guild.name}\`\`\`` , components: [row]});
        } else {
            member.setNickname(config.bot.süpheliisim);
            member.roles.add(config.bot.süphelirolü);
            member.setNickname(config.register.JoinName);
            member.guild.channels.cache.get(config.bot.kayitkanali).send(`⚠️ ${member}, kullanıcısı sunucuya katıldı hesabı **${zaman2}** önce açıldığı için şüpheli.`)
        }
    }
    }
const { MessageEmbed } = require('discord.js');
const config = require('../../configs/config.json')
const emoji = require('../../configs/emojis.json')

module.exports = {
    name: "interactionCreate",
    async execute(interaction , client) {

        const member = await client.guilds.cache.get(config.bot.sunucuid).members.fetch(interaction.member.user.id)
        if (!member) return;


        const embed = new MessageEmbed()
        .setFooter({text: config.bot.footer})
        .setAuthor({name: interaction.guild.name , iconURL: interaction.guild.iconURL({dynamic: true})})
        .setColor('RANDOM')
        
        if (interaction.customId === "noobdycim2") {

            if (!member.roles.cache.has(config.bot.kayitsiz)) {
                await interaction.reply({ content: `${emoji.nbdy_red} bu butonu sadece kayıtsız rolüne sahip olanlar kullanabilir.`, ephemeral: true });
              return }

              interaction.reply({embeds: [embed.setDescription(`

${emoji.hosgldinn} first of all Hello! Welcome to TRCLAN

${emoji.information} If you're playing snay and agario, you can register for both. (don't forget to inform our authorities about this if you're going to be)

${emoji.information} Agario Required Level: 30 (you can still register to chat if your level is insufficient)

----------------------------------------------------------------
# ${emoji.agario} If you're here for Agario, here's what to do:

${emoji.nokta} <#1130226041772847277> You should send the SS of all the discord Servers you are on. (To make sure your not in another clan)

${emoji.nokta} <#1130226041772847277> You should upload your agario account Profile. (to see how many level you are)

${emoji.nokta} <#1130226041772847277> You should follow us on instagram and send your SS on this channel. (instagram: @trclann)

${emoji.nokta} After you must give your name, your age and nickname to an staff friend who is interested in you, and finally, you give voice confirmation and register.

----------------------------------------------------------------
# ${emoji.snay} If you're here for Snay, here's what to do:

${emoji.nokta} <#1130226041772847277> You should send the SS of all the discord Servers you are on. (To make sure your not in another clan) 

${emoji.nokta} <#1130226041772847277> You should follow us on instagram and send your SS on this channel. (instagram: @trclann)

${emoji.nokta} After you must give your name, your age and nickname to an staff friend who is interested in you, and finally, you give voice confirmation and register.

----------------------------------------------------------------
# 💬 If you came to chat, here's what to do:

${emoji.nokta} <#1130226041772847277> You should follow us on instagram and send your SS on this channel. (instagram: @trclann)

${emoji.nokta} After you must give your name, your age and nickname to an staff friend who is interested in you, and finally, you give voice confirmation and register.
----------------------------------------------------------------         
              
              `)] , ephemeral: true})

              
        }

        
        if (interaction.customId === "nobodyxd") {

            if (!member.roles.cache.has(config.bot.kayitsiz)) {
                await interaction.reply({ content: `${emoji.nbdy_red} bu butonu sadece kayıtsız rolüne sahip olanlar kullanabilir.`, ephemeral: true });
              return }


              interaction.reply({embeds: [embed.setDescription(`
 ${emoji.hosgldinn} öncelikle Merhaba! \`${interaction.guild.name}\` Sunucusuna hoşgeldin

${emoji.information} snay ve agario  oynuyorsanız ikisi için birdende kayıt olabilirsiniz. (yetkililerimizi bu konuda bilgilendirmeyi unutmayın eğer'ki olacaksanız) 

${emoji.information} Agario Gerekli Level: 30 (eğer leveliniz yetersiz'se Sohbet etmek için yinede kayıt olabilirsiniz) 

 ----------------------------------------------------------------
# ${emoji.agario} Agario için geldiysen yapman gerekenler: 

${emoji.nokta} <#1130226041772847277> kanalına bulunduğun bütün discord Sunucularının SS'sini atmalısın. (Başka bir clanda olmadığından emin olmak amaçlı)

${emoji.nokta} <#1130226041772847277> kanalına agario hesabının Profilini atmalısın. (kaç level olduğunu görmek için)

${emoji.nokta} <#1130226041772847277> kanalına bizi instagramdan takip etmelisin ve bu kanala SS'sini atmalısın. (instagram: @trclann)

${emoji.nokta} sonrasından ismini yaşını ve nickini senle ilgilenen bir yetkili arkadaşımıza vermelisin ve son olarak ses teyit verip kayıt oluyorsun.

----------------------------------------------------------------
# ${emoji.snay} Snay için geldiysen yapman gerekenler: 

${emoji.nokta} <#1130226041772847277> kanalına bulunduğun bütün discord Sunucularının SS'sini atmalısın. (Başka bir clanda olmadığından emin olmak amaçlı)

${emoji.nokta} <#1130226041772847277> kanalına bizi instagramdan takip etmelisin ve bu kanala SS'sini atmalısın. (instagram: @trclann)

${emoji.nokta} sonrasından ismini yaşını ve nickini senle ilgilenen bir yetkili arkadaşımıza vermelisin ve son olarak ses teyit verip kayıt oluyorsun.

----------------------------------------------------------------
# 💬 Sohbet için geldiysen yapman gerekenler:

${emoji.nokta} <#1130226041772847277> kanalına bizi instagramdan takip etmelisin ve bu kanala SS'sini atmalısın. (instagram: @trclann)

${emoji.nokta} sonrasından ismini yaşını ve nickini senle ilgilenen bir yetkili arkadaşımıza vermelisin ve son olarak ses teyit verip kayıt oluyorsun.
----------------------------------------------------------------
              `)] , ephemeral: true})
              
        }

    }
}

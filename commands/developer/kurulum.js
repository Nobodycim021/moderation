const { Database } = require("ark.db");
const db = new Database('../../configs/emojis.json');
const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const config = require('../../configs/config.json')

module.exports = {
    name: "kurulum",
    aliases: ['kanalkurulum' , "emojikurulum" , "nobodykurulum" , "emoji-kurulum" , "kanal-kurulum" , "emojikur" , "kanalkur" , "emoji-kur" , "kanal-kur" , "kur"],
    async execute(client, message, args) {
        if (message.guild === null) {
            return message.reply({ content: `Bu komutu sadece Sunucuda kullanabilirsin!`, ephemeral: true })
          } else if (!config.bot.BotDeveloper.includes(message.author.id)) {
            return message.reply({ content: ":x: Bot developerı olmadığın için kurulumu yapamazsın.", ephemeral: true })
          } else { 

      
            
        const row = new MessageActionRow()
        .addComponents(
        new MessageButton()
        .setCustomId("emoji")
        .setLabel("Emoji Kurulum")
        .setStyle("DANGER"),
        new MessageButton()
        .setCustomId('kanallar')
        .setLabel('Kanal Kurulum')
        .setStyle('DANGER')
        );
      
            let msg = await message.channel.send({components: [row]})
      
            var filter = (button) => button.user.id === message.author.id;
            const collector = msg.createMessageComponentCollector({ filter, componentType: 'BUTTON', max: 3, time: 60000 })
      
      
            collector.on("collect", async interaction => {

              if (interaction.customId === "kanallar") {
                await interaction.deferUpdate();
      
                const parent = await interaction.guild.channels.create("NOBODY LOG'S", {
                  type: 'GUILD_CATEGORY',
                  permissionOverwrites: [{
                    id: interaction.guild.id,
                    deny: ['VIEW_CHANNEL'],
                  }]
                });
                await interaction.guild.channels.create('kayıt_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });  
                await interaction.guild.channels.create('veri_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });  
                await interaction.guild.channels.create('isim_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });
                await interaction.guild.channels.create('rol_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });
                await interaction.guild.channels.create('kayıtsız_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });
                await interaction.guild.channels.create('isim_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });
                await interaction.guild.channels.create('command_log', {
                  type: 'GUILD_TEXT',
                  parent: parent.id
                });


                msg.reply({ content: `Log Kanallarının kurulumu başarıyla tamamlanmıştır.`, ephemeral: true })
      
              }


              if (interaction.customId === "emoji") {
                await interaction.deferUpdate();
      
                const emojis = [
                  { name: "nbdy_red", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439875170500629/red.gif" },
                  { name: "nbdy_onay", url: "https://cdn.discordapp.com/attachments/827439712834158622/827439878664486913/green.gif" },
                  { name: "kirmiziok", url: "https://cdn.discordapp.com/emojis/901441275381817426.gif?size=44" }, 
                  { name: "sifir", url: "https://cdn.discordapp.com/emojis/943146617043828788.gif?size=96&quality=lossless" },
                  { name: "bir", url: "https://cdn.discordapp.com/emojis/943147988375715861.gif?size=96&quality=lossless" },
                  { name: "revusome", url: "https://cdn.discordapp.com/attachments/1108329487990521931/1118702512480993330/iconclock.PNG" },
                  { name: "iki", url: "https://cdn.discordapp.com/emojis/943148029639278622.gif?size=96&quality=lossless" },
                  { name: "uc", url: "https://cdn.discordapp.com/emojis/943148080025460766.gif?size=96&quality=lossless" },
                  { name: "dort", url: "https://cdn.discordapp.com/emojis/943148147327262751.gif?size=96&quality=lossless" },
                  { name: "bes", url: "https://cdn.discordapp.com/emojis/943148227753033809.gif?size=96&quality=lossless" },
                  { name: "alti", url: "https://cdn.discordapp.com/emojis/943148271738707988.gif?size=96&quality=lossless" },
                  { name: "yedi", url: "https://cdn.discordapp.com/emojis/943148318165442700.gif?size=96&quality=lossless" },  
                  { name: "sekiz", url: "https://cdn.discordapp.com/emojis/943148360368537620.gif?size=96&quality=lossless" },
                  { name: "dokuz", url: "https://cdn.discordapp.com/emojis/943148402655510620.gif?size=96&quality=lossless" },
                  { name: "nbdy_unlem", url: "https://cdn.discordapp.com/emojis/771485096741830686.webp?size=44&quality=lossless" },
                  { name: "nokta", url: "https://cdn.discordapp.com/attachments/1108329487990521931/1121150563791421561/nokta.png" },
                  { name: "nbdy_man", url: "https://cdn.discordapp.com/emojis/938035479192948826.webp?size=44&quality=lossless" },
                  { name: "nbdy_girl", url: "https://cdn.discordapp.com/emojis/938035330152554517.webp?size=44&quality=lossless" },
                  { name: "member", url: "https://media.discordapp.net/attachments/1108329487990521931/1137157481869611128/Discord_Members.png" },
                  { name: "Jail", url: "https://cdn.discordapp.com/emojis/903566151727087686.png?size=96" },
                  { name: 'rules', url: 'https://media.discordapp.net/attachments/1108329487990521931/1137154956877635624/book_flip.gif' },
                  { name: 'information', url: 'https://media.discordapp.net/attachments/1108329487990521931/1137155275212722176/information.png' },
                  { name: 'hosgldinn', url: 'https://cdn.discordapp.com/attachments/1108329487990521931/1117680006668238930/peachhello.gif' },
                  { name: 'kalp', url: 'https://cdn.discordapp.com/attachments/1108329487990521931/1118697087484305488/havendevilheart.PNG' },
                  { name: 'agario', url: 'https://media.discordapp.net/attachments/1108329487990521931/1137147880734478451/Agario.png' },
                  { name: 'snay', url: 'https://media.discordapp.net/attachments/1108329487990521931/1137147904088342569/Snay_Logo.png' },


                ]

                emojis.forEach(async (x) => {
                    if (interaction.guild.emojis.cache.find((e) => x.name === e.name)) return db.set(x.name, interaction.guild.emojis.cache.find((e) => x.name === e.name).toString());
                    const emoji = await interaction.guild.emojis.create(x.url, x.name);
                    await db.set(x.name, emoji.toString()); 
                    msg.reply({ content: `${emoji} \`${x.name}\` adlı emoji yüklendi.`, ephemeral: true })
      
                  })
              }
        
            })
      
          }
        },
      };
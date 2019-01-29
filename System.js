const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`I'm Ready ${client.user.tag}!`);
});

client.on('message', function(msg) {
  var prefix = "!!";	
if(msg.content.startsWith (prefix  + 'serverinfo')) {
 let embed = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setThumbnail(msg.guild.iconURL)
 .setTitle(`Showing Details Of  **${msg.guild.name}*`)
 .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
 .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
 .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
 .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
 .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
 .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
 .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
 .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
 .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
 msg.channel.send({embed:embed});
}
});

client.on('message', async msg => {
  var prefix = "!!";
  let message = msg;
  if(msg.content.startsWith(prefix + "bans")){
    let bans = await msg.guild.fetchBans();
    let array = [];
    await bans.forEach(async user=>{
      array.push(user.id);
    });
    let page = 0;
    let pages = parseInt(`${array.length}`.slice(0,-1),10);
    const topembed = new Discord.RichEmbed()
      .setAuthor(`Banned Users`)
      .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
      .setColor('RANDOM')
      .setFooter(`Page ${page+1} of ${pages}`)
      .setTimestamp();
    message.channel.send(topembed).then(async topmessage=>{
      topmessage.react(`◀`).then(()=>{
        topmessage.react(`▶`).then(()=>{
          const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
          const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
          const backwards = topmessage.createReactionCollector(backwardsFilter, {time: 120000});
          const forwards = topmessage.createReactionCollector(forwardsFilter, {time: 120000});
          backwards.on("collect", r=>{
            r.remove(message.author);
            if(page <= 0) return;
            page--;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          })
          forwards.on("collect", r=>{
            r.remove(message.author);
            if(page === pages) return;
            page++;
            let newembed = new Discord.RichEmbed()
              .setAuthor(`Banned Users`)
              .addField(`الشخص`, `<@!${array[0]}>\n<@!${array[1]}>\n<@!${array[2]}>\n<@!${array[3]}>\n<@!${array[4]}>\n<@!${array[5]}>\n<@!${array[6]}>\n<@!${array[7]}>\n<@!${array[8]}>\n<@!${array[9]}>\n<@!${array[10]}>`, true)
              .setColor("RANDOM")
              .setFooter(`Page ${page+1} of ${pages}`)
              .setTimestamp()
            topmessage.edit(newembed);
          });
        });
      });
    });
  };
});

client.login(process.env.BOT_TOKEN);

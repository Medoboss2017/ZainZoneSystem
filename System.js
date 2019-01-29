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

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '539941707861458944').setName("W");
client.channels.find('id', '539941707861458944').setName("We");
client.channels.find('id', '539941707861458944').setName("Wel");
client.channels.find('id', '539941707861458944').setName("Welc");
client.channels.find('id', '539941707861458944').setName("Welco");
client.channels.find('id', '539941707861458944').setName("Welcom");
client.channels.find('id', '539941707861458944').setName("Welcome");
client.channels.find('id', '539941707861458944').setName("Welcome T");
client.channels.find('id', '539941707861458944').setName("Welcome To");
client.channels.find('id', '539941707861458944').setName("Welcome To Z");
client.channels.find('id', '539941707861458944').setName("Welcome To Za");
client.channels.find('id', '539941707861458944').setName("Welcome To Zai");
client.channels.find('id', '539941707861458944').setName("Welcome To Zain");
client.channels.find('id', '539941707861458944').setName("Welcome To ZainZ");
client.channels.find('id', '539941707861458944').setName("Welcome To ZainZo");
client.channels.find('id', '539941707861458944').setName("Welcome To ZainZon");
client.channels.find('id', '539941707861458944').setName("Welcome To ZainZone");
  }, 6000);
});

client.login(process.env.BOT_TOKEN);

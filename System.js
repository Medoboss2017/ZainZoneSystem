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

client.on('message' , message => {
  if (message.author.dark) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "!!ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
      /*let banlog = client.channels.find("name", "ban-log");
  if(!banlog) return message.reply("I've detected that this server doesn't have a ban-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الباند**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني ابند شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);
  message.channel.sendMessage("**لقد تم اعطاء الباند الي شخص بنجاح** ✅");
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
  }, 5000);
});

client.login(process.env.BOT_TOKEN);

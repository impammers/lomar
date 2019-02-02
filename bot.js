const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {

  var prefix = "*";
        if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "SkyBot.";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`**☑ | Done ... The Broadcast Message Has Been Sent For __${message.guild.members.size}__ Members**`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

var bc = new
 Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('Broadcast')
 .addField('سيرفر', message.guild.name)
 .addField('المرسل', message.author.username)
 .addField('الرسالة', args)
 .setThumbnail(message.author.avatarURL)
 .setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
client.on('message', function(msg) {
  if(msg.content.startsWith ('$server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});

client.on('message', message =>{
  let args = message.content.split(' ');
  let prefix = '$'; 
  
  if(args[0] === `${prefix}avatar`){
      let mentions = message.mentions.members.first()
      if(!mentions) {
        let sicon = message.author.avatarURL
        let embed = new Discord.RichEmbed()
        .setImage(message.author.avatarURL)
        .setColor("#f7abab") 
        .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
        message.channel.send({embed})
      } else {
        let sicon = mentions.user.avatarURL
        let embed = new Discord.RichEmbed()
        .setColor("#f7abab")
        .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
        .setImage(sicon)
        message.channel.send({embed})
      }
  };
});

client.on("message", msg => {
if(msg.content === '$' + "id") {
    const embed = new Discord.RichEmbed();
embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
        .addField("🆔| الاي دي :", `${msg.author.id}`, true)
        .setColor("RANDOM")
        .setFooter(msg.author.username , msg.author.avatarURL)
        .setThumbnail(`${msg.author.avatarURL}`)
        .setTimestamp()
        .setURL(`${msg.author.avatarURL}`)
        .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
        .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
        .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
        .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
        .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
    msg.channel.send({embed: embed})
}
});


client.on('message', async message =>{
  if (message.author.boss) return;
    var prefix = "$";

if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);
    if (command == "mute") {
        if (!message.channel.guild) return;
        if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
        let user = message.mentions.users.first();
        let muteRole = message.guild.roles.find("name", "Muted");
        if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
        if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
        let reason = message.content.split(" ").slice(2).join(" ");
        message.guild.member(user).addRole(muteRole);
        const muteembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(`Muted!`, user.displayAvatarURL)
        .setThumbnail(user.displayAvatarURL)
        .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
        .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
        .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
        .addField("User", user, true)
        message.channel.send({embed : muteembed});
        var muteembeddm = new Discord.RichEmbed()
        .setAuthor(`Muted!`, user.displayAvatarURL)
        .setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
        .setFooter(`في سيرفر : ${message.guild.name}`)
        .setColor("RANDOM")
    user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "$"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
client.on('message', async message => {
  if(message.content.includes('discord.gg')){ 
      if(message.member.hasPermission("MANAGE_GUILD")) return;
if(!message.channel.guild) return;
message.delete()
var command = message.content.split(" ")[0];
let muterole = message.guild.roles.find(`name`, "Muted");
if(!muterole){
try{
muterole = await message.guild.createRole({
name: "Muted",
color: "#9c9c9c",
permissions:[]
})
message.guild.channels.forEach(async (channel, id) => {
await channel.overwritePermissions(muterole, {
  SEND_MESSAGES: false,
  ADD_REACTIONS: false
});
});
}catch(e){
console.log(e.stack);
}
}
 if(!message.channel.guild) return message.reply('** This command only for servers**');
message.member.addRole(muterole);
const embed500 = new Discord.RichEmbed()
.setTitle("ميوت بسبب نشر")
  .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
  .setColor("c91616")
  .setThumbnail(`${message.author.avatarURL}`)
  .setAuthor(message.author.username, message.author.avatarURL)
.setFooter(`${message.guild.name} `)
message.channel.send(embed500)
message.author.send('**`لقد تم إعطاء ميوت بسبب النشر إذا كان عن طريق الخطا فتكلم مع الإدارة`**');

    
    
    
    }
})
client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
 client.on('message', msg => {
  var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "$clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on('message', message => {
  if (!message.channel.guild) return;
if(message.content =='$count')
var IzRo = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL)
.setTitle(':tulip:| Members info')
.addBlankField(true)
.addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
message.channel.send(IzRo);
});


client.on("message", async message => {
  if(!message.channel.guild) return;
  var prefix = "$";
if(message.content.startsWith(prefix + 'invites')) {
var nul = 0
var guild = message.guild
await guild.fetchInvites()
  .then(invites => {
   invites.forEach(invite => {
      if (invite.inviter === message.author) {
           nul+=invite.uses
          }
      });
  });
if (nul > 0) {
    console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
    var embed = new Discord.RichEmbed()
        .setColor("#000000")
          .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                message.channel.send({ embed: embed });
            return;
          } else {
             var embed = new Discord.RichEmbed()
              .setColor("#000000")
              .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

             message.channel.send({ embed: embed });
              return;
          }
}
if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});
client.on('message', message => {
  if (!message.channel.guild) return;
if(message.content =='$members')
var kayan = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setFooter(message.author.username, message.author.avatarURL) 
.setTitle('🌷| Members info')
.addBlankField(true)
.addField('📗| Online',
`${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
.addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
.addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
.addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
.addField('➡| Server Members',`${message.guild.memberCount}`)
message.channel.send(kayan);

});

client.on("message", message => {
  var prefix = "$";
if (message.content === "$help1") {
   message.channel.send(' ');
const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setDescription(`
    __**Administrative Commands**__
  **  『$move @user / لسحب الشخص الى روومك』
    『$bc / رسالة جماعية الى كل اعضاء السيرفر』  
    『$clear / مسح الشات』
    『$mute @user <reason> / اعطاء العضو ميوت لازم رتبة <Muted>』
    『$unmute @user / لفك الميوت عن الشخص 』
    『$kick @user <reason> / طرد الشخص من السيرفر』
    『$ban @user <reason> / حضر الشخص من السيرفر』
    
   
   
   
`)
 message.author.sendEmbed(embed)
  
 }
 });   
 client.on('message' , message => {
  var prefix = "$"
  
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "contact")) {
  if (!message.channel.guild) return;
  
  
  
  let args = message.content.split(" ").slice(1).join(" ");
  
  
  
  client.users.get("467777208732352512","467777208732352512").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setDescription(':mailbox_with_mail: تم ارسال الرسالة الى صاحب البوت بنجاح')
       .setThumbnail(message.author.avatarURL)
       .setFooter("By : .iiMosTaFaYT#1001")
                                                  
  
  message.channel.send(embed);
  
  
  }
  

  });
  
  
  client.on('message', message => { 
    var prefix = ("$")
    if (message.content.startsWith("$bot")) { 
    message.channel.send({ 
        embed: new Discord.RichEmbed() 
            .setAuthor(client.user.username,client.user.avatarURL) 
            .setThumbnail(client.user.avatarURL) 
            .setColor('RANDOM') 
            .setTitle('Info SkyBot.') 
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) 
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) 
            .addField('**Servers**', [client.guilds.size], true) 
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) 
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) 
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) 
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) 
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) 
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) 
            .addField('**Arch**' , `[ ${process.arch} ]` , true) 
            .addField('**Platform**' , `[ ${process.platform} ]` , true) 
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) 
                  .addField('**My Language**' , `[ Java Script ]` , true) 
                  .setFooter
    }) 
} 
}); 
client.on("message", message => {
  var prefix = "$";
if (message.content === "$help") {
   message.channel.send('');
const embed = new Discord.RichEmbed() 
    .setColor("RANDOM")
    .setDescription(`
    __**General Commands**__
    **『$server / يعرض لك معلومات عن السيرفر』
    『$bot / يعرض لك كل معلومات البوت』
    『$fm / عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
    『$id /  معلومات عنك』
    『$allbots /  لعرض جميع البوتات الي بالسيرفر』
    『$savatar / صورة السيرفر』
    『$avatar / صورتك او صورة الي تمنشنة』
    『$inv / لدعوة البوت الى سيرفرك』
    『$support / سيرفر الدعم』
    『$contact / ارسال اقتراح او لمراسلة صاحب البوت』**
    رابط
    $cuttweet
    
    
`)
 message.author.sendEmbed(embed)
  
 }
 }); 

 client.on("message", async message => {
  var prefix = "$";
  var aoasm =[
  {q:"ما عاصمة **المغرب**",a:"الرباط"},
  {q:"ما عاصمة **افغانستان**",a:"كبل"},
  {q:"ما عاصمة ** البانيا**",a:"تيران"},
  {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
  {q:"ما عاصمة ** **",a:"الجزائر"},
  {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
  {q:"ما عاصمة **انجولا**",a:"لواندا"},
  {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
  {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
  {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
  {q:"ما عاصمة ** مصر**",a:"القاهرة"},
  {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
  {q:"ما عاصمة **النمسا**",a:"فيينا"},
  {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
  {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
  {q:"ما عاصمة **البحرين**",a:"المنامة"},
  {q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
  {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
  {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
  {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
  {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
  {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
  {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
  {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
  {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
  {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
  {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
  {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
  {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
  {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
  {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
  {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
  {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
  {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
  {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
  {q:"ما عاصمة **تشاد **",a:"نجامينا"},
  {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
  {q:"ما عاصمة **الصين **",a:"بكين"},
  {q:"ما عاصمة ** **",a:"مورونى"},
  {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
  {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
  {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
  {q:"ما عاصمة ** كوبا**",a:"هافانا"},
  {q:"ما عاصمة ** قبرص**",a:" "},
  {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
  {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
  {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
  {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
  {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
  {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
  {q:"ما عاصمة **قطر  **",a:"الدوحة"},
  {q:"ما عاصمة **السعودية  **",a:"الرياض"},
  {q:"ما عاصمة **سوريا  **",a:"دمشق"},
  {q:"ما عاصمة **تركيا  **",a:"انقرة"},
  {q:"ما عاصمة **العراق  **",a:"بغداد"},
  {q:"ما عاصمة **البنان  **",a:"بيروت"},
  {q:"ما عاصمة **فلسطين  **",a:"القدس"},
  {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
  {q:"ما عاصمة **الاردن  **",a:"عمان"},    
  {q:"ما عاصمة **السودان  **",a:"خرطوم"},
  {q:"ما عاصمة **الما��يا  **",a:"برلين"},
  {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
  {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
  ];
  if(message.content == prefix+"عواصم"){
      if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
      UserBlocked.add(message.guild.id)
      var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
      let embed = new Discord.RichEmbed()
      .setTitle('سؤال عواصم')
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor("RANDOM")
      .setDescription(ask.q);
      message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
      const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
          UserBlocked.delete(message.guild.id)
      msgs.forEach(result => {
         if(result.author.id == client.user.id) return;
         if(result.content == "عاصمة") return
         if(result.content == ask.a){
           let embeds = new Discord.RichEmbed()
           .setTitle(':white_check_mark: اجابة صحيحة')
           .setAuthor(message.author.username, message.author.avatarURL)
           .setColor("RANDOM")
           .setDescription(`**${result.author.username}** الإجابة صحيحة`);
              message.channel.sendEmbed(embeds);                return;
         } else {
  
                                var embedx = new Discord.RichEmbed()
              .setTitle(':x:خطاء')
              .setAuthor(message.author.username, message.author.avatarURL)
              .setColor("RANDOM")
              .setDescription(`**${result.author.username}** الإجابة خاطئة`);
              message.channel.sendEmbed(embedx);
         }
   });
  }
  });
  var fkk =[
    {f:"فكك بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
    {f:"فكك باص",k:"ب ا ص"},
    {f:"فكك عربة ",k:"ع ر ب ة"},
    {f:"فكك سيارة",k:"س ي ا ر ة"},
    {f:"فكك سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
    {f:"فكك العنود ",k:"ا ل ع ن و د"},
    {f:"فكك المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
    {f:"فكك دحوم",k:"د ح و م"},
    {f:"فكك اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
    {f:"فكك الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
    {f:"فكك كازخستان ",k:"ك ا ز خ س ت ا ن"},
    {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
    {f:"فكك استونيا ",k:"ا س ت و ن ي ا"},
    {f:"فكك لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
    {f:"فكك زنديق  ",k:"ز ن د ي ق"},
    {f:"فكك استراليا ",k:"ا س ت ر ا ل ي ا"},
    {f:"فكك سوريا ",k:"س و ر ي ا"},
    {f:"فكك الاردن ",k:"ا ل ا ر د ن"},
    {f:"فكك طماطم ",k:"ط م ا ط م"},
    {f:"فكك سارة ",k:"س ا ر ة"},
    {f:"فكك دراجون ",k:"د ر ا ج و ن"},
    {f:"فكك سيرفر ",k:"س ي ر ف ر"},
    {n:"فكك الجبل",m:"ا ل ج ب ل"},
    {n:"فكك هضبة",m:"ه ض ب ة"},
    {n:"فكك خواطر",m:"خ و ا ط ر"},
    {n:"فكك ارحبو",m:"ا ر ح ب و"},
    {n:"فكك اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
    {n:"فكك احبك",m:"ا ح ب ك"},
    {n:"فكك سبرايز",m:"س ب ر ا ي ز"},
    {n:"فكك ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},
    {n:"فكك الو محد",m:"ا ل و م ح م د"},


];


client.on("message", async message => {
if(message.content == prefix+"$فكك"){
    if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
    UserBlocked.add(message.guild.id)
    var ask = fkk[Math.floor(Math.random() * fkk.length)];
    let embed = new Discord.RichEmbed()
    .setTitle('لعبة فكك')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setDescription(ask.f);
    message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
    const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
        UserBlocked.delete(message.guild.id)
    msgs.forEach(result => {
       if(result.author.id == client.user.id) return;
       if(result.content == "فكك") return
       if(result.content == ask.k){

         let embeds = new Discord.RichEmbed()
         .setTitle(':white_check_mark: اجابة صحيحة')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة صحيحة`);
            message.channel.sendEmbed(embeds);                return;
       } else {

                           var embedx = new Discord.RichEmbed()
         .setTitle(':x:خطاء')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(`**${result.author.username}** الإجابة خاطئة`);

            message.channel.sendEmbed(embedx);
       }
 });
}
});
const zead = [
  '*** انا اسمي مريم ***',
  '*** مرحباَ ماهو اسمك ؟ ***',
  `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
  '*** هل تود مساعدتي ؟ ***',
  '*** لماذا هل انت قاسي القلب ؟ ***',
  '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
  '*** ابتعد عني قليل انني متعبة ***',
  '*** هل انت نادم على ماقلت ؟ ***',
  '*** هل تود مساعدتي ؟ ***',
  '*** واو اشكرك انك شخصاَ رائع ! ***',
  '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
  '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
  '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
  '*** هيا اذاَ ***',
  '*** اود ان اسئلك سؤال ونحن في الطريق ***',
  '*** هل تراني فتاة لطيفة ام مخيفة ***',
  '*** اشكرك !  ***',
  '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
  '*** هل انت جاهز ؟ ***',
  '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
  '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
  '*** انا لست كاذبة صدقني***',
  '*** لماذا ارى في عينيك الخوف ؟ ***',
  '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
  '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
  '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
  '*** لماذا لم تدخل الغرفة ؟ ***',
  '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
  '*** لن تخرج حتى اعود لك بعد قليل ***',
  '*** المفتاح معك ! اكتب .مريم  ***',
  '*** مفتاح احمر , هل حصلت عليه ؟ ***',
  '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
  '*** مفتاح اسود . هل حصلت عليه ؟ ***',
  '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
  '*** لقد عادت من جديد الى المنزل ***',
  '*** لا تصدر اي صوت ! ***',
  '*** مريم : لقد عدت ***',
  '*** مريم : يا ايها المخادع اين انت ***',
  '*** مريم : اعلم انك هنا في المنزل ***',
  '*** مريم : ماذا تريد ان تسمع ***',
  '*** احد ما خرج من المنزل ***',
  '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
client.on('message', message => {
if (message.content.startsWith('$مريم')) {
 var mariam= new Discord.RichEmbed()
 .setTitle("لعبة مريم ..")
 .setColor('RANDOM')
 .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
 .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
  message.channel.sendEmbed(mariam);
 }
});

var Za7f = [
  "**صورة وجهك او رجلك او خشمك او يدك**.",
  "**اصدر اي صوت يطلبه منك الاعبين**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
  "**ذي المرة لك لا تعيدها**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**صور اي شيء يطلبه منك الاعبين**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
  "**سو مشهد تمثيلي عن مصرية بتولد**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**ذي المرة لك لا تعيدها**.",
  "**تعطي اي شخص 5 الاف كرديت**.",
  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
  "**اتصل على امك و قول لها انك تحبها :heart:**.",
  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
  "**قل لواحد ماتعرفه عطني كف**.",
  "**منشن الجميع وقل انا اكرهكم**.",
  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
  "**روح المطبخ و اكسر صحن او كوب**.",
  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",
  "**قول قصيدة **.",
  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
  "**اول واحد تشوفه عطه كف**.",
  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
  "**تاخذ عقابين**.",
  "**قول اسم امك افتخر بأسم امك**.",
  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
  "**����تصل على الوالده  و تقول لها  احب وحده**.",
    "**تتصل على شرطي تقول له عندكم مطافي**.",
    "**خلاص سامحتك**.",
    "** تصيح في الشارع انا  مجنوون**.",
    "** تروح عند شخص تقول له احبك**.",

];

client.on('message', message => {
 if (message.content.startsWith("$عقاب")) {
              if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
 .setThumbnail(message.author.avatarURL) 
.addField('Speed BOT' ,
`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
message.channel.sendEmbed(embed);
console.log('[38ab] Send By: ' + message.author.username)
  }
});
client.on('message', message => {
  if (message.author.bot) return;
 if (message.content.startsWith("رابط")) {
     message.channel.createInvite({
     thing: true,
     maxUses: 1,
     maxAge: 3600,
 }).then(invite =>
   message.author.sendMessage(invite.url)
 )
 const embed = new Discord.RichEmbed()
     .setColor("RANDOM")
       .setDescription(" تم أرسال الرابط برسالة خاصة ")
        .setAuthor(client.user.username, client.user.avatarURL)
              .setAuthor(client.user.username, client.user.avatarURL)
             .setFooter('طلب بواسطة: ' + message.author.tag)

   message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
           const Embed11 = new Discord.RichEmbed()
     .setColor("RANDOM")
     
 .setDescription(" مدة الرابط : ساعه  عدد استخدامات الرابط : 1 ")
   message.author.sendEmbed(Embed11)
 }
});
client.on('message', msg => {
  var prefix =("$")
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);
 
    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});
client.on("ready", async  => {
  setInterval(function(){
  client.channels.find('id', '539802325057798144').setName("W");
  client.channels.find('id', '539802325057798144').setName("We");
  client.channels.find('id', '539802325057798144').setName("Wel");
  client.channels.find('id', '539802325057798144').setName("Welc");
  client.channels.find('id', '539802325057798144').setName("Welco");
  client.channels.find('id', '539802325057798144').setName("Welcom");
  client.channels.find('id', '539802325057798144').setName("Welcome");
  client.channels.find('id', '539802325057798144').setName("Welcome T");
  client.channels.find('id', '539802325057798144').setName("Welcome To");
  client.channels.find('id', '539802325057798144').setName("Welcome To L");
  client.channels.find('id', '539802325057798144').setName("Welcome To LE");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEG");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGE");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGEN ");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDR ");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRA");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY K");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY KE");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY KEL");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY KELL");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY KELLE");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY KELLER");
  client.channels.find('id', '539802325057798144').setName("Welcome To LEGENDRAY KILLERS");
    }, 4000);
  });

  const cuttweet = [
    'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
    'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
    'كت تويت | الحرية لـ ... ؟',
    'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
    'كت تويت ‏| كلمة للصُداع؟',
    'كت تويت ‏| ما الشيء الذي يُفارقك؟',
    'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
    'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
    'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
    'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
    '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
    'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
    '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
    '‏كت تويت | وش يفسد الصداقة؟',
    '‏كت تويت | شخص لاترفض له طلبا ؟',
    '‏كت تويت | كم مره خسرت شخص تحبه؟.',
    '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
    '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
    '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
    '‏كت تويت |أقوى كذبة مشت عليك ؟',
    '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
    'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
    '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
    '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
    '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
    '‏كت تويت | مطلبك الوحيد الحين ؟',
    '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
  if (message.content.startsWith("$cuttweet")) {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
 var embed = new Discord.RichEmbed()
 .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL)
.addField('لعبه كت تويت' ,
 `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
 message.channel.sendEmbed(embed);
 console.log('[id] Send By: ' + message.author.username)
   }
});

client.on('ready', () => {

  client.user.setActivity("$help | BOT CLAN LK DZ BY/POWER DZ YT",{type: 'Streaming'})

});
client.on("message", message => {
var prefix = ("$")
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
client.on('message', function(message) {
  if (message.channel.type === "dm") {
      if (message.author.id === client.user.id) return;
      var Dark = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setTitle('``! لقد تلقيت رساله جديدة في الخاص !``')
      .setThumbnail(`${message.author.avatarURL}`)
      .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
      .setFooter(`From ${message.author.tag} (${message.author.presence.status.toUpperCase()})`)
  client.channels.get("541347705910329345").send({embed:Dark});
  }
});
var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 3 , delay: 3000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 2, delay: 3000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 3, delay: 3000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 3, delay: 3000}
  ]
}
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(entry.id)) uses += 1;
          });
          setTimeout(() => {
            client.captures.push(index);
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "اسم الروم");
  log.send(limit.user.username+"\ try to hack !! @everyone !!");
  limit.guild.owner.send(limit.user.username+"\ حاول التهكير الحقق (!)")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});
var guilds = {};
client.on('message',async message => {
 var prefix2 = '$';//البرفكس
  if(message.content.startsWith(prefix2 + "تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`تقديم`, "تقديم");
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| من فضلك اكتب عمرك  الأن... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| من فضلك اكتب من اي بلد انت الأن... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**عمره**]:
${boi}
 
[**من بلد**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
    client.on('guildCreate', guild => {
   
      client.channels.get("539811746714484756")
    const embed = new Discord.RichEmbed()
       .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
       .setDescription(`**
    Server name: __${guild.name}__
    Server id: __${guild.id}__
    Server owner: __${guild.owner}__
    Member Count: __${guild.memberCount}__
    Servers Counter : __${client.guilds.size}__**`)
             .setColor("#f3ae10")
             .addField("New Server!")
             .setFooter('اسم بوتك' , client.user.avatarURL)
               client.channels.get("539811746714484756").send({embed}); //Sup
    }
     
    );
    
    client.on('guildDelete', guild => {
      client.channels.get("539811746714484756")
    const embed = new Discord.RichEmbed()
       .setAuthor(`للاسف بوتك خرج من السيرفر ❎`)
       .setDescription(`**
    Server name: __${guild.name}__
    Server id: __${guild.id}__
    Server owner: __${guild.owner}__
    Members Count: __${guild.memberCount}__
    Servers Counter : __${client.guilds.size}__**`)
             .setColor("#f3ae10")
             .setFooter('اسم بوتك' , client.user.avatarURL)
               client.channels.get("539811746714484756").send({embed});
    }
     
    );
    client.on('messageDelete', message => {
      if(message.author.bot) return;
      if(message.channel.type === 'dm') return;
      if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
   
      var logChannel = message.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      let messageDelete = new Discord.RichEmbed()
      .setTitle('**[MESSAGE DELETE]**')
      .setColor('RED')
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
      .setTimestamp()
      .setFooter(message.guild.name, message.guild.iconURL)
   
      logChannel.send(messageDelete);
  });
  client.on('messageUpdate', (oldMessage, newMessage) => {
   
      if(oldMessage.author.bot) return;
      if(!oldMessage.channel.type === 'dm') return;
      if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
   
      var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      if(oldMessage.content.startsWith('https://')) return;
   
      let messageUpdate = new Discord.RichEmbed()
      .setTitle('**[MESSAGE EDIT]**')
      .setThumbnail(oldMessage.author.avatarURL)
      .setColor('BLUE')
      .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
      .setTimestamp()
      .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
   
      logChannel.send(messageUpdate);
  });
   
   
  // Roles Logs
  client.on('roleCreate', role => {
   
      if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = role.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      role.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          let roleCreate = new Discord.RichEmbed()
          .setTitle('**[ROLE CREATE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(role.guild.name, role.guild.iconURL)
   
          logChannel.send(roleCreate);
      })
  });
  client.on('roleDelete', role => {
   
      if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = role.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      role.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          let roleDelete = new Discord.RichEmbed()
          .setTitle('**[ROLE DELETE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('RED')
          .setTimestamp()
          .setFooter(role.guild.name, role.guild.iconURL)
   
          logChannel.send(roleDelete);
      })
  });
  client.on('roleUpdate', (oldRole, newRole) => {
   
      if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      oldRole.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          if(oldRole.name !== newRole.name) {
              let roleUpdateName = new Discord.RichEmbed()
              .setTitle('**[ROLE NAME UPDATE]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
   
              logChannel.send(roleUpdateName);
          }
          if(oldRole.hexColor !== newRole.hexColor) {
              if(oldRole.hexColor === '#000000') {
                  var oldColor = '`Default`';
              }else {
                  var oldColor = oldRole.hexColor;
              }
              if(newRole.hexColor === '#000000') {
                  var newColor = '`Default`';
              }else {
                  var newColor = newRole.hexColor;
              }
              let roleUpdateColor = new Discord.RichEmbed()
              .setTitle('**[ROLE COLOR UPDATE]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
   
              logChannel.send(roleUpdateColor);
          }
          if(oldRole.permissions !== newRole.permissions) {
              let roleUpdate = new Discord.RichEmbed()
              .setTitle('**[UPDATE ROLE PERMISSIONS]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
             
              logChannel.send(roleUpdate)
          }
      })
  });
   
   
  // Channels Log
  client.on('channelCreate', channel => {
   
      if(!channel.guild) return;
      if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = channel.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      if(channel.type === 'text') {
          var roomType = 'Text';
      }else
      if(channel.type === 'voice') {
          var roomType = 'Voice';
      }else
      if(channel.type === 'category') {
          var roomType = 'Category';
      }
   
      channel.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          let channelCreate = new Discord.RichEmbed()
          .setTitle('**[CHANNEL CREATE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('GREEN')
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL)
   
          logChannel.send(channelCreate);
      })
  });
  client.on('channelDelete', channel => {
      if(!channel.guild) return;
      if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = channel.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      if(channel.type === 'text') {
          var roomType = 'Text';
      }else
      if(channel.type === 'voice') {
          var roomType = 'Voice';
      }else
      if(channel.type === 'category') {
          var roomType = 'Category';
      }
   
      channel.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          let channelDelete = new Discord.RichEmbed()
          .setTitle('**[CHANNEL DELETE]**')
          .setThumbnail(userAvatar)
          .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setColor('RED')
          .setTimestamp()
          .setFooter(channel.guild.name, channel.guild.iconURL)
   
          logChannel.send(channelDelete);
      })
  });
  client.on('channelUpdate', (oldChannel, newChannel) => {
      if(!oldChannel.guild) return;
   
      var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      if(oldChannel.type === 'text') {
          var channelType = 'Text';
      }else
      if(oldChannel.type === 'voice') {
          var channelType = 'Voice';
      }else
      if(oldChannel.type === 'category') {
          var channelType = 'Category';
      }
   
      oldChannel.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          if(oldChannel.name !== newChannel.name) {
              let newName = new Discord.RichEmbed()
              .setTitle('**[CHANNEL EDIT]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
   
              logChannel.send(newName);
          }
          if(oldChannel.topic !== newChannel.topic) {
              let newTopic = new Discord.RichEmbed()
              .setTitle('**[CHANNEL EDIT]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
   
              logChannel.send(newTopic);
          }
      })
  });
   
   
  // Guild Logs
  client.on('guildBanAdd', (guild, user) => {
   
      if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          if(userID === client.user.id) return;
   
          let banInfo = new Discord.RichEmbed()
          .setTitle('**[BANNED]**')
          .setThumbnail(userAvatar)
          .setColor('DARK_RED')
          .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(guild.name, guild.iconURL)
   
          logChannel.send(banInfo);
      })
  });
  client.on('guildBanRemove', (guild, user) => {
      if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          let unBanInfo = new Discord.RichEmbed()
          .setTitle('**[UNBANNED]**')
          .setThumbnail(userAvatar)
          .setColor('GREEN')
          .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
          .setTimestamp()
          .setFooter(guild.name, guild.iconURL)
   
          logChannel.send(unBanInfo);
      })
  });
  client.on('guildUpdate', (oldGuild, newGuild) => {
   
      if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
      if(!logChannel) return;
   
      oldGuild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
          if(oldGuild.name !== newGuild.name) {
              let guildName = new Discord.RichEmbed()
              .setTitle('**[CHANGE GUILD NAME]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(newGuild.name, oldGuild.iconURL)
   
              logChannel.send(guildName)
          }
          if(oldGuild.region !== newGuild.region) {
              let guildRegion = new Discord.RichEmbed()
              .setTitle('**[CHANGE GUILD REGION]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldGuild.name, oldGuild.iconURL)
   
              logChannel.send(guildRegion);
          }
          if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
              if(oldGuild.verificationLevel === 0) {
                  var oldVerLvl = 'Very Easy';
              }else
              if(oldGuild.verificationLevel === 1) {
                  var oldVerLvl = 'Easy';
              }else
              if(oldGuild.verificationLevel === 2) {
                  var oldVerLvl = 'Medium';
              }else
              if(oldGuild.verificationLevel === 3) {
                  var oldVerLvl = 'Hard';
              }else
              if(oldGuild.verificationLevel === 4) {
                  var oldVerLvl = 'Very Hard';
              }
   
              if(newGuild.verificationLevel === 0) {
                  var newVerLvl = 'Very Easy';
              }else
              if(newGuild.verificationLevel === 1) {
                  var newVerLvl = 'Easy';
              }else
              if(newGuild.verificationLevel === 2) {
                  var newVerLvl = 'Medium';
              }else
              if(newGuild.verificationLevel === 3) {
                  var newVerLvl = 'Hard';
              }else
              if(newGuild.verificationLevel === 4) {
                  var newVerLvl = 'Very Hard';
              }
   
              let verLog = new Discord.RichEmbed()
              .setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldGuild.name, oldGuild.iconURL)
   
              logChannel.send(verLog);
          }
      })
  });
  client.on('guildMemberUpdate', (oldMember, newMember) => {
      var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      oldMember.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userAvatar = logs.entries.first().executor.avatarURL;
          var userTag = logs.entries.first().executor.tag;
   
          if(oldMember.nickname !== newMember.nickname) {
              if(oldMember.nickname === null) {
                  var oldNM = '\`\`اسمه الاصلي\`\`';
              }else {
                  var oldNM = oldMember.nickname;
              }
              if(newMember.nickname === null) {
                  var newNM = '\`\`اسمه الاصلي\`\`';
              }else {
                  var newNM = newMember.nickname;
              }
   
              let updateNickname = new Discord.RichEmbed()
              .setTitle('**[UPDATE MEMBER NICKNAME]**')
              .setThumbnail(userAvatar)
              .setColor('BLUE')
              .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
   
              logChannel.send(updateNickname);
          }
          if(oldMember.roles.size < newMember.roles.size) {
              let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
   
              let roleAdded = new Discord.RichEmbed()
              .setTitle('**[ADDED ROLE TO MEMBER]**')
              .setThumbnail(oldMember.guild.iconURL)
              .setColor('GREEN')
              .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
   
              logChannel.send(roleAdded);
          }
          if(oldMember.roles.size > newMember.roles.size) {
              let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
   
              let roleRemoved = new Discord.RichEmbed()
              .setTitle('**[REMOVED ROLE FROM MEMBER]**')
              .setThumbnail(oldMember.guild.iconURL)
              .setColor('RED')
              .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
   
              logChannel.send(roleRemoved);
          }
      })
      if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
          let newOwner = new Discord.RichEmbed()
          .setTitle('**[UPDATE GUILD OWNER]**')
          .setThumbnail(oldMember.guild.iconURL)
          .setColor('GREEN')
          .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
          .setTimestamp()
          .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
   
          logChannel.send(newOwner);
      }
  });
  client.on('guildMemberAdd', member => {
    var logChannel = member.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
   
    let newMember = new Discord.RichEmbed()
    .setTitle('**[NEW MEMBER ADDED]**')
    .setThumbnail(member.user.avatarURL)
    .setColor('GREEN')
    .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL)
   
    logChannel.send(newMember);
  });
  function Days(date) {
      let now = new Date();
      let diff = now.getTime() - date.getTime();
      let days = Math.floor(diff / 86400000);
      return days + (days == 1 ? " day" : " days") + " ago";
  }
  client.on('guildMemberRemove', member => {
    var logChannel = member.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
   
    let leaveMember = new Discord.RichEmbed()
    .setTitle('**[LEAVE MEMBER]**')
    .setThumbnail(member.user.avatarURL)
    .setColor('GREEN')
    .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
    .setTimestamp()
    .setFooter(member.user.tag, member.user.avatarURL)
   
    logChannel.send(leaveMember);
  });
   
   
  // Voice Logs
  client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
   
      if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
      if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
   
      var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
      if(!logChannel) return;
   
      voiceOld.guild.fetchAuditLogs().then(logs => {
          var userID = logs.entries.first().executor.id;
          var userTag = logs.entries.first().executor.tag;
          var userAvatar = logs.entries.first().executor.avatarURL;
   
  // Server Muted Voice
          if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
              let serverMutev = new Discord.RichEmbed()
              .setTitle('**[VOICE MUTE]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
              .setColor('RED')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
   
              logChannel.send(serverMutev);
          }
  // Server UnMuted Voice
          if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
              let serverUnmutev = new Discord.RichEmbed()
              .setTitle('**[VOICE UNMUTE]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
              .setColor('GREEN')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
   
              logChannel.send(serverUnmutev);
          }
  // Server Deafen Voice
          if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
              let serverDeafv = new Discord.RichEmbed()
              .setTitle('**[VOICE DEAFEN]**')
              .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
              .setColor('RED')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
   
              logChannel.send(serverDeafv);
          }
  // Server UnDeafen Voice
          if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
              let serverUndeafv = new Discord.RichEmbed()
              .setTitle('**[VOICE UNDEAFEN]**')
              .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
              .setColor('GREEN')
              .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
              .setTimestamp()
              .setFooter(userTag, userAvatar)
   
              logChannel.send(serverUndeafv);
          }
      })
  // Join Voice Channel
      if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
          let voiceJoin = new Discord.RichEmbed()
          .setTitle('**[JOIN VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
   
          logChannel.send(voiceJoin);
      }
  // Leave Voice Channel
      if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
          let voiceLeave = new Discord.RichEmbed()
          .setTitle('**[LEAVE VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
   
          logChannel.send(voiceLeave);
      }
  // Changed Voice Channel
      if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
          let voiceLeave = new Discord.RichEmbed()
          .setTitle('**[CHANGED VOICE ROOM]**')
          .setColor('GREEN')
          .setThumbnail(voiceOld.user.avatarURL)
          .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
          .setTimestamp()
          .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
   
          logChannel.send(voiceLeave);
      }
  });
  client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
    return channel.send(`ولكم نورت السيرفر LEGENDRAY KILLERS
   ${member}  
   `) 
  }).catch(console.error)
  })
  client.on("guildMemberAdd", (member) => {
    client.channels.get('539584500133396493').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
    })
    client.on("guildMemberRemove", (member) => {
    client.channels.get('539584500133396493').edit({name : `『 الأعضاء ↩ ${member.guild.memberCount} 』`});
    })

  client.login("bottoken");

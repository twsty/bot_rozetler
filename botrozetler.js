const discord = require('discord.js') //discordu tanımladık
exports.run = async(client, message,args) => { // yazdık ve koda başlayalım
var guild = client.guilds.cache.get("828316770636136467")
var user = guild.members.cache.get(message.author.id)
const sahib = "828991688021901353" //sahib rol id
const moderatör = "828990818052341770" //moderatör rol id
const geliştirici = "828989606040567841" //geliştirici rol id
const destekçi = "828985916713467964" //destekçi rol id
const premium = "828988143889678366" //premium rol id
if(!user) return message.channel.send({embed: {color: "BLACK", description: `Sunucumuzda bulunmuyorsun! Sunucuya katıl => discord.gg/javascript`}})
//taslak

const embed = new discord.MessageEmbed() //embedi tanımladık
.setTitle('Discord Botumuzdaki Rozetleriniz !')
.setDescription(`
<:sahip:828991656401043456>       Sahib: ${user.roles.cache.has(sahib) ? 'Alınmış' : 'Alınmamış'} \n
<:botmoderastr:828990617194594315>      Moderatör: ${user.roles.cache.has(moderatör) ? 'Alınmış' : 'Alınmamış'} \n
<:gelistirici:828989353870098488>     Geliştirici: ${user.roles.cache.has(geliştirici) ? 'Alınmış' : 'Alınmamış'} \n
<:401725034453925889:828986936446156800>    Destekçi: ${user.roles.cache.has(destekçi) ? 'Alınmış' : 'Alınmamış'} \n
<:paraR:828988077179404308>     Premium: ${user.roles.cache.has(premium) ? 'Alınmış' : 'Alınmamış'} \n
 `)
message.channel.send(embed) // bu şekilde embedi atmasını sağladık
//sırada kodun bilgileri
};
exports.conf = {
enabled: true, //komutun aktifliği(true/false)
guildOnly: false, //sunucuya özel mi (true/false)
permLevel: 0,  //kimler kullanabilir message.js de ya da main dosyanızda permler yazar herkesin kullanmasını isterseniz 0 yazın
aliases: ["komutun 2. isminı yazın", "3.isim diye gidiyor"]
};
exports.help = {
name: "rozetler"
};

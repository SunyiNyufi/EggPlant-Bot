const Discord = require('discord.js');
const client = new Discord.Client();

// 'client.on('message')' commands are triggered when the
// specified message is read in a text channel that the bot is in.

client.on('message', message => {

//switch case to detect trigger words and print response
var text = message.content.toLowerCase();

 switch (true) {
  case (message.author.bot):
    break;
  case (text.includes("commandlist")): //Prints out the list of trigger words
    message.channel.send({embed: {
      title: "I answer to the following words with different responses:",
      fields: [
        { name: "Trigger words:", value: "Eggplant or aubergine\nEgg or eggs\nNugget or nuggets\nSendhug\nCommandlist", inline: true},
        { name: "Response:", value: "Random eggplant fact\nA beautiful picture of Yolky Areolas\nA picture of all mighty Roxas\nSending Virtual Hug\nPrints this list", inline: true}
      ]}
  });
    break;
  //eggplant facts yay
  case (message.content.includes("🍆")):
    message.reply(' time for some eggplant facts! Fact: ' + printFact() + ' :eggplant:');
    break;
  case (text.includes("eggplant")):
    message.reply(' time for some eggplant facts! Fact: ' + printFact() + ' :eggplant:');
    break;
  case (text.includes("aubergine")):
    message.reply(' time for some eggplant facts! Fact: ' + printFact() + ' :eggplant:');
    break;
  //Roxas and his chicken nugget
  case (text.includes("nugget")):
    message.channel.send('CHICKEN NUGGETS!!!!!!!!!!!!!',{
      files: ['https://cdn.discordapp.com/attachments/459177741271695364/459177771327815690/unknown.png']
    });
    break;
  //Yolky Areolas
  case (text.includes("egg")):
    message.channel.send('Did somebody say eggs?', {
      files: ['https://i.imgur.com/qj6IVW2.png']
    });
    break;
  //Sending virtual hugs
  case (text.includes("sendhug")):
    message.channel.send({
      files: ['https://media.giphy.com/media/XpgOZHuDfIkoM/giphy.gif']
    });
}
});

client.login("NDYxMDkwODQwNzgyMzA3MzQ4.DhOZjQ.bUB4IyhXeqz-s5UP-EStNXtXgFc");

function printFact() {
  var randomNumber = Math.floor(Math.random() * (facts.length));
  return facts[randomNumber];
}

var facts = ["Eggplants aren’t REALLY vegetables, they’re berries. Which isn’t that strange, considering other fruits are commonly mistaken for vegetables – like tomatoes.",
"Eggplants and tomatoes are actually related. They both belong to the nightshade family with the famous literary poison – deadly nightshade. But don’t worry, eggplant isn’t toxic (at least not in normal amounts).",
"A study published in 1993 in the New England Journal of Medicine showed that eggplant has by far the highest level of nicotine of any vegetable. But it’s such a small amount that there’s really no need for concern. You would have to eat between 20 and 40 pounds of eggplant to consume the amount of nicotine you’d get smoking one cigarette.",
"People in the U.K. called them aubergines. The word “aubergine” goes all the way back to the ancient Indian language Sanskrit. The eggplant is believed to have originated in India, where it is considered to be the King of Vegetables.",
"Eggplant has spiny stem that can grow from 16 to 57 inches in height.",
"Eggplant produces star-shaped, white or purple flowers. They contain both types of reproductive organs (pistil and stamens) and can perform self-pollination.",
"Eggplant has short vegetative season. Harvest usually takes place 60 days after planting. Eggplant requires high temperature (it grows during the summer) for proper growth and development.",
"Eggplant is rich source of dietary fibers, vitamins C, K and vitamins of the B group, and minerals such as copper, phosphorus and magnesium.",
"Eggplant can be consumed grilled, baked, boiled, stuffed or combined with meat and other vegetables. Eggplant is often used as a substitute for meat in vegetarian diet due to specific texture and taste of its flesh.",
"Juice made of leaves and roots of eggplant can be used in treatment of throat and stomach disorders, cough, asthma, toothache, rheumatism and skin problems.", "China is the greatest manufacturer of the eggplants in the world. It produces 28.800.000 tons of eggplants annually.",
"Eggplant has spiny stem that can grow from 16 to 57 inches in height.",
"Eggplant contains numerous miniature seed. They have bitter taste due to high content of nicotine (substance that belongs to the group of alkaloids). Eggplant contains the highest level of nicotine compared to other edible plants. Luckily, consumption of eggplant does not produce harmful effect on the human health (20 pounds of eggplant contains same amount of nicotine as one cigarette).",
"Eggplant is rich source of dietary fibers, vitamins C, K and vitamins of the B group, and minerals such as copper, phosphorus and magnesium.",
"Name eggplant originates from 18th century when cultivars with small, white fruit, shaped like hen's egg were popular. Eggplant is known as crazy apple in Italy due to widespread belief that diet rich in eggplants leads to madness.",
"Eggplant grows as perennial plant (life span: over 2 years) in tropics and as annual plant (life span: one year) in temperate climates."];

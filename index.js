const Discord = require("discord.js")

const client = new Discord.Client({  intents: 32767  });

const prefix = '-';

const fs = require('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("Bot online")
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'ping'){
       client.command.get('ping').execute(message, args)
    }
    else if(command == 'link'){
        
    }
});

client.login(process.env.TOKEN)
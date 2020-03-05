const Discord = require('discord.js');
const config = require('./config');
const client = new Discord.Client(config.clientConfig);

client.on('ready', () => console.log(`Logged in as ${client.user.tag}, ID: ${client.user.id}!`));

client.on('message', message => {
  if (message.content.startsWith(config.prefix)) {
    switch (message.content) {
			case config.prefix + 'ping' || config.prefix + 'p':
				require('./commands/ping')(client, message);
				break;
			case config.prefix + 'host' || config.prefix + 'h':
				require('./commands/host')(client, message);
				break;
		}
  }
});

client.login(config.token);

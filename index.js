const TelegramBot = require('node-telegram-bot-api');

const token = '1421915898:AAGNV-uJ6n3bEDkjmT3D5j1baOinajYzMz4';

const bot = new TelegramBot(token, { polling: true});

bot.on('message', function(msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);
    bot.sendMessage(chatId, 'Obrigado por sua mensagem' );
});
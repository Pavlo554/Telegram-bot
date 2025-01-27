require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// URL вашого веб-додатку
const webAppUrl = 'https://rozetka.com.ua/ua/?gad_source=1&gclid=CjwKCAiA-ty8BhA_EiwAkyoa39q9suYapRHWKKiBWGb_bph8AcLpC1XVeM8zlkztiwc03fJs0g0sNRoCPP8QAvD_BwE';

// Створюємо клавіатуру з кнопкою для відкриття веб-додатку
const keyboard = {
    reply_markup: {
        inline_keyboard: [[
            {
                text: '🏪 Відкрити магазин',
                web_app: { url: webAppUrl }
            }
        ]]
    }
};

// Брендований текст привітання
const welcomeMessage = `
╔══════════════════════════════╗
║   WEB LEZZER GAMES STUDIO    ║
╚══════════════════════════════╝

🎮 Ласкаво просимо до офіційного магазину!
📌 Натисніть кнопку нижче, щоб відкрити магазин`;

// Обробка команди /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, welcomeMessage, {
        parse_mode: 'Markdown',
        ...keyboard
    });
});



// Обробка помилок
bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});
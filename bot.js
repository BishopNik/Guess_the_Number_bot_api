/** @format */

const TelegramBot = require('node-telegram-bot-api');

const token = '7544556013:AAGMKkXqwP9Abch8Cse7BqY2Q2jgCssVFYI';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, msg => {
	const chatId = msg.chat.id;
	const startButton = {
		reply_markup: {
			inline_keyboard: [
				[{ text: 'Play Game', url: 'https://guess-the-number-phi-eight.vercel.app' }],
			],
		},
	};
	bot.sendMessage(chatId, 'Welcome! Click the button below to start the game.', startButton);
});

bot.on('message', msg => {
	const chatId = msg.chat.id;
	if (msg.text.toLowerCase() === 'start game') {
		const startButton = {
			reply_markup: {
				inline_keyboard: [
					[{ text: 'Play Game', url: 'https://guess-the-number-phi-eight.vercel.app' }],
				],
			},
		};
		bot.sendMessage(chatId, 'Click the button below to play the game:', startButton);
	}
});

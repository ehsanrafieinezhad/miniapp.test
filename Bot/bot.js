const { Telegraf } = require('telegraf')

const TOKEN = "7130811469:AAFNS8VlXePlVgF7xEMu31_rgmRMFjShDVc"

const bot = new Telegraf(TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.launch()


require('dotenv').config()
const logger = require('./logger')
const cron = require('node-cron')

// Google Sheet Integration
const GoogleSpreadsheet = require('google-spreadsheet')
const creds = require(process.env.GSHEET_JSON)

// Initialize telegram bot
const Telegraf = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

// GSheet load sample
const sheetDoc = new GoogleSpreadsheet(process.env.GSHEET_ID)
sheetDoc.useServiceAccountAuth(creds, () => {
  // This gets non-empty cells
  // for the first 50 rows and first 5 columns of the first sheet
  sheetDoc.getCells(
    1,
    {
      'min-row': 1,
      'max-row': 50,
      'min-column': 1,
      'max-column': 5,
      'return-empty': false
    },
    // Callback function when data is retrieved/error is thrown
    (err, cells) => {
      if (err) throw err
      console.log(cells)
    }
  )
})

// CRON sample
bot.command('remind', ctx => {
  // 30 minutes CRON job
  cron.schedule('30 * * * *', () => {
    ctx.reply('I TALK TO YOU EVERY 30 MINUTES')
  })
})

bot.command('start', ctx => {
  logger.log({
    level: 'info',
    message: `${ctx.update.message.from.first_name} ${ctx.update.message.from.last_name} have started/switched the Bot`
  })
  ctx.reply('Bot has started!')
})

bot.catch(err => {
  logger.log({
    level: 'error',
    message: err.toString()
  })
})

bot.startPolling()

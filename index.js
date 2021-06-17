
const { App } = require('@slack/bolt')
const bilbo = require('./bilbo')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
})

app.command("/bilbo", bilbo);

(async () => {
  // Start the app
  await app.start(process.env.PORT || 3000)

  console.log('We are going on an adventure, Mr Bilbo!')
})()
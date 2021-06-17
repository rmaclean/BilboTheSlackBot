/** @typedef { import('@slack/bolt').SlackCommandMiddlewareArgs} SlackCommandMiddlewareArgs */

const schedule = require('./schedule')

const scheduleCommand = /schedule/i

/** 
    @param {SlackCommandMiddlewareArgs} args
*/
const bilbo = async ({ command, ack, say }) => {
    await ack();
    if (!command.text) {
        await say("You got to tell me what to do.")
        return
      }
    
      if (scheduleCommand.test(command.text)) {
          await say(schedule())
          return
      }

      await say(`Unknown command [${command.text}]`)
};

module.exports = bilbo
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "",
prefix: "?",
mobile: true,
intents: ["GUILDS", "GUILD_MESSAGES"]
})



//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
bot.onInteractionCreate()
bot.onMessage()
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./cmd/')
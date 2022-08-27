const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "",
prefix: "?",
mobilePlatform: true,
intents: ["GUILDS", "GUILD_MESSAGES"]
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
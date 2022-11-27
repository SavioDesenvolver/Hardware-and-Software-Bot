const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "YOU TOKEN",
prefix: "?",
mobilePlatform: true,
intents: ["GUILDS", "GUILD_MESSAGES", "all"]
})


//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
bot.onInteractionCreate()
bot.guildJoinCommand({
code: `
$botLeave[$guildID]
`
})
bot.onMessage()
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./cmd/')

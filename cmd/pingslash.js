module.exports = ({
name: "ping",
type: "interaction",
prototype: "slash",
code: `
$interactionEdit[Pong! Websocket: \`$pingms\`]
$interactionReply[Pinging...]`
})
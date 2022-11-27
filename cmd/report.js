module.exports = {
    name: "$alwaysExecute",
    code: `
$channelSendMessage[1013090568986951710;{newEmbed:{description:$message}{footer: By $username[$authorID]:$authorAvatar}]
$channelSendMessage[960917624991133705; <@$authorID> 👍]
$deletecommand
$onlyIf[$channelID==1013090937850835005]

`} 
module.exports = {
    name: "$alwaysExecute",
    code: `
$channelSendMessage[1013090568986951710;{newEmbed:{description:$message}{footer: By $username[$authorID]:$authorAvatar}]
$channelSendMessage[1013188413702279258; <@$authorID> 👍]
$deletecommand
$onlyIf[$channelID==1013090937850835005]

`} 
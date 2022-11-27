module.exports = {
  name: "terminal",
  aliases: ["shell"],
  code: `
  $exec[$message]
  $reply 
  $onlyForIDs[$botOwnerID;]
  `
}
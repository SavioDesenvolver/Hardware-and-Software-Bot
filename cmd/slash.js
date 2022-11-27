module.exports = {
    name: "slash",
    code: `$createApplicationCommand[$guildID;send-dm;make the bot send a dm to a user;true;slash;user:user to dm:true:6;message:message to send to user:true:3]
    `
    },({
    	name: "send-dm", 
 prototype : 'slash',
 code: `
 $sendDM[{newEmbed:{title:You Recieved a DM!}{description:Someone sent you a dm!}{field:Author:<@$interactionData[author.id]> | $userTag[$interactionData[author.id]]}{field:Message:$interactionData[options.data[1].value]}};$interactionData[options.data[0].value]]
 $interactionReply[Successfully sent dm to **$userTag[$interactionData[options.data[0].value]]**. Message: **$interactionData[options.data[1].value]**;;;;yes]
 `
 })
 bot.onInteractionCreate() 
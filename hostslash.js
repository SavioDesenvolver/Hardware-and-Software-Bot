module.exports = [{
 name: "host",
 type: "interaction",
 prototype: "slash",
 code:`

$createApplicationCommand[global;host;Informa dados sobre o bot;true;slash]`
 },{
name: "host",
 type: "interaction",
 prototype: "slash",
code:`$interactionReply[;{newEmbed:{title: Informações técnicas}{description::amd: CPU: $djsEval[require ('os').cpus()[0].model;yes]

 Uso da CPU: $cpu %

 RAM: $ram MB

 PING: $dbPing

 Node: $nodeVersion 

 Hospedagem:      

 Dev: 

 Tempo: $uptime}{color:006600}{delete:15s}};;;;yes]


`

 }]
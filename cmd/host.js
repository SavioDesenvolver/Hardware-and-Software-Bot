module.exports = {
    name: "host",
    code: `
$description[1;

<:xeon:1064923577402523718> CPU: $djsEval[require ('os').cpus()[0].model;yes]: $cpu%
<:rammm:1064923579059282052> RAM: $ram MB
<:nodejs:1064923574604931202> Node: $nodeVersion 
<:OSicon:1064923572990136401> OS: $djsEval[require('os').version();yes]
<:server:1064923570259632200> Hospedagem: 
<:enginerremovebgpreview:1064924265746538516> Dev: Sávio
:clock9: Tempo: $uptime
<:hackerremovebgpreview:1064924268447662100> Sua Plataforma: $platform[$authorID]
]
$color[1;#000000]
`}

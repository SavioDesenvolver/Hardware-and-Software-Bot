module.exports = {
    name: "host",
    code: `
$djsEval[require ('os').cpus()[0].model;yes]:$cpu %
RAM: $ram MB/X MB
Node: $nodeVersion 
OS: $djsEval[require('os').version();yes]
Hospedagem: 
Dev: Sávio
Tempo: $uptime
Sua Plataforma: $platform[$authorID]
`}

module.exports = {
    name: "ipinfo",
    code: `
$description[1;$jsonRequest[http://ip-api.com/json/$message]]
$color[1;RANDOM] `} 

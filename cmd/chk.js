module.exports = {
    name: "chk",
    code: `$deletecommand
$title[1;Tente rodar esses comandos:]
$description[1;
1.chkdsk /r

2.sfc /scannow (esse tendo um adendo caso não dê para corrigir um arquivo protegido com o windows online)

3.DISM /Online /Cleanup-Image /RestoreHealth

https://youtu.be/xAULOjPGd9s
]
$color[1;RED]
$footer[1;$username;$userAvatar[$userID]]
`}
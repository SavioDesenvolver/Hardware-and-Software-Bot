module.exports = [{
    name: "?posth",
    aliases: ['alguem me ajuda','alguem poderia me ajudar', 'tenho', 'meu pc', 'alguém me ajuda', 'poderia me ajudar'],
    nonPrefixed: true,
    code: `
$description[1;Recomendamos criar uma thread em <#1019677953463963678>, para uma organização melhor no nosso grupo e mais suporte, assim o suporte poderá ajudá-lo(a). ]
$color[1;#FFFF00]
$addButton[1;Área-Tecnica;link;https://discord.com/channels/960917624005459999/1019677953463963678;no;🔧]
$addButton[1;In English;1;EN;no;🇬🇧]
$onlyIf[$channelCategoryID==960917624785621000;]
$deleteIn[25s]

`
},{
  name: "EN",
  type: "interaction",
  prototype: "button",
  code: `$author[1;$username]
 $description[1;We recommend creating a thread at <#1019677953463963678>, for better organization in our group and more support, so support can help you.]
$color[1;#FFFF00]
$addButton[1;Área-Tecnica;link;https://discord.com/channels/960917624005459999/1019677953463963678;no;🔧]
$deleteIn[25s]`
}]

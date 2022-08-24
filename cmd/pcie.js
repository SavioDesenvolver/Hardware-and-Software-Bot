module.exports = [{
name: "pcie",
code: `
$title[1;Velocidade do barramento PCIE]
$description[1;
Selecione nos botões qual geração do PCIE você quer ver!]
$color[1;#ffff]



$addButton[1;PCIE GEN1;1;int1;no;]
$addButton[1;PCIE GEN2;1;int2;no;]
$addButton[1;PCIE GEN3;1;int3;no;]
$addButton[1;PCIE GEN4;1;int4;no;]
$addButton[1;PCIE GEN5;1;int5;no;]
$addButton[1;PCIE GEN6;1;int6;no;]
`
}),({
  name: "int1",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{description:
    PCIe 1.1 x1: 250 MB/s
    PCIe 1.1 x4: 1.000 MB/s (ou 1 GB/s)
    PCIe 1.1 x8: 2.000 MB/s (ou 2 GB/s)
    PCIe 1.1 x16: 4.000 MB/s (ou 4 GB/s)
}{color:RANDOM}};{actionRow:{button:Voltar 4:4:int10:yes}}]`

},{
  name: "int2",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{description: PCIe 2.0 X1: 500MB/s
PCIe 2.0 X4: 2GB/s
PCIe 2.0 X8: 4GB/s
PCIe 2.0 X16: 8GB/s
}{color:RANDOM}};{actionRow:{button:Voltar 4:4:int10:yes}}]`
},{
  name: "int3",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{description:PCIe 3.0 X1: 1GB/s
PCIe 3.0 X4: 4GB/s
PCIe 3.0 X8: 8GB/s
PCIe 3.0 X16: 16GB/s}{color:RANDOM}};{actionRow:{button:Voltar 4:4:int10:yes}}]`
},{
  name: "int4",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{description:PCIe 4.0 X1: 2GB/s
PCIe 4.0 X4: 8GB/s
PCIe 4.0 X8: 16GB/s
PCIe 4.0 X16: 32GB/s
}{color:RANDOM}};{actionRow:{button:Voltar 4:4:int10:yes}}]`
},{
  name: "int5",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{description:PCIe 5.0 X1: 4GB/s
PCIe 5.0 X4: 16GB/s
PCIe 5.0 X8: 32GB/s
PCIe 5.0 X16: 64GB/s}{color:RANDOM}};{actionRow:{button:Voltar 4:4:int10:yes}}]`
},{
  name: "int6",
  type: "interaction",
  prototype: "button",
  code: `$interactionUpdate[;{newEmbed:{description:(teoria)
PCIe 6.0 x1: 8 GB/s
PCIe 6.0 x4: 32 GB/s
PCIe 6.0 x8: 64 GB/s
PCIe 6.0 x16: 128 GB/s}{color:RANDOM}};{actionRow:{button:Voltar 4:4:int10:yes}}]`
}
]
//1 = azul, 2 = gris, 3 = verde, 4 = rojo, 5 = link
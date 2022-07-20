const express = require('express')
const app = express()
const port = 5210

app.use(express.urlencoded({extended: false}))
app.use(express.json())  

var listaProdutos = [
    {
        id : 1000,
        descricao:"Picanha",
        preco:122.00,
        quantidade:200

    },
    {
        id:2122,
        descricao:"Contra Filé",
        preco:100,
        quantidade:134
    }
]

app.get('/',(req,res)=>{
    res.send('Produto')
});

app.get('/produtos', (req,res)=> 
{res.send(listaProdutos)});

app.get('/produtos/:idprodutos', (req,res)=>{
    var produtos =''
    for(let pro of listaProdutos){
        if(pro.id == req.params.idprodutos)
            produtos = pro
    }
    res.send(produtos)
})

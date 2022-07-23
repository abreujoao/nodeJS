const express = require('express')
const app = express()
const port = 5210

app.use(express.urlencoded({extended: false}))
app.use(express.json())  

var listaProdutos = [
    {
        id :1,
        descricao:"Picanha",
        preco:122.00,
        quantidade:200

    },
    {
        id:2,
        descricao:"Contra Filé",
        preco:100,
        quantidade:500
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

app.post('/produtos', (req,res)=>{
    let produto = {
        id:listaProdutos.length+1,
        descricao: req.body.descricao,
        preco: req.body.preco,
        quantidade: req.body.quantidade
    }
    listaProdutos.push(produto)
    res.send(produto)
})



app.listen(port, ()=>{console.log(`executando na porta http://localhost:5210`);})
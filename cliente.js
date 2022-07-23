const express = require('express');
const app = express();
const port = 5200;
app.use(express.urlencoded({extended: false})) //Para conversar o node com o Postman ou Insomia
app.use(express.json())  //Linhas para pegar o formulário

var listaClientes = [
    {
        id:1,
        nome:'jose',
        idade:20
    },
    {
        id:2,
        nome:'jose ricardo',
        idade:19
    }
]

app.get('/',(req,res)=>{
    res.send('ola pessoal')
});

app.get('/clientes', (req,res)=> 
{res.send(listaClientes)});

app.get('/clientes/:idcliente', (req,res)=>{
    var clientes =''
    for(let cli of listaClientes){
        if(cli.id == req.params.idcliente)
            clientes = cli
    }
    res.send(clientes)
})

app.post('/clientes', (req,res) =>{
    let cliente = {
        id:listaClientes.length+1,
        nome: req.body.nome,
        email: req.body.email
    }
    listaClientes.push(cliente)
    res.send(cliente)
})

app.delete('/clientes/:idcliente', (req,res) =>{
    for(let i=0; i<listaClientes.length;i++){
        if(listaClientes[i].id == req.params.idcliente)
        listaClientes.splice(i,1)
    }
    res.send('cliente excluido com sucesso')
})

app.put('/clientes/:idcliente', (req,res) =>{
    for(let cli of listaClientes){
        if(cli.id == req.params.idcliente){
            cli.nome = req.body.nome
            cli.email = req.body.email
        }
    }
    res.send('alterado com sucesso')
})


app.listen( port, () => {console.log(` executando em http://localhost:${port}`);});


const express = require('express');
const pg = require('pg');
const app = express();
const port = 5300;
app.use(express.urlencoded({extended: false}))
app.use(express.json())  

app.post('/usuarios', function(req,res){
    pool.connect(function(err,client){
        var sql = 'insert into usuario(username, senha, perfil)values($1,$2,$3)'
        var dados = [req.body.username, req.body.senha, req.body.perfil]
        client.query(sql,dados,function(error,result){
            if(error){
                return res.send({erro: error.message})
            }
            if(result.rowCount > 0){
            return res.send({ message: 'Usuario criado com sucesso!'})
             }
        })
    })
})

var listaUsuarios = [

]


app.post('/usuarios/login', function (req,res){
    pool.connect(function(err,client){
        var dados = [req.body.username, req.body.senha]
        var sql = 'select * from usuario where username = $1 and senha = $2'
        client.query(sql,dados,function(error,result){
            if(result.rowCount > 0){
                return res.send(result.rows[0])
            }
            else{
                return res.send({message: 'Usuario nao existe.'})
            }
        })
    })
})


app.listen(port,()=>{console.log(`executando em http://localhost:5300`)})
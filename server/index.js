const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser")
const cors = require("cors")


app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(express.json());


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "prod_unisalva"
  });

app.get('/api/get', (req,res) =>{
    const sqlSelect = "SELECT * FROM cursos";
    db.query(sqlSelect, (err, result) =>{
        res.send(result)
    });
});

app.delete('/api/delete/:cursoId', (req,res) =>{
    const id = req.params.cursoId
    const sqlDelete = "DELETE FROM cursos WHERE id = ?";
    db.query(sqlDelete, id, (err, result) =>{
        if(err) console.log(err);
    });
});

app.post("/api/insert", (req,res) =>{

    const Nomecurso  = req.body.Nomecurso;
    const Descricaocurso = req.body.Descricaocurso;
    console.log(req.body.Nomecurso);

    const sqlInsert = "INSERT INTO cursos (Nome, Descricao) VALUES ( ? , ?);";
    db.query(sqlInsert, [Nomecurso, Descricaocurso],(err, result) =>{
        res.send("Sucesso");
        console.log(err);
    });
});

app.listen(3001, () =>{

    console.log('App rodando');
});
const express = require('express');
const server = express();
server.use(express.json());

var alunos = [
    {
        nome: "João Pedro",
        curso: "Ciência da Computação",
        semestre: 8,
        ra: 579610,
        cpf: 12345678902,
        cidade: "Marília"
    },
    {
        nome: "João Victor",
        curso: "Ciência da Computação",
        semestre: 8,
        ra: 579211,
        cpf: 12345678903,
        cidade: "Marília"
    },
    {
        nome: "Marcos Vinicius",
        curso: "Ciência da Computação",
        semestre: 8,
        ra: 580678,
        cpf: 12345678904,
        cidade: "Marília"
    },
    {
        nome: "Otávio Barbosa",
        curso: "Ciência da Computação",
        semestre: 8,
        ra: 577359,
        cpf: 12345678901,
        cidade: "Marília"
    }
]

// GET

server.get('/alunos', (req, res) => {
    return res.json(alunos);
});


server.get('/alunos/:index', (req, res) => {
    let {index} = req.params;
    return res.json(alunos[index]);
})


//POST

server.post('/alunos', async (req, res) => {
    let {nome, curso, semestre, ra, cpf, cidade} = req.body;
    alunos.push({nome, curso, semestre, ra, cpf, cidade});
    return res.json(alunos);
});


//PUT

server.put('/alunos/:index', async (req, res) => {
    let {index} = req.params;
    let {nome, curso, semestre, ra, cpf, cidade} = req.body;
    alunos[index] = {nome, curso, semestre, ra, cpf, cidade};
    return res.json(alunos);
});


//DELETE

server.delete('/alunos/:index', async (req, res) => {
    let {index} = req.params;
    alunos.splice(index, 1);
    return res.json(alunos);
});

server.listen(3030);



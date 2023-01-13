import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, role = 'admin', ativo = true){
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeCurso, vagas){
        return`Curso de ${nomeCurso} criado como ${vagas} vagas`
    }
}

const novoAdmin = new Admin('paulo', 'A@a.com', '2022-01-01')
console.log(novoAdmin.criarCurso('JS', 20))
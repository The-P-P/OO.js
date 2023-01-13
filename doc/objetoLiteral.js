const user = {
    nome: 'pedro',
    email: 'p@p.com',
    nascimento: '2023/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email)

    }
}

const admim = {
    nome: 'paulo',
    email: 'paulo@p.com',
    role: 'admim',
    criarCurso(){
        console.log('curso criado')
    }
}

Object.setPrototypeOf(admim, user)


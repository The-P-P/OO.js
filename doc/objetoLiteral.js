const user = {
    nome: 'pedro',
    email: 'p@p.com',
    nascimento: '2023/01/01',
    role: 'admim',
    ativo: true,
    exibirInfo: function(){
        console.log(this.nome, this.email)

    }
}
user.exibirInfo()
const exibir =  user.exibirInfo
exibir()
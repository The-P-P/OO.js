function User(nome, email){
    this.nome = nome
    this.email = email

    this.exebirInfo = function(){
        return `${this.nome}, ${this.email}`
    }
}

// const novoUser = new User('juliana', 'j@j.com')
// console.log(novoUser.exebirInfo())

// function Admim( role){
//     User.call(this, 'juliana', 'j@j.com')
//     this.role = role || 'estudante'
// }

// Admim.prototype = Object.create(User.prototype)
// const novoUser = new Admim('Admim')
// console.log(novoUser.exebirInfo())
// console.log(novoUser.role)


const user = {
    init: function(nome,email, telefone){
        this.nome = nome,
        this.email = email,
        this.telefone = telefone
    },
    exebirInfo: function(){
        return this.nome, this.email, this.telefone;
    }
}

const novoUser = Object.create(user)
novoUser.init('bigp', 'bigp@p.com', '2341234143')
console.log(novoUser.exebirInfo())
// console.log(user.isPrototypeOf(novoUser))
export default  class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){

        this.#nome =  nome
        this.#email =  email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo
    }

    // get -  possivel adicionar condicionais e afins
    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }
    
    set nome(novoNome){
        if (novoNome === ''){
            throw new Error('formato nao valido')
        }
        this.#nome = novoNome
    }
    set email(novoEmail){
        this.#nome = novoEmail
    }
    set nascimento(novoNascimento){
        this.#nome = novoNascimento
    }
    set role(novoRole){
        this.#nome = novoRole
    }
    set ativo(novoAtivo){
        this.#nome = novoAtivo
    }



    #montaObjetoUser(){
        return ({
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo


        })
    }

    exibirInfos(){
        const objUser = this.#montaObjetoUser()
        return `${this.nome}, ${this.email}, ${this.nascimento} ${this.role},${this.ativo}`
    }
}


const usuarios = [
    {id: 11, nome: 'joao', idade: 23 },
    {id: 2, nome: 'maria', idade: 18 },
    {id: 4, nome: 'ana', idade: 30 },
    {id: 1, nome: 'rodrigo', idade: 17 },
    {id: 123, nome: 'rodrigo', idade: 17 }
]
//teste pra ver como esta imprimindo
console.log(usuarios);

usuarios.sort((primeira, segunda) => {
    return primeira.id - segunda.id;
});
//ordenaçao crescente
console.log(usuarios);


usuarios.sort((primeira, segunda) => {
    return segunda.id - primeira.id;
});
//ordenaçao decrescente
console.log(usuarios);
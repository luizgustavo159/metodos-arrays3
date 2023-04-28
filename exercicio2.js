const carros = [
    {nome: 'corolla', marca:'toyota', ano: '2020', cor: 'prata'},
    {nome: 'argo', marca:'fiat', ano: '2021', cor: 'preto'},
    {nome: 'ranger', marca:'ford', ano: '2021', cor: 'prata'},
    {nome: 'hilux', marca:'toyota', ano: '2018', cor: 'branco'}
];

const ordenarCarros = (carros, ordenaçao) => {
    carros.sort((a, b) => {
        return a[ordenaçao].localeCompare(b[ordenaçao])
    }
    );
    console.log(carros);
}
ordenarCarros(carros, 'ano');
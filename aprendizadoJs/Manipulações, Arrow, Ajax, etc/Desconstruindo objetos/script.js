let pessoa = {
    nome: "Jubiscleito",
    sobrenome: "Silva",
    idade: 90,
    endereco: "Talibâ",
    social: {
        facebook: 'jubiscleito silva',
        //instagram: '01jubs' //utilizado com os códigos comentados até a linha 29
        instagram:{
            url: 'www.instagram.com/01jubs/',
            seguidores: 500
        }
    }
};

//let { nome: firstName/*mudando o nome da vartiável*/, sobrenome, idade = 0/* definindo valor padrão caso idade for vazio*/, endereco } = pessoa;//quebrando objeto e transformando ítens em vriáveis

//console.log(firstName, sobrenome, idade, endereco);

//let { facebook, instagram } = pessoa.social; //desconstruíndo apenas o objeto de dentro do objeto

//console.log(facebook, instagram);

//let {nome, idade, social:{ instagram }} = pessoa;//desconstruindo o objeto dentro do objeto em conjunto com os outros ítens

//console.log(nome, idade, instagram);



//let {nome, idade, social:{instagram:{url:instagramUrl, seguidores}}} = pessoa;//selecionando o objeto dentro do objeto, renomeando a variável url e pegando o ítem seguidores também

let {nome, idade, social:{instagram}} = pessoa;//selecionando o objeto instagram inteiro dentro do objeto social e pessoa 

console.log(nome, idade, instagram);

let pegarNomeCompleto = ({nome:firstName, sobrenome, social:{instagram:{url:instagram}}}) => `${firstName} ${sobrenome} (Siga em ${instagram})`;//basicamente o código está desconstuíndo o objeto no parâmetro e esta pegando o nome e o sobrenome do objeto e colocando os 2 em uma string só, também está pegando o url do instagram e o renomeando para instagram
// desconstrução com Arrow function

console.log(pegarNomeCompleto(pessoa));//passar o objeto como parâmetro

const carros = {
    porshe: '911 turbo s',
    toyota: 'mk4 supra',
    mazda: 'rx7 rotativo brabo',
    honda: 'NSX ferrari japonesa mlk',
    ligado: false,
    nissan: function(){
        console.log ('GTR32 SEGURA O GODZILLA KARALHOO O REI DAS PISTAS PORRA');
    },
    ligartoyota: function(){
        this.ligado = true;// modifica o valor ligado quando a função ser executada, transformando ele em verdadeiro (this pois o ligado está dentro do objeto)
        console.log("ligando o "+this.toyota);//usando o this dentro de um objeto, defindo o atributo no objeto que eu quero retornar
    },
    acelerartoyota: function(){
        if(this.ligado == true){//se o ligado for verdadeiro executa a função no log
            console.log("rammmmmm");
        } else {
            console.log(this.toyota+" não está ligado");// se não estiver ligado não acelera, ou sejá, se por acaso a função acelerar for executata primeiro que a função ligar, ele não vai executar a de acelerar, pois o ligar originalmente esta definido como false
        }
    }
};

console.log(carros.honda);
console.log(carros.porshe);

carros.nissan(); //assim se retorna uma função em um objeto
carros.ligartoyota();
carros.acelerartoyota();

const jdm = [// array com objetos dentro
    {marca:'Nissan',modelo:'180sx'},
    {marca:'Honda',modelo:'civic type r'},
    {marca:'Mazda', modelo:'fc'},
    {marca:'Toyota',modelo:'trueno'}
];

console.log(jdm);
console.log(jdm[2].modelo);// acessar primeiro pelo índice qual objeto se deseja, após isso acessar o atributo do objeto acessado
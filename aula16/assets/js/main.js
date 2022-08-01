//primeiro passo parar o envio do sair capturar evento de submit do formulario
//  Document.querySelector() Retorna o primeiro elemento dentro do documento
//que corresponde ao grupo especificado de seletores
const form = document.querySelector('#formulario')

//evento  ou event ou e sao as mesmasa coisas 
addEventListener('submit', function (e){
    e.preventDefault();
//target retorna a referência ao construtor ou função
   const inputPeso = e.target.querySelector('#peso') 
   const inputAltura = e.target.querySelector('#altura') 
   const peso = Number(inputPeso.value)
   const altura = Number(inputAltura.value)
  if (!peso) {
    setResultado('Peso invalido', false)
    return;
  }
  if (!altura) {
    setResultado('altura invalido', false)
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu  IMC é ${imc} (${nivelImc}).`;
  setResultado(msg, true);
  
});

function getNivelImc(imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}
function getImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2) //duas casas decimais 

}

function criaP (className){
    //createElement criar elemento
    const p = document.createElement('p');
    return p
}

function setResultado(msg, isValid){

    const resultado = document.querySelector('#resultado');
//innerHTML define ou obtém a sintaxe HTML ou
// XML descrevendo os elementos descendentes
    resultado.innerHTML = '';

  
//appendChild() é um dos métodos fundamentais da programação
// para a web usando o DOM    O método appendChild() insere um novo nó na estrutura do DOM de um documento
// e é a segunda parte do processo criar-e-adicionar tão importante na construção de páginas web programaticamente
    const p = criaP();
    
if(isValid){
    p.classList.add('paragrafo-resultado');
}else{
    p.classList.add('bad');
}

    p.innerHTML = msg;
    resultado.appendChild(p);
}
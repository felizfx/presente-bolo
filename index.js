let valor = document.querySelector(`#resposta`);
let botao = document.querySelector(`#enviar`);
let conteudo = document.querySelector(`#conteudo`);
let escondido = document.querySelector(`#escondido`);
let controle = 0

function enviarForms(){
    console.log(valor.value)
    valor.value
    if(valor.value == `naju`){
        conteudo.innerHTML = `<h2 style='text-align: center; margin-top: 10px; color: green;'>Parabens Naju, Feliz dia do bolo ;)</h2>`;
    } else {
        conteudo.innerHTML = `<h2 style='text-align: center; margin-top: 10px; color: red;'>NÃO >:( </h2>`;
    }
    controle++
    if(controle == 5){
        escondido.style.left = '-5px'
        escondido.style.transition = '2s'
    }   
}


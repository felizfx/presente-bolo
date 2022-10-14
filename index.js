let valor = document.querySelector(`#resposta`);
let botao = document.querySelector(`#enviar`);
let conteudo = document.querySelector(`#conteudo`);

function enviarForms(){
    console.log(valor.value)
    if(valor.value == `ovo`){
        conteudo.innerHTML = `<h2 style='text-align: center; margin-top: 10px; color: green;'>Procura atras da geladeria ;)</h2>`;
    } else {
        conteudo.innerHTML = `<h2 style='text-align: center; margin-top: 10px; color: red;'>ERRADO</h2>`;
    }
}


const botoes = document.querySelectorAll("button");

botoes.forEach(function(botao) {
    let curtiu = false;
    
    botao.addEventListener("click", function() {
        console.log("fui clicado");
        let texto = botao.querySelector("span");
        let quantidadeAtual = parseInt(texto.textContent, 10);

        if (!curtiu) {
            texto.textContent = quantidadeAtual + 1;
            curtiu = true;
        } else {
            texto.textContent = quantidadeAtual - 1;
            curtiu = false;
        }
    });
});
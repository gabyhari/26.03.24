document.addEventListener("DOMContentLoaded", function() {
    var cenario = document.getElementById('cenario');
    var botaoMudarCenario = document.getElementById('botaoMudarCenario');
    var mudouParaCenario2 = false;

    botaoMudarCenario.addEventListener('click', function() {
        if (!mudouParaCenario2) {
            cenario.classList.remove('cenario1');
            cenario.classList.add('cenario2');
            mudouParaCenario2 = true;
            botaoMudarCenario.textContent = "Voltar";
        } else {
            cenario.classList.remove('cenario2');
            cenario.classList.add('cenario1');
            mudouParaCenario2 = false;
            botaoMudarCenario.textContent = "Mudar Cenário";
        }
    });
});
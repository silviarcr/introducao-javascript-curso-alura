// var pacientes = document.querySelectorAll(".paciente");


// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("fui clicado com duplo clique");
//         this.remove();
//     });
// });

//código acima só remove os pacientes que já estavam na lista
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function (event) {
   event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500)

});
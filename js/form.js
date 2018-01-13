var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    //var pacienteTr = montaTr(paciente);
    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
      //  var mensagemErro = document.querySelector("#mensagem-erro");
        exibeMensagenDeErro(erros);
        return;
    }

   // var tabela = document.querySelector("#tabela-pacientes");

    //tabela.appendChild(pacienteTr);

    adicionaPacienteNaTabela(paciente);
   
    form.reset();
    
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});


function exibeMensagenDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function calculaImc(peso, altura) {

    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // var nomeTd = montaTd(paciente.nome, "info-nome");
    // var pesoTd = montaTd(paciente.peso, "info-peso");
    // var alturaTd = montaTd(paciente.altura, "info-altura");
    // var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    // var imcTd = montaTd(paciente.imc, "info-imc");


    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd);

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    //  console.log(paciente.imc);

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add("classe");

    return td;

}

function validaPaciente(paciente) {
    // if (paciente.altura < 3.0 && paciente.altura >= 0) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }
    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }
    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }


    if (!validaPeso(paciente.peso)) erros.push("Peso é inválido");
    //     // return true;
    //     return "";
    // }
    // else {
    //     // return false;
    //     // return "Peso é inválido";


    if (!validaAltura(paciente.altura)) erros.push("Altura é inválida");

    return erros;

}


function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

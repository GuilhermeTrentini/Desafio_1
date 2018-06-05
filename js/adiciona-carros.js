var botaoAdicionar = document.querySelector("#adicionar-carros");

botaoAdicionar.addEventListener("click", function(){

    var form = document.querySelector("#form-adicionar");

    var carros = obtemCarrosFormulario(form);

    var erros = validaCampos(carros);

    if (erros.length > 0){
        exibeMensagensErro(erros);
        return;
    }

    adicionaCarroNaTabela(carros);

    console.log(carros);

    //form.reset();
});

function exibeMensagensErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa erros
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        li.classList.add("erros");
        ul.appendChild(li);
    });
}  

function adicionaCarroNaTabela(carros){
    var carroTr = montaTr(carros);
    var tabela = document.querySelector("#tabela-carros");
    tabela.appendChild(carroTr);
}

function obtemCarrosFormulario(form){
    
    var carros = {
        marca: form.marca.value,
        modelo: form.modelo.value,
        ano: form.ano.value,
        kilometragem: form.kilometragem.value,
        descricao: form.descricao.value
    }
    return carros;
}

function montaTr(carros){
    var carroTr = document.createElement("tr");
    carroTr.classList.add("carros");

    carroTr.appendChild(montaTd(carros.marca, "info-marca"));
    carroTr.appendChild(montaTd(carros.modelo, "info-modelo"));
    carroTr.appendChild(montaTd(carros.ano, "info-ano"));
    carroTr.appendChild(montaTd(carros.kilometragem, "info-kilometragem"));
    carroTr.appendChild(montaTd(carros.descricao, "info-descricao"));

    return carroTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}
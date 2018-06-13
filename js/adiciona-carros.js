var botaoAdicionar = document.querySelector("#adicionar-carros");

botaoAdicionar.addEventListener("click", function(){

    var form = document.querySelector("#form-adicionar");

    var carros = obtemCarrosFormulario(form);

    var erros = validaCampos(carros);

    if (erros.length > 0){
        //var campoObrigatorio = document.querySelector(".invisivel");
        //campoObrigatorio.classList.remove("invisivel");
        
        exibeMensagensErro(erros);

        return;
    }

    adicionaCarroNaTabela(carros);
    var limpaErro = document.querySelector("#mensagens-erro");
    limpaErro.innerHTML = "";

    //form.reset();
});

function exibeMensagensErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //limpa erros
    erros.forEach(function(erros){
        var li = document.createElement("li");
        li.textContent = erros;
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
    
    var botaoRemover = document.createElement("button");
    botaoRemover.setAttribute("class", "remover");
    botaoRemover.innerText = "Remover";
    carroTr.appendChild(montaTd(carros.botaoRemover, "info-remover", botaoRemover));

//removerCarro sendo posicionada sempre que cria um novo campo
    botaoRemover.addEventListener("click", function(event){ 
        removerCarro(this); //this é quem chamou evento click, no caso "botaoRemover"
    
    });

    return carroTr;
}

function montaTd(dado,classe, tipo){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    if (tipo != null)
    td.appendChild(tipo);

    return td;
}

function removerCarro(element){

    element.parentNode.parentNode.remove();
}

function criaAno(){
var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear(); 
var anoInicial = 1980;
var campoAno = document.querySelector("#ano");

    for(var i = anoInicial; i <= anoAtual; i++){
        var criaOption = document.createElement("option");
        
        campoAno.appendChild(criaOption);
        criaOption.innerText = i;
    };	
}
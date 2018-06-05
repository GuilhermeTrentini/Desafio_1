function validaCampos(carros){
    var erros = [];
    if (carros.marca.length == 0){
        erros.push("O campo marca não pode ficar em branco!");
    }
    if (carros.modelo.length == 0){
        erros.push("O campo modelo não pode ficar em branco!");
    }
    if (carros.ano.length == 0){
        erros.push("O campo ano não pode ficar em branco!");
    }
    if (carros.ano < 1900 || carros.ano > 2018){
        erros.push("O campo ano não pode ser menor que 1900 e nem maior que o ano atual!");
    }
    return erros;
}
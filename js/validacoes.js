function validaCampos(carros){
    var logAno = false;
    var erros = [];
    
    if (carros.marca.length == 0){
        erros.push("O campo marca não pode ficar em branco!");
            $("#marca-hide").show();
    }else{
        $("#marca-hide").hide();
    }
    if (carros.modelo.length == 0){
        erros.push("O campo modelo não pode ficar em branco!");
        $("#modelo-hide").show();
    }else{
        $("#modelo-hide").hide();
    }
    /*if (carros.ano.length == 0){
        logAno = true;
        erros.push("O campo ano não pode ficar em branco!");
    }
    if (!logAno){
        if (carros.ano < 1900 || carros.ano > 2018){
            erros.push("O campo ano não pode ser menor que 1900 e nem maior que o ano atual!");
        }
    }*/
    return erros;
}

$(document).ready(function(){
    $(".label-hide").hide();
});
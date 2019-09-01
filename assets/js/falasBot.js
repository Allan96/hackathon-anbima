function ConversaBot() {
    console.log(perguntaId);
    mostrarPergunta = true;
    $('.inputs').html('');
    i = 0;
    if ($.data[perguntaId]["name"] != 'none') {
        var quantidadeDeFrases = $.data[perguntaId]["pergunta"].length;
        while (i <= quantidadeDeFrases) {
            if (i < quantidadeDeFrases) {
                if (i == 0 && respostaTrue == false) {
                    InsereFalaComAvatar($.data[perguntaId]["pergunta"][i], idBalao);
                    idBalao++;
                } else {
                    InsereFala($.data[perguntaId]["pergunta"][i], idBalao);
                    idBalao++;
                }

            } else if (i == quantidadeDeFrases) {
                InsereInput($.data[perguntaId]["type"], $.data[perguntaId]["buttons"], $.data[perguntaId]["resposta"], $.data[perguntaId]["placeholder"], $.data[perguntaId]["name"]);
                perguntaId++;
                irparaConversa();
            }

            i++;
        }
        respostaTrue = false;
    } else {
        setTimeout(function() {
            window.location.href = "./escolher-objetivo.html";
        }, 200);
    }
}

function ConversaResposta(resposta) {
    InsereFalaComAvatar(resposta, idBalao);
    respostaTrue = true;
    idBalao++;

}

function InsereFalaComAvatar(frase, idBalao) {
    setTimeout(function() {
        $('.chatBalaoBot').animate({
            opacity: 1,
            'bottom': '0px',
        }, 400);
        $('.' + idBalao).append(frase).append('<span class="horaBalao">' + moment().format('LT') + '</span>');
        irparaConversa();

    }, 500);
    $('#chat').append('<div class="col-12 col-sm-8 chatBalaoBot"><img src="assets/images/Elli.png" alt=""><span class="balao ' + idBalao + '"></span></div>');
}

function InsereFala(frase, idBalao) {
    setTimeout(function() {
        $('.chatBalaoBot').animate({
            opacity: 1,
            'bottom': '0px',
        }, 400);
        irparaConversa();

    }, 550);


    $('#chat').append('<div class="col-12 col-sm-8 chatBalaoBot"><span class="balao ' + idBalao + '"></span></div>');
    $('.' + idBalao).append(frase).append('<span class="horaBalao">' + moment().format('LT') + '</span>');
}

function InsereFalaUser(frase, idBalao) {
    $('.inputs').html('');
    $('#chat').append('<div class="offset-sm-4 col-12 col-sm-8 chatBalaoUser"> <img src="assets/images/avataruser.png" alt=""><span class="balao ' + idBalao + '"></span></div>');
    $('.chatBalaoUser').animate({
        opacity: 1,
        'bottom': '0px',
    }, 600);
    $('.' + idBalao).append(frase).append('<span class="horaBalao">' + moment().format('LT') + '</span>');

}
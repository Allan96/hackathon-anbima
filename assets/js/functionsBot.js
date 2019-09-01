function MascaraNosCampos() {
    $('input[name="ganhos"]').mask('000.000.000.000.000,00', { reverse: true });
}

function irparaConversa() {
    $('#ChatBallons').animate({
        scrollTop: $(this).height() + 99999999999
    }, 0);
}

function InsereInput(type, buttons, response, placeholder, name) {
    if (type == 'buttons') {
        o = 0;
        while (o < buttons.length) {
            $('.inputs').append('<button class="inputButton btn btn-primary" value="' + buttons[o] + '">' + buttons[o] + '</button>');
            o++;
        }
    } else if (type == 'input') {
        $('.inputs').append('<div class="input-group"><input type="text" name=' + name + ' class="form-control" placeholder="' + placeholder + '"  maxlength="80"><div class="input-group-prepend"><button class="inputText btn btn-outline-secondary" type="button">Ok</button></div></div>');
    } else if (type == 'range') {
        var valorMax = parseInt(localStorage.getItem('ganhos').replace('.', '')) * 0.5;
        $('.inputs').append('<div class="input-group"><span class="output">30</span><input type="range" value="30" min="30"  max="' + valorMax + '" onchange="valorRange(this.value)" name=' + name + ' class="form-control custom-range" placeholder="' + placeholder + '"><div class="input-group-prepend"><button class="inputText inputRange btn btn-outline-secondary" type="button">Ok</button></div></div>');
    }

    $('.inputButton').click(function() {
        var valorInput = $(this).val();
        localStorage.setItem(name, valorInput);
        InsereFalaUser(valorInput, idBalao);
        idBalao++;
        ConversaResposta(response);
        ConversaBot();
        irparaConversa();
    });

    $('.inputText').click(function() {
        var valorInput = $('input').val();
        localStorage.setItem(name, valorInput);
        if (valorInput.length >= 2) {
            InsereFalaUser(valorInput, idBalao);
            idBalao++;
            ConversaBot();
        } else {
            InsereFalaComAvatar(response, idBalao);
            idBalao++;
        }
        $('input[name="' + name + '"]').val(valorInput);
        irparaConversa();
    });
    MascaraNosCampos();
    if ($(window).width() >= 768) {
        $('input[name="' + name + '"]').focus();
    }
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "Enter") {
        $('.inputText').trigger('click');
    }
});

function valorRange(left) {
    $('.output').html(left);
}

$(document).ready(function() {
    respostaTrue = false;
    idBalao = 0;
    perguntaId = 0;
    setTimeout(function() {
        $.getJSON("./assets/data.json", function(response) {
            $.data = response;
            ConversaBot();

        });
    }, 200);

});
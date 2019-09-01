function changeMoney(val) {
    $('.money').html('R$' + val + ',00');
}


$('.onboarding').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false,
    pageDots: true,

});
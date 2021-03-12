$(document).ready(function(){

    $('.gotopbtn').click(function(){
        $('body,html').animate({
            scrollTop: '0px'
        }, 300);
    });
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ){       
            $('.gotopbtn').slideDown(300);
        } else {
            $('.gotopbtn').slideUp(300);
        }
    });
});
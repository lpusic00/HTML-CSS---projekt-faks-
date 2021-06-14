$(document).ready(function(){

    $('.m').on('click',function (){
        $(this).toggleClass('active');
        $('.overlay').toggleClass('m-open')
    })
    
    $('.nav a').on('click', function(){
        $('.m').removeClass('active');
        $('.overlay').removeClass('m-open')
    })

    var navBar = $('.nav');
    $(window).scroll(function(){
        var elementTarget = $('#story');
        if(window.scrollY >= elementTarget.outerHeight()){
                $('.nav').addClass('nav-sticky');
            } 
        else {
                $('.nav').removeClass('nav-sticky'); 
            }  
    })
 })
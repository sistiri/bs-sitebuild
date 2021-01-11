$(window).scroll(function(){
    let scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(0, 0, 0, 0.4)');
    }
});
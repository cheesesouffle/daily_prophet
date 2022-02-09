$(document).ready(function(e){
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling:true,
        scrollHorizontally: true,
        loopBottom: true,
        loopTop: true,
        navigation: false,
        slidesNavigation: true,
        continuousVertical: true,
        afterLoad: function(anchorLink, index){
            console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
        },
        onLeave: function(index, nextIndex, direction){
            console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);
        },
    });


    // one
    $('.body03-card').click(function(){
        $('.body03-video').stop().fadeIn()
        $('.one-back').addClass('blur-it')
    });
    $('.body03-video').click(function(){
        $(this).stop().stop().fadeOut()
        $('.one-back').removeClass('blur-it')
    });

    $('.body-right-02').click(function(){
        $('.right02-front').addClass('frontClick')
        $('.right02-back').addClass('backClick')
    });
    $('.body-right-02').mouseleave(function(){
        $('.right02-front').removeClass('frontClick')
        $('.right02-back').removeClass('backClick')
    });

    // two
    $('.two-left').mouseenter(function(){
        $('.two-left-body_text').stop().css({'animation' : 'two-left-body forwards 3s'})
    });
    $('.two-left').mouseleave(function(){
        $('.two-left-body_text').stop().css({'animation' : 'two-left-body_back forwards 1.5s'})
    });

    $('.two-right-top').click(function(){
        $('.two-right-top_video').stop().fadeIn()
    });
    $('.two-right-top_video').click(function(){
        $(this).stop().fadeOut()
    });
    
    // three
    var slideIndex = 0;
    setInterval(function(){
        if(slideIndex < 2){slideIndex ++;}
        else{slideIndex = 0;}
        var slidePosition = slideIndex * (-100)+"%";
        $('.three-center-top').animate({left : slidePosition},400)
    },3000);

});
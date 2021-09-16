
$('.btn').click(function(){
    $('nav, .menu-btn').css({
        transform:'translateX(0)'
    })
})
$('.menu-btn').click(function(){
    $('nav, .menu-btn').css({
        transform:'translateX(100%)'
      
    })
  
})

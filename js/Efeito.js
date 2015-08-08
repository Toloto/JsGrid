$(document).ready(function(){
 $('.foto').each(function(){
  $(this).click(function(event){
    event.preventDefault();
    if (!$(this).is(':animated')){
      $('.foto').hide();
      if ($(this).attr('width')>100){
        $(this).attr({width:100,height:100});
        $('.foto').show();
         // $('.abre-fecha').text('Clique para ampliar');
        }else{
          $(this).attr({width:1100,height:600}).slideToggle(2000);
          //$('.abre-fecha').text('Clique para fechar');
        }
      } if ($('.foto').is(':animated')){$('.foto').css('cursor','default')};
    });
});
});
/*
 $(document).ready(function() {
                $('#galeria').click(function(evt) {
                  evt.stopPropagation();
                  $(this).zoomTo({duration:1000, targetsize:1.0});
                });
                $('.foto').click(function(evt) {
                  evt.stopPropagation();
                  $(this).zoomTo({duration:1000, targetsize:0.6});
                });
            });
*/

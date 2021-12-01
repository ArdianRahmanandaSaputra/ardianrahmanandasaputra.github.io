$('.page-scroll').on('click', function(){
    var tujuan = $(this).attr('href');
 
    var elemenTujuan = $(tujuan);
 
    $('html, body').animate({
        scrollTop:elemenTujuan.offset().top - 50
    });
    e.preventDefault();
 });
 
$(function (){
   $('[data-bs-toggle="popover"]').popover({
       trigger: 'hover focus'
    });
});

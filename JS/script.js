$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky")
      }else{
          $('.navbar').removeClass("sticky")
      }
  })
  
  $(document).ready(function() {
    $(".menu-btn").click(function() {
      $(".menu").toggle();
    });
  });
  
  $('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPauser:true,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:false
      }
    }
  })    

  var btn = $("#back-to-top");
  btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
  });
})

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})

$(function () {

  let palavras  = ["Desenvolvedor", "Freelancer", "Web Design", "Design Responsivo"]
  let inicio    = 0
  let intervalo = 1500


  $('#texto').text(palavras[inicio++])

      setInterval(function() {
          
  }, intervalo);


  setInterval(function() {

        //$('#texto').fadeOut(function() {
          $('#texto').slideUp(function() {

              if (inicio >= palavras.length) {
               inicio = 0;
              }

        //$(this).text(palavras[inicio++]).fadeIn();
          $(this).text(palavras[inicio++]).slideDown();

          });
  }, intervalo);

});
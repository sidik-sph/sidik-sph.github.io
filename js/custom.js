$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, #portofolioa, footer a").on('click', function(event) {

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
  $('html, body').animate({
    scrollTop: $(hash).offset().top - 50
    }, 900,'easeInOutExpo', function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
        });

      }); // END CLICK


  // VALIDASI FORM

    $('#kirim').click(function(event){
      if($('#nama,#pesan,#email').val() == ""){
        event.preventDefault();
        $('#nama').addClass('validasi').attr('placeholder','Nama Masih Kosong');
        $('#email').addClass('validasi').attr('placeholder','Email Masih Kosong');
        $('#pesan').addClass('validasi').attr('placeholder','Pesan Masih Kosong');
        $('#nama,#email,#pesan').click(function(){
          $(this).removeClass('validasi').attr('placeholder','');
        });
      }else if($('#nama').val() == ""){
        $('#nama').addClass('validasi').attr('placeholder','Nama Masih Kosong');
        event.preventDefault();
        $('#nama').click(function(){
          $('#nama').removeClass('validasi').attr('placeholder','');
        });
      }else if($('#email').val() == ""){
        $('#email').addClass('validasi').attr('placeholder','Email Masih Kosong');
        event.preventDefault();
        $('#email').click(function(){
          $('#email').removeClass('validasi').attr('placeholder','');
        });
      }else if($('#pesan').val() == ""){
        $('#pesan').addClass('validasi').attr('placeholder','Pesan Masih Kosong');
        event.preventDefault();
        $('#pesan').click(function(){
          $('#pesan').removeClass('validasi').attr('placeholder','');
        });
      }else{
        $('#nama,#email,#pesan').val("").removeClass('validasi').attr('placeholder','');
        return true;
      }

    });



      $('#batal').click(function(){
        $('#nama,#email,#pesan').removeClass('validasi').attr('placeholder','');
      });

      $('label').css('color','#296496');

      $(window).scroll(function() {
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    }); //END SCROLL

    $(window).scroll(function() {
    $(".munculanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 700) {
          $(this).addClass("muncul");
        }
    });
  }); //END SCROLL

  $('#sensor').click(function(){
    // $("#poto").attr("src","img/sensor.png");
    if($("#poto").attr("src") === "img/profil.png"){
      $("#poto").attr("src","img/sensor.png");
      $(this).text("Lulus Sensor")
    }else{
      $("#poto").attr("src","img/profil.png");
      $(this).text("Sensor Wajah");

    }
  })

  })

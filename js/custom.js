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
      });
  })

  // VALIDASI FORM

  function validasi(){
nama = document.getElementById('nama').value,
        email= document.getElementById('email').value,
        pesan= document.getElementById('pesan').value;

        if(nama == "" || nama == null){
          peringatan("Nama masih kosong !");
          return false;
        }else if(email == "" || email == null){
          peringatan("Email Masih Kosong");
          return false;
        }else if(pesan == "" || pesan == null){
          peringatan("Pesan Masih Kosong");
          return false;
        }else{
          return true;
        }
  }

  function peringatan(isi){
    peringatan = document.getElementById('peringatan');
    var isiperingatan = document.getElementById('isiperingatan');
    peringatan.style.display = "block";
    isiperingatan.innerHTML = isi;
  }

  function klik(){
    peringatan.style.display = "none";
  }
  var tutup = document.getElementById('tutup');
  tutup.onclick = klik;

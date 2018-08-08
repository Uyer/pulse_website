//$('main').css('display', 'none');
/*jshint multistr: true */
$(document).ready(function() {

  //SCROLL REVEAL //

window.sr = ScrollReveal({ reset: true });

var nodeList = document.querySelectorAll('#about-section,.artist-img,.artist-section,.stream-desc,.desc-titulo,.stream-title,.vinyl-img,.label-desc, .sc-player, .btn, .bio-info, .bio-text, #about-texto, #a_wrapper,.form-wrapper,.home_wrap,#radio,.tipo-radio,.radio-cuadro,.label-title,.titulo-foto,.datos-contacto');

sr.reveal(nodeList,{
  duration: 1250
}, 100);

  // GALERIA FOTOS

for(var j = 0; j < galeria.length; ++j ) {
  $("#galeria-fotos").hide().fadeIn(600).append("\
  <div class='col-lg-4 col-md-6 col-12'>\
  <a class='d-block mb-4 h-100 mx-auto' href='" + galeria[j].url + "' target='_blank'>\
    <img class='img-fluid img-thumbnail' src='" + galeria[j].pic + "'>\
    <div class='foto_title pt-3'>\
      <span>" + galeria[j].title + "</span>\
      <br>\
      <small class='foto-data'>" + galeria[j].num_fotos + "</small>\
    </div>\
  </a>\
  </div>\
");
}

// VIDEO SECTION

for(var i = 0; i < vids.length; ++i ) {
  $("#vid-thumbs").hide().fadeIn(600).append("\
  <div class='col-lg-4 col-md-6 col-6'>\
  <a class='d-block mb-4 h-100 video-link' data-toggle='modal' data-src='" + vids[i].url + "'data-target='#vidModal'>\
    <img class='img-fluid img-thumbnail' src='" + vids[i].pic + "'>\
    <div class='vid_info pt-2'>\
      <span>" + vids[i].title + "</span>\
      <br>\
      <small class='vid-data'>" + vids[i].videodata + "</small>\
    </div>\
  </a>\
  </div>\
");
}

var $videoSrc;  
$('.video-link').click(function() {
    $videoSrc = $(this).data( "src" );
});
console.log($videoSrc);

  
  
// when the modal is opened autoplay it  
$('#vidModal').on('shown.bs.modal', function (e) {
    
// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
$("#video").attr('src',$videoSrc + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1" ); 
});
  
  
// stop playing the youtube video when I close the modal
$('#vidModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src',$videoSrc); 
}); 

  // Add slideDown animation to Bootstrap dropdown when expanding.
  $('.nav-item').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.nav-item').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

 // SLICK //
 $('.slider-for').slick({
});

//JS FORM VALIDATION //

  $('#form_registro').validate({
    rules: {
      nombre:  {
        required: true
      },
      apellido: {
        required: true
      },
      fecha_nac:  {
        required: true,
        dateISO: true
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      nombre: "Escriba su nombre",
      apellido: "Escriba su apellido",
      fecha_nac: "Escriba su fecha de nacimeinto correctamente",
      email: "Escriba su email"
    }
  });


  $('#form_contacto').validate({
    rules: {
      nombre: {
        required: true
      },
      apellido: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      mensaje: {
        required: true,
        maxlength: 50
      }

    },
    messages: {
      first_name: "Por favor escriba su nombre",
      last_name: "Por favor escriba su apellido",
      email: "Por favor escriba su email",
      mensaje: "Escriba un mensaje"
    }
  });

  //WebRadio Pulse

  $('#webradio').mediaelementplayer({
    alwaysShowControls: true,
    features: ['playpause','volume','progress'],
    audioVolume: 'horizontal',
    defaultAudioWidth: 300,
    setDimensions: true,
    enableAutosize: false,
});
});
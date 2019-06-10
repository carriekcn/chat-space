$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    //message = $('.input-box__text').val();
    console.log(this)
    var formData = new FormData(this);
    //var url = (window.location.href);
  })
})
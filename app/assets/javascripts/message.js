$(function(){
  function buildMessage(message){
    var html = `<div class="message">
                  <div class="upper-info">
                    <p class="upper-info__user">${message.name}</p>
                    <p class="upper-info__date">${message.created_at}</p>
                  </div>
                  <p class="message__text">${message.content}</p>
                  </div>
                </div>`   
    return html;
  }
  function scroll() {
    $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages').append(html);
      $('#new_message')[0].reset();      
      $('.new-message__submit-btn').prop('disabled', false);
      scroll()
    })

    .fail(function(){
      alert('error');
      $('.new-message__submit-btn').prop('disabled', false);
    });
  })
});
$(function(){
  function buildMessage(message){

    var html = `<div class="message">
                  <div class="upper-info">
                    <p class="upper-info__user">${message.user_name}</p>
                    <p class="upper-info__date">${message.created_at}</p>
                  </div>
                  <p class="message__text">${message.content}</p>
                  </div>
                  ${image}
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

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id");

      $.ajax ({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id}
      })
      .done(function(messages){
        var insertHTML = '';
        messages.forEach(function(message){
          insertHTML = buildMessage(message);
          $('.messages').append(insertHTML);  
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function(){
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
});
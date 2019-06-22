$(function(){
  function buildMessage(message){

    var html = `<div class="message">
                  <div class="upper-info">
                    <p class="upper-info__user">${message.user_name}</p>
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

  //自動更新
  // $(function(){
  //   setInterval(update, 5000);
  // })

  var reloadMessages = function() {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      //今いるページのリンクが/groups/グループID/messagesのパスとマッチすれば以下を実行。
      //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      var last_message_id = $('.message:last').data("message-id");
    
      //var presentHTML = window.location.href
      //var presentHTML = '/groups/api/messages';
      $.ajax ({
        url: "api/messages",
        type: 'get',
        dataType: 'json',
        data: {last_id: last_message_id}
        // processData: false,
        // contentType: false
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
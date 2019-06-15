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
    console.log("bbbbbb");
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    //console.log(this);
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      console.log("done");
      console.log(message);
      var html = buildMessage(message);
      console.log(html);
      // debugger
      //console.log(message);
      scroll()
    })
    .fail(function(){
      console.log("fail");
    });
  })
});
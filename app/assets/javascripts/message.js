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

  $('#new_message').on('submit', function(e){
    console.log("bbbbbb");
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
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
      console.log("done")
      console.log(message)
      var html = buildMessage(message);
      console.log(html);
      // debugger
      //console.log(message);
    })
    .fail(function(){
      console.log("fail")
    });
  })
});

// $(document).on('turbolinks:load', function(){
//   function buildHTML(message) {
//     var content = message.content ? `${ message.content }` : "";
//     var img = message.image ? `<img src= ${ message.image }>` : "";
//     var html = `<div class="message" data-id="${message.id}">
//                   <div class="upper-info">
//                     <p class="upper-info__user">
//                       ${message.user_name}
//                     </p>
//                     <p class="upper-info__date">
//                       ${message.date}on
//                     </p>
//                   </div>
//                   <p class="message__text">
//                     <div>
//                     ${content}
//                     </div>
//                     ${img}
//                   </p>
//                 </div>`
//   return html;
//   }

//   function scroll(){
//     $('.messages').animate({scrollTop: $('.message')[0].scrollHeight});
//   }

//   $('#new_message').on('submit', function(e){
//     e.preventDefault();
//     var formData = new FormData(this);
//     var url = $(this).attr('action')
//     $.ajax({  
//       url: url,
//       type: 'POST',
//       data: formData,
//       dataType: 'json',
//       processData: false,
//       contentType: false
//     })
//     .done(function(data){
//       var html = buildHTML(data);
//       $('.messages').append(html);
//       $('#message_content').val('');
//       $('.new-message__submit-btn').prop('disabled', false);
//       scroll()
//     })
//     .fail(function(data){
//       alert('エラーが発生したためメッセージは送信できませんでした。');
//       $('.new-message__submit-btn').prop('disabled', false);   
//     })
//   })
// })
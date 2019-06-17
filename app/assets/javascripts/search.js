$(function(){
  $("#user-search-field").on("keyup", function(){
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })
    .done(function(users){
      $("#user_search_result").empty();
      if (users.length !== 0){
        users.forEach(function(user){
          appendUser(user);
        });
      }
      else{
        appendErrMsgToHTML("一致するユーザはいません");
      }
    })
    .fail(function(){
      alert('error');
    });
  });
});
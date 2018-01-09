$(document).ready(function () {
  $('.my-Btn').click(function () {
    $('.my-Modal').modal();
  });

  $('.nav-pills a').click(function () {
    $(this).tab('show');
  });
});  
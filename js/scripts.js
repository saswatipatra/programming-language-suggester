$(document).ready(function() {
  $("#name-form").submit(function(event) {
    var inputName = $("input#name").val();
    var inputAddress1 = $("input#address1").val();
    var inputAddress2 = $("input#address2").val();
    var inputCity = $("input#city").val();
    var inputState = $("input#state").val();
    var inputZip = $("input#zip").val();
    var inputCountry = $("input#country").val();
    var date = $("#date").val();
    var item = $("#item").val();
    var size = $("input:radio[name=size]:checked").val();

    $(".name").text(inputName);
    $(".address1").text(inputAddress1);
    $(".address2").text(inputAddress2);
    $(".city").text(inputCity);
    $(".state").text(inputState);
    $(".zip").text(inputZip);
    $(".country").text(inputCountry);
    $(".date").text(date);
    $(".item").text(item);
    $(".size").text(size);

    $("#receipt").show();

    event.preventDefault();
  });
});

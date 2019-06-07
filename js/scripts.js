$(document).ready(function() {
  $("button#continue").click(function() {
    $("body").addClass("continue");
  });
  $("#name-form").submit(function(event) {
    var inputName = $("input#name").val();
    var age = $("#age").val();
    var education = $("input:radio[name=education]:checked").val();
    var code = $("input:radio[name=code]:checked").val();
    var intrest = $("input:radio[name=intrest]:checked").val();
  var experience = $("input:radio[name=experience]:checked").val();
    $(".name").text(inputName);

    if(intrest===yes) {
      if (code===No && experience ===No){
        $("#begginer").show();
      }else if (code===Yes && experience===Yes) {
        $("#expert").show();
      }else if (code===Yes && experience===NO) {
        $("#intermid").show();
      }else if (code===NO && experience== Yes) {
        $("#bluff").show();
      }
    }else {
      $("#noprograming").show();
    }

    $("#receipt").show();

    event.preventDefault();
  });
});

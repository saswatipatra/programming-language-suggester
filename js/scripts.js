function surveyFormButton()
{
  $(".status").hide();
  // removeClass(".background");
  $("#surveyForm").show();
  $(".mainPageButton").show();
  $(".goToSuveryButton1").show();
}
function mainPageButton()
{
  $(".status").hide();
  $(".header").show();
  $(".goToSuveryButton").show();
}

$(document).ready(function()
{
  $(".status").hide();
  $(".goToSuveryButton").show();
  $(".header").show();
  $("#surveyForm").submit(function(event) {
    event.preventDefault();
    var inputName = $("input#name").val();
    var age = $("#age").val();
    var education = $("input:radio[name=education]:checked").val();
    var code = $("input:radio[name=code]:checked").val();
    var intrest = $("input:radio[name=intrest]:checked").val();
    var experience = $("input:radio[name=experience]:checked").val();
    $(".name").text(inputName);
    $("#surveyForm").hide();
    $(".output").show();
    $("#results").show();

    if(intrest==="yes" && code==="no" && experience ==="no"){
        $("#begginer").show();
      }else if(intrest==="yes" && code==="yes" && experience==="yes"){
       $("#expert").show();
      }else if(intrest==="yes" && code==="yes" && experience==="no"){
        $("#intermid").show();
      }else if(intrest==="yes" && code==="no" && experience== "yes"){
        $("#bluff").show();
      }else{
        $("#noprograming").show();
      }
  });
});

$(document).ready(function(){

  $("#form-survey").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var mode = $(this).val();

      $("#surveyResults").append(mode+"<br>");
      $("#surveyResults").show();
    });
    $(".form-group").slideUp();
  });


});

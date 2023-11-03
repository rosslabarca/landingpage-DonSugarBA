$(document).ready(function() {
    

    $("form").submit(function(event) {
     
      var nombre = $("#nombre").val();
      var email = $("#email").val();
      var asunto = $("#asunto").val();
      var mensaje = $("#mensaje").val();

      if (!nombre) {
        $("#nombre").next(".error").remove();
        $("#nombre").after('<strong class="error">Campo obligatorio</strong>');
        event.preventDefault();
      } else {
        $("#nombre").next(".error").remove();
      }

      if (!email) {
        $("#email").next(".error").remove();
        $("#email").after('<strong class="error">Campo obligatorio</strong>');
        event.preventDefault();
      } else {
        $("#email").next(".error").remove();
      }


      if (!asunto) {
        $("#asunto").next(".error").remove();
        $("#asunto").after('<strongclass="error">Campo obligatorio</strong>');
        event.preventDefault();
      } else {
        $("#asunto").next(".error").remove();
      }

      if (!mensaje) {
        $("#mensaje").next(".error").remove();
        $("#mensaje").after('<strong class="error">Campo obligatorio</strong>');
        event.preventDefault();
      } else {
        $("#mensaje").next(".error").remove();
      }

    });
  });
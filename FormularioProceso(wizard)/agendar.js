
//Validar los campos

$(document).ready(function() {
 
  
    $(".next-btn").click(function() {
      let todos = true
      $(this).parent().children('fieldset').each(function(i, e) {
        if (!$(e).children('input').is(':checked')) {
          todos = false
        }
      })
      if (todos) {
        f_anterior = $(this).parent();
        f_siguiente = $(this).parent().next();
        f_siguiente.show();
        f_anterior.hide();
      } else {
        alert("complete campo");
        e.preventDefault();
      }
    });
  
    $(".back-btn").click(function() {
      f_anterior = $(this).parent();
      f_siguiente = $(this).parent().prev();
      f_siguiente.show();
      f_anterior.hide();
    });
  
    $("#formulario").submit(function(event) {
      if (!$('input[name="adjunto"]').is(':checked')) {
        alert("complete campo");
        e.preventDefault();
      } 
    });
  });


//Recolectar datos y generar resumen

const btn = document.querySelector(".btn");
const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const step3 = document.querySelector("#step-3");
const step4 = document.querySelector("#step-4");
const step5 = document.querySelector("#step-5");
const summary = document.querySelector("#summary");

//agregar evento onclick al botón siguiente
btn.addEventListener("click", function() {
  // recopilar datos del primer paso
 
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let categoria = document.querySelector("#categoria").value;
    let cantidad = document.querySelector("#cantidad").value;
    let fecha = document.querySelector("#start").value;

    let calle = document.querySelector("#calle").value;
    let altura = document.querySelector("#altura").value;
    let portero= document.querySelector("#portero").value;

     // mostrar resumen en el quinto paso
  summary.innerHTML = `Email: ${email}<br>Password: ${password} 
  <br>Categoria: ${categoria}<br>Cantidad: ${cantidad}<br>fecha: ${fecha}
  <br>Calle: ${calle}<br>Altura: ${altura}<br>Portero: ${portero}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "none";
  step3.style.display = "none";
  step4.style.display = "none";
  step5.style.display = "block";
});


//Exportar a PDF
function genPDF(){
    var doc=new jsPDF();
    let mensaje=document.getElementById('summary').value;
    doc.text(20,20,mensaje);
    doc.addPage();
    doc.text(20,20,'Resumen');
    doc.save('Test.pdf');
}

  
   // Bonton home//

   $(document).ready(function(){

    $('.boton').click(function(){
      $('body, html').animate({
        scrollTop: '0px'
      }, 300);
    });
  
  });
  

    


























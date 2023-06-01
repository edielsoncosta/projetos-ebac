$(document).ready(function() {
    $('form').on('submit', function(e) {
      e.preventDefault();
    });
  
    $('header button').click(function() {
      let valorAdd = $('#tarefa-add').val();
 
      var novoItem = $("<li></li>").text(valorAdd);
      $("#lista").append(novoItem);
        
      nomeNovo = valorAdd
      validando()
    });
  });
  
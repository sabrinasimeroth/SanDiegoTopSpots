$(document).ready(function(){
  $.getJSON('topspots.json', function(data){

    //Create a table from json and append each row to the html table
    $.each(data, function(i, b){
      $('#tsTable').append('<tr><td>' + b.name + '</td>' +
      '<td>' + b.description + '</td>' +
      '<td>' + '<a href="https://www.google.com/maps/place/' + b.location + '">' + 'Location Map' + '</a></td></tr>');
    });

  })

})

$(document).ready(function(){
  $.getJSON('topspots.json', function(data){

    //Create a table from json and append each row to the html table
    $.each(data, function(i, topspot){
      $('#tsTable').append('<tr><td>' + topspot.name + '</td>' +
      '<td>' + topspot.description + '</td>' +
      '<td>' + '<a id="mapLink" href="https://www.google.com/maps/place/' + topspot.location +
      '"><button type="button" class="btn btn-primary">' + 'Open Map' + '</button></a></td></tr>');
    });

  })

})

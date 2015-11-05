$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var full_nameInput = $("input#full_name").val();
    var street_addressInput = $("input#street_address").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".full_name").text(full_nameInput);
    $(".street_address").text(street_addressInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    $("#letter").show();

    event.preventDefault();
  });
});

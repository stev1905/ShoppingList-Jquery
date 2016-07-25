$( document ).ready(function() {
	$("#submit").click(function(){
		//alert("Submit button works!!");
		//$("#text").css("background-color", "red");
  		$('.items').append($('<li>', {
         	text: $('#text').val(),
         	$("#text").val(''),
    	});
	});   
});
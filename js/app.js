$( document ).ready(function() {
	$("#submit").click(function(){
		//alert("Submit button works!!")
		$('.items').append('<span class="glyphicon glyphicon-trash"></span>');
  		$('.items').append($('<li>', {
         	text: $('#text').val() ,
    	}));
    	$("#text").val('');
	});
	$('#text').keypress(function(e){
    	if(e.which == 13){ 	
    		$('.items').append('<span class="glyphicon glyphicon-trash"></span>');
    		$('.items').append($('<li>', {
         		text: $('#text').val(),
    		}));
    		$("#text").val('');
    	}
	}); 
});
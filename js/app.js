$( document ).ready(function() {
	$("#submit").click(function(){
		//alert("Submit button works!!")
  		$('.items').append('<li>' + '<input type="checkbox" name="checkbox" id="checkbox"> ' + $('#text').val() + ' <span class="glyphicon glyphicon-trash"></span></li>')
    	$("#text").val('');
    });
	$('#text').keypress(function(e){
	    	if(e.which == 13){ 	
	    	$('.items').append('<li>' + '<input type="checkbox" name="checkbox" id="checkbox"> ' + $('#text').val() + ' <span class="glyphicon glyphicon-trash"></span></li>')
    		$("#text").val('');
		}
    });
});
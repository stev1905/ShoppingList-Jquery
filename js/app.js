$( document ).ready(function() {
		$("#submit").click(function(){
		//alert("Submit button works!!")
	    $('.items').append('<li>' + '<input type="checkbox" name="checkbox" id="checkbox"> ' + $('#text').val() + ' <span class="glyphicon glyphicon-trash" id="icon"></span></li>')
	    $("#text").val('');
	});
		$('#text').keypress(function(e){
      	if(e.which == 13){  
      	$('.items').append('<li>' + '<input type="checkbox" name="checkbox" id="checkbox"> ' + $('#text').val() + ' <span class="glyphicon glyphicon-trash" id="icon"></span></li>')
      	$("#text").val('');
  	}
});
    	$(document).on('change', '[type=checkbox]', function () {
  		if ($('input#checkbox').is(':checked')) {
   	    //alert('THis box is checked')
    	$(this).parent().css("text-decoration", "line-through")
  	}
  		else{
   		//alert('this box is unchecked')
   		$(this).parent().css("text-decoration", "none")
  	}
});
$(document).on('click', '#icon', function () {
		//alert('clicked on trash icon') 
		$(this).parent().remove()
 	});
});
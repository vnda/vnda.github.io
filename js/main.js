$(function(){
	$( "select" )
	  .change(function() {
	    $( "select option:selected" ).each(function() {
	      window.location.href = $( this ).val();
	    });
	  })
 })

$(function(){
	$( "select" )
	  .change(function() {
	    $( "select option:selected" ).each(function() {
	      window.location.href = $( this ).val();
	    });
	  });
	  $( window ).load(function(){
		 	 $( ".tocify-wrapper li" ).each(function() {
		    var texto = $( this ).find( "a" ).text();
		    if( texto == "Liquid para Designers(filtros)" ) {
		    	$( this ).find( "a" ).attr({
		    		"href": "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#standard-filters",
		    		"target":"_blank"
		    	});
		    }
		  });
	  });
 });

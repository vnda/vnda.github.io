$(function(){
	  $( window ).load(function(){
		 	 $( ".tocify-wrapper li" ).each(function() {
		    var texto = $( this ).find( "a" ).text();
		    if( texto == "Liquid para Designers(filtros)" ) {
		    	$( this ).find( "a" ).attr({
		    		"href": "https://github.com/Shopify/liquid/wiki/Liquid-for-Designers#standard-filters",
		    		"target":"_blank"
		    	});
		    }
		    if( texto == "Biblioteca Jquery para validar cpf e cnpj" ) {
		    	$( this ).find( "a" ).attr({
		    		"href": "https://gist.github.com/vagnerolliver/8e60807e5269162a58b7",
		    		"target":"_blank"
		    	});
		    }
		  });
	  });
 });

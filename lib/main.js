  $(function() {
    $( "#headings .heading > a" ).on( "click" , function () {
      var elm = $( this );
      $( "#headings .heading" ).removeClass( "active" );
      $( "#headings .heading ul" ).fadeOut();
      elm.parent().addClass( "active" );
      elm.parent().find( "ul" ).fadeIn();
    });
     $( "#headings .heading a" ).on( "click" , function () {
      var elm = $( this );
      $( "#headings a" ).removeClass( "active" );
      elm.addClass( "active" );
    });
  });

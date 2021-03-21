function update( _v ) {
  document.querySelector( 'input' ).value = _v
}

	function append( _v ) {
		document.querySelector( 'input' ).value += _v
      if ((document.querySelector( 'input' ).value == "00")){
		    document.querySelector( 'input' ).value = "0";
	      }else{
	    if ((document.querySelector( 'input' ).value == "000")){
		    document.querySelector( 'input' ).value = "0";
	      }else{
	    if ((document.querySelector( 'input' ).value == "01")){
		    document.querySelector( 'input' ).value = "1";
	      }else{
	    if ((document.querySelector( 'input' ).value == "02")){
		    document.querySelector( 'input' ).value = "2";
	      }else{
	    if ((document.querySelector( 'input' ).value == "03")){
		    document.querySelector( 'input' ).value = "3";
	     }else{
	    if ((document.querySelector( 'input' ).value == "04")){
		    document.querySelector( 'input' ).value = "4";
	     }else{
	    if ((document.querySelector( 'input' ).value == "05")){
		    document.querySelector( 'input' ).value = "5";
	     }else{
	    if ((document.querySelector( 'input' ).value == "06")){
		    document.querySelector( 'input' ).value = "6";
	     }else{
	    if ((document.querySelector( 'input' ).value == "07")){
		    document.querySelector( 'input' ).value = "7";
	     }else{
	    if ((document.querySelector( 'input' ).value == "08")){
		    document.querySelector( 'input' ).value = "8";
	     }else{
	    if ((document.querySelector( 'input' ).value == "09")){
		    document.querySelector( 'input' ).value = "9";
	     }else{
	    if ((document.querySelector( 'input' ).value == ".")){
        document.querySelector( 'input' ).value = "";
	  }
	  }
	}}}}}}}}}}}


function calc() {
  const v = document.querySelector( 'input' ).value
  try {
    const f = new Function( 'return ' + v )
    update( f().toString() )
}  
  catch( _error ) {
  update( _error )
}
}
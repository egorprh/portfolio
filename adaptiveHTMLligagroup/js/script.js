function myFunction() {
	var x = document.getElementById("myTopnav");

	if(x.className ==="topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}

	var y = document.getElementById("logo");

	if(y.className ==="menuicon") {
		y.className += " responsive";
	} else {
		y.className = "menuicon";
	}
}

function myFunction2() {
	var z = document.getElementById("subMenu");

    if(z.className ==="submenu") {
		z.className += " responsive";
	} else {
		z.className = "submenu";
	}
}

$(document).ready( function() {
    $(".file__upload input[type=file]").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#filename").val(filename);
    });
});

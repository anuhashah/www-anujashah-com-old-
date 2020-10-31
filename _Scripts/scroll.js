        	// When the user scrolls the page, execute myFunction
			window.onscroll = function() {scrollBorder()};

			// Get the header
			var header = document.getElementsByClassName("top");

			//Get active link
			var linkActive = document.getElementsByClassName("active")[0];


			// Add the border to the header when you reach its scroll position. Remove border when you leave the scroll position
			function scrollBorder() 
			{
			  if (window.pageYOffset > 0) {
			  		for (var i=0;i<header.length; i++) 
			  		{
    					 header[i].style.borderBottom = "2px solid #E6E6E6";
    				}
    				linkActive.style.opacity = "0.4";
			  } 
			  else 
			  {
			  	if (window.pageYOffset == 0) {
			  		for (var i=0;i<header.length; i++) 
			  		{
    					 header[i].style.borderBottom = "2px solid transparent";
    				}
			  	}
			  	linkActive.style.opacity = "1";	
			  }
			}
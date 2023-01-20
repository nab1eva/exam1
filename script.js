window.addEventListener("scroll", function () {
	shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
	  navbar.classList.add("navbarshrink");
	} else {
		  navbar.classList.remove("navbarshrink");
	  }
  }

  function openNavbar() {
	document.getElementById("navbar-responsive").style.left = "0";
	// document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
	document.getElementById("navbar-responsive").style.left = "-100%";
	// document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);


  window.addEventListener("scroll", function () {
	toggleBacktop();
  });
  
  let backtop = document.getElementById("backtop");
  
  function toggleBacktop() {
	if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
	  backtop.style.opacity = 1;
	} else {
	  backtop.style.opacity = 0;
	}
  }
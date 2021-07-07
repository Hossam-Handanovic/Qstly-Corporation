 function myFunction() {
     // Declare variables
     var input, filter, ul, li, a, i, txtValue;
     input = document.getElementById('myInput');
     filter = input.value.toUpperCase();
     ul = document.getElementById("myUL");
     li = ul.getElementsByTagName('li');

     // Loop through all list items, and hide those who don't match the search query
     for (i = 0; i < li.length; i++) {
         a = li[i].getElementsByTagName("a")[0];
         txtValue = a.textContent || a.innerText;
         if (txtValue.toUpperCase().indexOf(filter) > -1) {
             li[i].style.display = "";
             li[i].style.opacity = "1";
         } else {
             li[i].style.display = "none";




         }
     }
 }



 /*===================================Button UP and Down===============*/

 const backToTopButton = document.querySelector("#back-to-top-btn");

 window.addEventListener("scroll", scrollFunction);

 function scrollFunction() {
     if (window.pageYOffset > 300) { // Show backToTopButton
         if (!backToTopButton.classList.contains("btnEntrance")) {
             backToTopButton.classList.remove("btnExit");
             backToTopButton.classList.add("btnEntrance");
             backToTopButton.style.display = "block";
         }
     } else { // Hide backToTopButton
         if (backToTopButton.classList.contains("btnEntrance")) {
             backToTopButton.classList.remove("btnEntrance");
             backToTopButton.classList.add("btnExit");
             setTimeout(function() {
                 backToTopButton.style.display = "none";
             }, 250);
         }
     }
 }

 backToTopButton.addEventListener("click", smoothScrollBackToTop);

 // function backToTop() {
 //   window.scrollTo(0, 0);
 // }

 function smoothScrollBackToTop() {
     const targetPosition = 0;
     const startPosition = window.pageYOffset;
     const distance = targetPosition - startPosition;
     const duration = 750;
     let start = null;

     window.requestAnimationFrame(step);

     function step(timestamp) {
         if (!start) start = timestamp;
         const progress = timestamp - start;
         window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
         if (progress < duration) window.requestAnimationFrame(step);
     }
 }

 function easeInOutCubic(t, b, c, d) {
     t /= d / 2;
     if (t < 1) return c / 2 * t * t * t + b;
     t -= 2;
     return c / 2 * (t * t * t + 2) + b;
 };
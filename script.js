"use strict";

//same nav bar on every page
fetch("./nav.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("nav").innerHTML = data;
    });


//same footer on every page
fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}



//highlight current page in navbar
/*
function setNavigation() {
    var path = window.location.pathname; //get current url and assign it to the variable path
    path = path.replace(/\/$/, "");//replace content of var path between the / / with an empty string
    path = decodeURIComponent(path); // set var path equal to a decoded string of the path

    $(".menu a").each(function () { //run the following on each a in the menu ul
        var href = $(this).attr('href'); //set the var href = to the href from the menu a object
        if (path.substring(0, href.length) === href) { //condition: if the substring from the above variable path
            //  is equal to the length of the variable href, then:
            $(this).closest('li').addClass('active'); //add the class "active" to the closest li element
        }
    });
}
/*
the first block of code results in, for the index page example, path = /dimitriantoniou.github.io/index.html.
but console.log(path.substring(0, href.length)) throws an error cause i havent defined href.
above, ive defined var href = $(this).attr('href');
so there is something wrong in my $(this).attr('href') method

the variable definition of var href should assign the href value within the link element with class menu

 */
/*
function setCurrentPage(){
    var path = window.location.pathname; //get the current url
    $(".menu a").each(function(){
        var href= $(this).attr('href');
        if (path === href) {
            $(this).children('li').addClass('active');
        }
    })
}
 */
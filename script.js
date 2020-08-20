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

//highlight current page in navbar

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

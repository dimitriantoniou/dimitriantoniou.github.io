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
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $(".menu a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href) {
            $(this).closest('li').addClass('active');
        }
    });
}

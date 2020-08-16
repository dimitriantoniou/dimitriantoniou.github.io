
/* trying to create a common nav bar file to reference
$(document).ready(function(){
    $("#navbar-frame").load("nav.html");
});
 */

fetch("./footer.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });

fetch("./nav.html")
    .then(response => {
        return response.text()
    })
    .then(data => {
        document.querySelector("nav").innerHTML = data;
    });
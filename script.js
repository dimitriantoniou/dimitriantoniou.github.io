//js for nav bar and menu

//const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas’></i>";
    } else {
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class=’fas’></i>";
    }
}

/* Event Listener */
//toggle.addEventListener("click", toggleMenu, false);

/*DropDown functionality*/
//const items = document.querySelectorAll(".item");
const toggle = document.querySelector("#dropdownlist");

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

/* Event Listeners */
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
}


/* Close Submenu From Anywhere */
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

/* Event listener */
document.addEventListener("click", closeSubmenu, false);

/*current page*/
<script src="http://code.jquery.com/jquery-1.8.3.min.js"></script>
<script>
    $(function(){
    $('a').each(function() {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('current');
        }
    });
});
</script>

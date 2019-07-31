document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var status = ">0";
    var btnScrollToTop = document.querySelector(".scroll-top");
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 0) {
            if (status === ">0") {
                navbar.classList.add("small");
                btnScrollToTop.classList.add("show");
                status = "0";
            }
        } else {
            if (status === "0") {
                navbar.classList.remove("small");
                btnScrollToTop.classList.remove("show");
                status = ">0";
            }
        }
    });
    btnScrollToTop.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    });
    var navItem = document.querySelectorAll(".nav-item");
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].addEventListener("click", function () {
            let activeItem = document.querySelector(".navbar .active");
            activeItem.classList.remove("active");
            this.classList.add("active");

            let sectionID = document.querySelector(".navbar .active").getAttribute("data-target");
            let currentSection = document.querySelector(sectionID);
            let sectionPosition = currentSection.offsetTop;
            window.scrollTo(0, sectionPosition);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var status = ">0";
    var btnScrollToTop = document.querySelector(".scroll-top");

    var resumePosition = document.querySelector('#resume').offsetTop - 50;
    var productsPosition = document.querySelector('#products').offsetTop - 50;
    var contactPosition = document.querySelector('#contact').offsetTop - 50;    

    window.addEventListener("scroll", function () {
        let scrollStatus = "not-ok" ;
        if (window.pageYOffset > 0) {
            if (status === ">0") {
                navbar.classList.add("navbar-small");
                btnScrollToTop.classList.add("show");
                status = "0";
            }
        } else {
            if (status === "0") {
                navbar.classList.remove("navbar-small");
                btnScrollToTop.classList.remove("show");
                status = ">0";
            }
        }
        if (window.pageYOffset >= 0 && window.pageYOffset < resumePosition) {
            if(scrollStatus === "not-ok"){
                for (let i = 0; i < navLink.length; i++) {
                    navLink[i].classList.remove("active");
                }
                navLink[0].classList.add("active");
            }
            scrollStatus = "ok";
        }
        if (window.pageYOffset >= resumePosition && window.pageYOffset < productsPosition) {
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].classList.remove("active");
            }
            navLink[1].classList.add("active");
        }
        if (window.pageYOffset >= productsPosition && window.pageYOffset < contactPosition) {
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].classList.remove("active");
            }
            navLink[2].classList.add("active");
        }
        if (window.pageYOffset >= contactPosition) {
            for (let i = 0; i < navLink.length; i++) {
                navLink[i].classList.remove("active");
            }
            navLink[3].classList.add("active");
        }
    });
    btnScrollToTop.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    });
    var navLink = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLink.length; i++) {
        navLink[i].addEventListener("click", function () {
            let activeLink = document.querySelector(".navbar .active");
            activeLink.classList.remove("active");
            this.classList.add("active");

            let sectionID = document.querySelector(".navbar .active").getAttribute("data-target");
            let currentSection = document.querySelector(sectionID);
            let sectionPosition = currentSection.offsetTop;
            window.scrollTo(0, sectionPosition);

            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    }
});

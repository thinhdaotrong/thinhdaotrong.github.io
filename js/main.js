document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var status = ">0";
    var btnScrollToTop = document.querySelector(".scroll-top");

    var resumePosition = document.querySelector('.resume').offsetTop - 60;
    var productsPosition = document.querySelector('.products').offsetTop - 60;
    var contactPosition = document.querySelector('.contact').offsetTop -60;
    
    window.addEventListener("scroll", function () {
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
        };
        
        if (window.pageYOffset >= 0 && window.pageYOffset < resumePosition) {
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("active");
            }
            navItem[0].classList.add("active");
        }
        if (window.pageYOffset >= resumePosition && window.pageYOffset < productsPosition) {
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("active");
            }
            navItem[1].classList.add("active");
        }
        if (window.pageYOffset >= productsPosition && window.pageYOffset < contactPosition) {
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("active");
            }
            navItem[2].classList.add("active");
        }
        if (window.pageYOffset >= contactPosition) {
            for (let i = 0; i < navItem.length; i++) {
                navItem[i].classList.remove("active");
            }
            navItem[3].classList.add("active");
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

            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    };

    $('.products-list').isotope({
        itemSelector: '.products-item',
        layoutMode: 'fitRows'
    });

    var filterItem = document.querySelectorAll('.products-filter li');
    for (let i = 0; i < filterItem.length; i++) {
        filterItem[i].addEventListener('click', function(){
            for (let j = 0; j < filterItem.length; j++) {
                filterItem[j].classList.remove('active');
            }
            this.classList.add('active');
        })
    }
    $('.products-filter li a').click(function (e) { 
        e.preventDefault();
        let item = $(this).data('item');
        if(item === "all"){
            $('.products-list').isotope({
                filter: '*'
            });
        }
        else {
            $('.products-list').isotope({
                filter: item
            });
        }
    });
});

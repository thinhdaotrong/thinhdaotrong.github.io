document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector(".navbar");
    var status = ">0";
    var btnScrollToTop = document.querySelector(".scroll-top");

    // handle mouse scroll
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


        var resumePosition = document.querySelector('.resume').offsetTop - 60;
        var productsPosition = document.querySelector('.products').offsetTop - 60;
        var contactPosition = document.querySelector('.contact').offsetTop - 60;

        // add effects for ".nav-item" when crolling mouse to the position of the "section"
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

    // handle scroll to top button
    btnScrollToTop.addEventListener("click", function () {
        document.documentElement.scrollTop = 0;
    });

    // handle when click on ".nav-item"
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
        filterItem[i].addEventListener('click', function () {
            for (let j = 0; j < filterItem.length; j++) {
                filterItem[j].classList.remove('active');
            }
            this.classList.add('active');
        })
    }
    $('.products-filter li a').click(function (e) {
        e.preventDefault();
        let item = $(this).data('item');
        if (item === "all") {
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


    // ==========================================================
    // Detect Closest Edge
    function closestEdge(x, y, w, h) {
        var topEdgeDist = distMetric(x, y, w / 2, 0);
        var bottomEdgeDist = distMetric(x, y, w / 2, h);
        var leftEdgeDist = distMetric(x, y, 0, h / 2);
        var rightEdgeDist = distMetric(x, y, w, h / 2);
        var min = Math.min(topEdgeDist, bottomEdgeDist, leftEdgeDist, rightEdgeDist);
        switch (min) {
            case leftEdgeDist:
                return "left";
            case rightEdgeDist:
                return "right";
            case topEdgeDist:
                return "top";
            case bottomEdgeDist:
                return "bottom";
        }
    }

    // Distance Formula
    function distMetric(x, y, x2, y2) {
        var xDiff = x - x2;
        var yDiff = y - y2;
        return (xDiff * xDiff) + (yDiff * yDiff);
    }

    var productsItem = document.querySelectorAll('.products-item');
    var productsList = document.querySelector('.products-list');

    // add effects when has "mouseenter" or "mouseleave" event of ".product-item"
    for (let i = 0; i < productsItem.length; i++) {
        productsItem[i].addEventListener('mouseenter', function (event) {
            this.classList.remove('to-left', 'to-right', 'to-top', 'to-bottom');
            let x = event.pageX - this.offsetLeft - productsList.offsetLeft;
            let y = event.pageY - this.offsetTop - productsList.offsetTop - 100;
            let edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
            switch (edge) {
                case "left":
                    this.classList.add('from-left');
                    break;
                case "right":
                    this.classList.add('from-right');
                    break;
                case "top":
                    this.classList.add('from-top');
                    break;
                case "bottom":
                    this.classList.add('from-bottom');
                    break;
            }

        })
        productsItem[i].addEventListener('mouseleave', function (event) {
            this.classList.remove('from-left', 'from-right', 'from-top', 'from-bottom');
            let x = event.pageX - this.offsetLeft - productsList.offsetLeft + 1;
            let y = event.pageY - this.offsetTop - productsList.offsetTop - 100;
            let edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
            switch (edge) {
                case "left":
                    this.classList.add('to-left');
                    break;
                case "right":
                    this.classList.add('to-right');
                    break;
                case "top":
                    this.classList.add('to-top');
                    break;
                case "bottom":
                    this.classList.add('to-bottom');
                    break;
            }

        })
    }
});
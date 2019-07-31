document.addEventListener('DOMContentLoaded',function(){
    var navbar = document.querySelector('.navbar');
    var status = ">0";
    var btnScrollToTop = document.querySelector('.scroll-top');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 0){
            if(status === ">0"){
                navbar.classList.add('small');
                btnScrollToTop.classList.add('show');
                status = "0"
            }
        }
        else{
            if(status === "0"){
                navbar.classList.remove('small');
                btnScrollToTop.classList.remove('show');
                status = ">0";
            }
        }
    });
    btnScrollToTop.addEventListener('click',function(){
        document.documentElement.scrollTop = 0;
    })
})
'use strict';

const mobileNav = document.querySelector('.menu');
const openNav = document.querySelector('.mobile-nav');
const closeNav = document.querySelector('.nav-off');
const mainDiv = document.querySelector('main');
const navBlur = document.querySelector('.nav-1');

document.addEventListener("DOMContentLoaded", function () {
    function changeBG(x){
        if(x.matches){

            mobileNav.addEventListener('click', function(){
                openNav.style.transform = 'translateX(0)';
                openNav.style.transition = 'all 0.6s';
                closeNav.style.opacity = '1';
                mainDiv.style.filter = 'blur(5px)';
                navBlur.style.filter = 'blur(5px)';
                document.querySelector('html').style.overflow = 'hidden';
            });
            
            closeNav.addEventListener('click', function(){
                openNav.style.transform = 'translateX(100%)';
                closeNav.style.opacity = '0';
                mainDiv.style.filter = 'none';
                navBlur.style.filter = 'none';
                document.querySelector('html').style.overflow = 'auto';
            })

        } else{
            openNav.classList.add('mobile-nav-hidden');
            closeNav.style.opacity = '0';
            document.querySelector('main').style.filter = 'none';
            document.querySelector('.nav-1').style.filter = 'none';
        }
    }
  
    const bg = window.matchMedia('(max-width: 1000px)');
    changeBG(bg);
    bg.addEventListener('change', changeBG);

});
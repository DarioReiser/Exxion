'use strict';

//ABOUT PAGE - SECTION 2 - FOUNDERS/////////////////////////////
const founderJohn = document.querySelector('.founder-img-text');
const founderJason = document.querySelector('.num2');
const founderChris = document.querySelector('.num3');
const founderMark = document.querySelector('.num4');


//ABOUT PAGE - SECTION 2 - WHAT WE STAND FOR////////////////////
const stand1 = document.querySelector('.stand-for-1');
const stand2 = document.querySelector('.stand-for-2');
const stand3 = document.querySelector('.stand-for-3');
const stand4 = document.querySelector('.stand-for-4');

document.addEventListener("DOMContentLoaded", function () {
    function changeBG(x){
        if(x.matches){
            /////////////////////////////////////////////////
            // FOR FOUNDERS SECTION /////////////////////////
            /////////////////////////////////////////////////
            // FOR JOHN
            founderJohn.addEventListener('click', function(){
                founderJohn.classList.toggle('js-disappear');
            })

            // FOR JASON
            founderJason.addEventListener('click', function(){
                founderJason.classList.toggle('js-disappear-2');
            })

            // FOR CHRISTOPHER
            founderChris.addEventListener('click', function(){
                founderChris.classList.toggle('js-disappear-3');
            })

            // FOR MARK
            founderMark.addEventListener('click', function(){
                founderMark.classList.toggle('js-disappear-4');
            })


            //////////////////////////////////////////////////
            // FOR WHAT WE STAND FOR SECTION /////////////////
            //////////////////////////////////////////////////
            // INNOVATION
            stand1.classList.remove('suppose-hover');

            stand1.addEventListener('click', function(){
                stand1.classList.toggle('suppose-off-1');
            });

            // COMMUNITY
            stand2.classList.remove('suppose-hover-2');

            stand2.addEventListener('click', function(){
                stand2.classList.toggle('suppose-off-2');
            });

            // LOGIC
            stand3.classList.remove('suppose-hover-3');

            stand3.addEventListener('click', function(){
                stand3.classList.toggle('suppose-off-3');
            });

            //CREATIVITY
            stand4.classList.remove('suppose-hover-4');

            stand4.addEventListener('click', function(){
                stand4.classList.toggle('suppose-off-4');
            });

        }else{
            stand1.classList.add('suppose-hover');
            stand2.classList.add('suppose-hover-2');
            stand3.classList.add('suppose-hover-3');
            stand4.classList.add('suppose-hover-4');
        }
    }
  
    const bg = window.matchMedia('(max-width: 1000px)');
    changeBG(bg);
    bg.addEventListener('change', changeBG);

});

// let standCards = document.querySelector('.stand-for-1');

// let standCardsAfter = window.getComputedStyle(standCards, '::before');

// console.log(standCardsAfter.fontSize);

// standCards.style.setProperty('--turnOff', 'none') 
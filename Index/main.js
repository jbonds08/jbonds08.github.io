// ------------------ Jquery for nav --------------
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(document).scrollTop() > 50){
            $('.navbar, .nav-link').addClass('sticky');
        }
        else{
            $('.navbar, .nav-link').removeClass('sticky');
        }
    })
})    


// ------------------ Scroll Effect -----------------
$(document).ready(function(){
  $('nav li a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });
});
    


// ------------------ Modal ------------------
var modals = document.getElementsByClassName('modal');
var btns = document.getElementsByClassName('btn btn-light');
var spans = document.getElementsByClassName('closeBtn');

for(let i = 0; i<btns.length; i++){
    btns[i].onclick = function(){
        modals[i].style.display = 'block';
    }
}

for (let i = 0; i<spans.length; i++){
    spans[i].onclick = function(){
        modals[i].style.display = 'none';
    }
}


// ------------------ Slider ------------------------------
let sliderImages = document.querySelectorAll('.slide')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
let current = 0;
// Clear all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}
// Start the slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

// Show prev
function slideLeft(){
    reset();
    sliderImages[current - 1].style.display = 'block';
    current --;
}

// Show next
function slideRight(){
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function(){
    // This if statement sets current to the amount of slides so if the slider is at the beginning, it goes to the 3rd image
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function(){
    // This if statement sets current to the amount of slides so if the slider is at the beginning, it goes to the 3rd image
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();

// Create javascript slideshow to display projects in modal


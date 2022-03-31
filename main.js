var $main_down_f = document.querySelector('.main_down_f');
var $main_up = document.querySelector('.main_up');

$main_down_f.addEventListener('click',function move(){
    location.href = "window_1.html";
});

$main_up.addEventListener('click',function(){
    location.href = "window_3.html";
});
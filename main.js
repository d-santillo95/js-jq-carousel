$('.prev').click(function() {
    var current_img = $('.slide img.active');
    var current_bull = $('.slide i.fa-circle.fas');
    current_img.removeClass('active');
    current_bull.removeClass('fas');
    current_bull.addClass('far');
    var prev_img = current_img.prev('img');
    var prev_bull = current_bull.prev('i.fa-circle');
    if (prev_img.length == 0) {
        $('.slide img:last-child').addClass('active');
        $('.slide i.fa-circle:last-child').removeClass('far');
        $('.slide i.fa-circle:last-child').addClass('fas');
    } else {
        prev_img.addClass('active');
        prev_bull.removeClass('far');
        prev_bull.addClass('fas');
    }
})

$('.next').click(next)

$('.slide i.fa-circle').click(function() {
    var index = $('.slide i.fa-circle').index(this);
    $('.slide img').removeClass('active');
    $('.slide i.fa-circle').removeClass('fas');
    $('.slide i.fa-circle').addClass('far');
    var checked_img = '.slide img:nth-child(' + (index + 1) + ')';
    var checked_bull = '.slide i.fa-circle:nth-child(' + (index + 1) + ')';
    $(checked_img).addClass('active');
    $(checked_bull).addClass('far');
    $(checked_bull).addClass('fas');
})

setInterval(next, 8000)

function next(){
    var current_img = $('.slide img.active');
    var current_bull = $('.slide i.fa-circle.fas');
    current_img.removeClass('active');
    current_bull.removeClass('fas');
    current_bull.addClass('far');
    var next_img = current_img.next('img');
    var next_bull = current_bull.next('i.fa-circle');
    if (next_img.length == 0) {
        $('.slide img:first-child').addClass('active');
        $('.slide i.fa-circle:first-child').removeClass('far');
        $('.slide i.fa-circle:first-child').addClass('fas');
    } else {
        next_img.addClass('active');
        next_bull.removeClass('far');
        next_bull.addClass('fas');
    }
}

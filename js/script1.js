$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'media/buzzer-bell.wav');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);

    // delay in milliseconds
    var delay = 500; // Change this value (1000 = 1 second)

    function playWithDelay() {
        setTimeout(function () {
            audioElement.play();
        }, delay);
    }

    $('#mycanvas').click(function() {
        playWithDelay();
    });

    $('#link_black').click(function() {
        playWithDelay();
    });

    $('.pro_box').click(function() {
        playWithDelay();
    });

    $('#botgnws').click(function() {
        playWithDelay();
    });

});

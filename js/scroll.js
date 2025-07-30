window.onload = function() {
    var audio = document.getElementById('background-music');
    document.body.addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.log('Audio playback failed:', error);
        });
    });
};


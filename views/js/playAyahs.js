let nowPlaying;
let nowPlayingTarget;

const playAyah = (url, targetElementID, mode) => {

    if (nowPlaying) {
        nowPlaying.pause()
        nowPlayingTarget.classList.remove("active");
        nowPlaying = null;
        nowPlayingTarget = null;
    }
    
    nowPlayingTarget = document.getElementById(targetElementID);
    nowPlayingTarget.classList.add('active')
    nowPlaying = new Audio(url);
    nowPlaying.play();

    nowPlaying.addEventListener('ended', function() {
        nowPlayingTarget.classList.remove('active');
        nowPlaying = null;
    })

}
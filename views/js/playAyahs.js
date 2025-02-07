let nowPlaying;
let nowPlayingTarget;
const controllerButton = document.getElementsByClassName('controller')[0]

const stopAll = () => {
    controllerButton.style.color = "grey";
    controllerButton.innerHTML = "NOT PLAYING";
    nowPlaying.pause()
    nowPlayingTarget.classList.remove("active");
    nowPlaying = null;
    nowPlayingTarget = null;
}

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
    
    controllerButton.style.color = "white";
    controllerButton.innerHTML = "STOP";
    
    nowPlaying.play();

    nowPlaying.addEventListener('ended', function () {
        nowPlayingTarget.classList.remove('active');
        nowPlaying = null;

        controllerButton.style.color = "grey";
        controllerButton.innerHTML = "NOT PLAYING";
    })
}
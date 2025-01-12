const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play nad Pause video
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }

}

//updates the play/pause icon
function updatePlayIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
    else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//update progress and timestamp
function updateProgress() {
    console.log('hello world');
    console.log(`Current Time: ${video.currentTime}`);
    console.log(`Duration: ${video.duration}`);
    progress.value = (video.currentTime / video.duration) * 100;
}

//set video time to progress
function setVideoProgress() {
    return true;
}

//stop video
function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timestamp', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

const PLAYBACK_RATE = 1.4;

const changePLaybackRate = () => {
    const video = document.querySelector("video");
    if (video.playbackRate < PLAYBACK_RATE) {
        video.playbackRate = PLAYBACK_RATE;
    }
}

setInterval(changePLaybackRate, 500);

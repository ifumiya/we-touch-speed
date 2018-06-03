let playbackRate = 1.0;

const changePLaybackRate = () => {
    browser.storage.local.get("playbackRate", (value) => {
        if (value.playbackRate) {
            playbackRate = value.playbackRate;
        }
    });
    const video = document.querySelector("video");
    if (video && video.playbackRate != playbackRate) {
        console.log(`Change playback rate ${video.playbackRate} to ${playbackRate}`);
        video.playbackRate = playbackRate;
    }
}

setInterval(changePLaybackRate, 500);

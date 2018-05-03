window.addEventListener("load", () => {
    const plusButton = document.getElementById("plus_button");
    const minusButton = document.getElementById("minus_button");
    const playbackRateCaption = document.getElementById("playback_rate_caption");

    let playbackRate = window.storage.sync.playbackRate || 1.0;

    const addPlaybackRate = (value) => {
        console.log(value);
        playbackRate += value;
        playbackRateCaption.value = playbackRate;
        window.storage.sync.playbackRate = playbackRate;
    };

    console.log(plusButton);
    plusButton.addEventListener("click", () => addPlaybackRate(0.1));
    minusButton.addEventListener("click", () => addPlaybackRate(-0.1));
    playbackRateCaption.value = playbackRate;
});
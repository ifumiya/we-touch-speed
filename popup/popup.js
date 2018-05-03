window.addEventListener("load", () => {
    const plusButton = document.getElementById("plus_button");
    const minusButton = document.getElementById("minus_button");
    const playbackRateCaption = document.getElementById("playback_rate_caption");

    let playbackRate = 1.0;
    browser.storage.local.get("playbackRate", value => playbackRate = value.playbackRate || 1.0);

    const addPlaybackRate = (value) => {
        console.log({ value, playbackRate});
        playbackRate += value;
        playbackRateCaption.value = playbackRate;
        browser.storage.local.set({ playbackRate });
    };

    console.log("init last");
    plusButton.addEventListener("click", () => addPlaybackRate(0.1));
    minusButton.addEventListener("click", () => addPlaybackRate(-0.1));
    playbackRateCaption.value = playbackRate;
});
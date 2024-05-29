let currentlyPlaying  =null;

function playSound(e){
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    // console.log(audio);
    if(!audio) return; // stop the function from runnig all together
    // If there is an audio currently playing, pause it and reset its current time
    if (currentlyPlaying && currentlyPlaying!== audio) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
    }

    // Set the new audio as the currently playing audio
    currentlyPlaying = audio;

    audio.currentTime = 0; // rewing the music to the start
    audio.play();
    // console.log(key);
    key.classList.add('playing');

}
function removeTransition(e) {
    // console.log(e);
    if(e.propertyName !== 'transform') return; // skip it if it's not a transform 
    // console.log(e.propertyName);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playSound);
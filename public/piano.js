const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');


let allKeys = [],
audio = new Audio('tunes/a.wav');

const pressedKey = (e) => {
    if(allKeys.includes(e.key)){
        playTune(e.key)
    }
};

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150)
};

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener('click', () => playTune(key.dataset.key));
});

volumeSlider.addEventListener('input', handleVolume);
keysCheckbox.addEventListener('click', showHideKeys)
document.addEventListener('keydown', pressedKey);





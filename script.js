const songs = [
{
    title:"Song 1",
    src:"songs/song1.mp3"
},
{
    title:"Song 2",
    src:"songs/song2.mp3"
},
{
    title:"Song 3",
    src:"songs/song3.mp3"
}
];

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const progress = document.getElementById("progress");
const progressContainer =
document.querySelector(".progress-container");

const songTitle =
document.getElementById("songTitle");

const playlist =
document.getElementById("playlist");

const volume =
document.getElementById("volume");

let currentSong = 0;
let isPlaying = false;

function loadSong(index){

    audio.src = songs[index].src;

    songTitle.textContent =
    songs[index].title;

    document
    .querySelectorAll("#playlist li")
    .forEach(li =>
        li.classList.remove("active")
    );

    document
    .querySelectorAll("#playlist li")
    [index]
    .classList.add("active");

    localStorage.setItem(
        "lastSong",
        index
    );
}

function playSong(){

    audio.play();

    playBtn.textContent = "⏸";

    isPlaying = true;
}

function pauseSong(){

    audio.pause();

    playBtn.textContent = "▶";

    isPlaying = false;
}

playBtn.addEventListener(
"click",
() => {

    if(isPlaying){
        pauseSong();
    }else{
        playSong();
    }
});

nextBtn.addEventListener(
"click",
() => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(currentSong);

    playSong();
});

prevBtn.addEventListener(
"click",
() => {

    currentSong--;

    if(currentSong < 0){
        currentSong =
        songs.length - 1;
    }

    loadSong(currentSong);

    playSong();
});

audio.addEventListener(
"timeupdate",
() => {

    const percent =
    (audio.currentTime /
    audio.duration) * 100;

    progress.style.width =
    percent + "%";

    document
    .getElementById("currentTime")
    .textContent =
    formatTime(
        audio.currentTime
    );

    document
    .getElementById("duration")
    .textContent =
    formatTime(
        audio.duration
    );
});

function formatTime(time){

    if(isNaN(time))
    return "0:00";

    const mins =
    Math.floor(time / 60);

    const secs =
    Math.floor(time % 60);

    return `${mins}:${secs
        .toString()
        .padStart(2,"0")}`;
}

progressContainer.addEventListener(
"click",
e => {

    const width =
    progressContainer.clientWidth;

    const clickX =
    e.offsetX;

    audio.currentTime =
    (clickX / width)
    * audio.duration;
});

volume.addEventListener(
"input",
() => {

    audio.volume =
    volume.value;

    localStorage.setItem(
        "volume",
        volume.value
    );
});

audio.addEventListener(
"ended",
() => {

    nextBtn.click();
});

songs.forEach(
(song,index) => {

    const li =
    document.createElement("li");

    li.textContent =
    song.title;

    li.addEventListener(
    "click",
    () => {

        currentSong = index;

        loadSong(index);

        playSong();
    });

    playlist.appendChild(li);
});

const savedSong =
localStorage.getItem("lastSong");

if(savedSong){
    currentSong =
    Number(savedSong);
}

loadSong(currentSong);

const savedVolume =
localStorage.getItem("volume");

if(savedVolume){
    volume.value =
    savedVolume;

    audio.volume =
    savedVolume;
}

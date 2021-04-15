//Selectors
const artist = document.querySelector("#artist");
const title = document.querySelector("#title");
const prevBtn = document.querySelector("#prev");
const playBtn = document.querySelector("#play");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#song");
const progress = document.querySelector(".progression");
const progressCont = document.querySelector(".progress");
const cover = document.querySelector("#cover");
const container = document.querySelector(".container");

//Array

const songs = [
  "Saturn",
  "One Way Or Another",
  "Where Do Lovers Go",
  "Broken",
  "Hold On",
  'Experience',
  "Black Magic",
  "Crash",
  "Wake Up",
  "Circles",
  "Mansion",
  "Shape Of My Heart",
  "Just Like You",
];

//Track of songs

let index = 0;

//Loading

loadSong(songs[index]);

//Details

function loadSong(song) {
  title.innerText = song;
  audio.src = `${song}.mp3`;
  cover.src = `${song}.jpg`;
  if (song == "Black Magic") {
    artist.innerText = "Eminem";
  } else if (song == "Wake Up" || "Crash" || "Circles") {
    artist.innerText = "EDEN";
  }
  if (song == "One Way Or Another") {
    artist.innerText = "Until The Ribbon Breaks";
  }
  if (song == "Saturn") {
    artist.innerText = "Sleeping At Last";
  }
  if (song == "Hold On") {
    artist.innerText = "Chord Overstreet";
  }
  if (song == "Mansion") {
    artist.innerText = "NF";
  }
  if (song == "Shape Of My Heart") {
    artist.innerText = "Sting";
  }

  if (song == "Just Like You") {
    artist.innerText = "NF";
  }

  if (song == "Where Do Lovers Go") {
    artist.innerText = "Ghostly Kisses";
  }

  if (song == "Broken") {
    artist.innerText = "Isak Danielson";
  }

  if (song == "Experience"){
    artist.innerText = 'Ludovico Einaudi'
  }
}

function play() {
  container.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");
  audio.play();
}

function pause() {
  container.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");
  audio.pause();
}

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

function next() {
  index++;

  if (index > songs.length - 1) {
    index = 0;
  }

  loadSong(songs[index]);
  play();
}

//Events

playBtn.addEventListener("click", () => {
  const playing = container.classList.contains("play");

  if (playing) {
    pause();
  } else {
    play();
  }
});

//Prev Event

prevBtn.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = songs.length - 1;
  }

  loadSong(songs[index]);

  play();
});

nextBtn.addEventListener("click", next);

audio.addEventListener("timeupdate", (e) => {
  const { duration, currentTime } = e.srcElement;
  const progression = (currentTime / duration) * 100;
  progress.style.width = `${progression}%`;
});

progressCont.addEventListener("click", setProgress);
audio.addEventListener("ended", next);

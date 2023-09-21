   // mengambil id button-audio dan meyimpan ke constant
   const buttonAudio = document.getElementById("button-audio");

   // mengambil id audio-meditasi dan meyimpan ke constant
   const audio = document.getElementById("audio-meditasi");

   // membuat fungsi untuk mengatur volume
   function changeVolume(value) {
     audio.volume = parseFloat(value);
   }

   // fungsi ketika audio di click text di button berubah
   buttonAudio.addEventListener("click", () => {
     if (audio.paused) {
       audio.play();
       buttonAudio.innerHTML = "Pause";
     } else {
       audio.pause();
       buttonAudio.innerHTML = "Play";
     }
   });
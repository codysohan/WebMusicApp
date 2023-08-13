document.addEventListener('DOMContentLoaded', () => {
    const cheques = new Audio('songs/Cheques.mp3')
    const bestOfMe = new Audio('songs/Best%20of%20me.mp3')
    const akhiyaan = new Audio('songs/akhiyaan.mp3')
    const jannateinKahan = new Audio('songs/jannatein%20kahan.mp3')
    const levels = new Audio('songs/levels.mp3')
    const sakhiyaan = new Audio('songs/Sakhiyaan.mp3')
    const aiseKyun = new Audio('songs/aise%20kyun.mp3')
    
    const doubleTake = new Audio('songs/double%20take.mp3')
    const heroesTonight = new Audio('songs/heroes%20tonight.mp3')
    const nightChanges = new Audio('songs/night%20changes.mp3')
    const rightNow = new Audio('songs/right%20now.mp3')
    const shapeOfYou = new Audio('songs/shape%20of%20you.mp3')
    const youMakeMe = new Audio('songs/you%20make%20me.mp3')



    const chequesPlay = document.getElementById('chequesPlay');
    const bestofmePlay = document.getElementById('bestofmePlay');
    const akhiyaanPlay = document.getElementById('akhiyaanPlay');
    const jannateinPlay = document.getElementById('jannateinPlay');
    const levelsPlay = document.getElementById('levelsPlay');

    const doubletakePlay = document.getElementById('doubletakePlay');
    const heroestonightPlay = document.getElementById('heroesPlay');
    const nightchangesPlay = document.getElementById('nightchangesPlay');
    const rightnowPlay = document.getElementById('rightnowPlay');
    const shapePlay = document.getElementById('shapePlay');
    const youmakemePlay = document.getElementById('youmakemePlay');

    const songRange = document.getElementById('songRange');

    const sakhiyaanPlay = document.getElementById('sakhiyaanPlay');

    const nameChange = document.getElementById("song-name-change-js")
    const nameChange2 = document.getElementById("footer-left-child-1")
    const artistChange = document.getElementById("footer-left-child-2")
    const playPauseText = document.getElementById("play-button")
    const playPauseIcon = document.getElementById("playPauseIcon")
    const imageChange = document.getElementById("footer-left-img-2")

    const chequesHead = document.getElementById("cheques-head")
    const bestofmeHead = document.getElementById("bestofme-head")
    const akhiyaanHead = document.getElementById("akhiyaan-head")
    const jannateinHead = document.getElementById("jannatein-head")
    const levelsHead = document.getElementById("levels-head");
    const sakhiyaanHead = document.getElementById("sakhiyaan-head");

    const doubletakeHead = document.getElementById("doubletake-head");
    const heroesHead = document.getElementById("heroes-head");
    const nightchangesHead = document.getElementById("nightchanges-head");
    const rightnowHead = document.getElementById("rightnow-head");
    const shapeHead = document.getElementById("shape-head");
    const youmakemeHead = document.getElementById("youmakeme-head");

    const chequesArtist = document.getElementById("cheques-p")
    const bestofmeArtist = document.getElementById("neffex-p")
    const akhiyaanArtist = document.getElementById("akhiyaan-p")
    const jannateinArtist = document.getElementById("jannatein-p")
    const levelsArtist = document.getElementById("levels-p")
    const sakhiyaanArtist = document.getElementById("sakhiyaan-p")
    
    const doubletakeArtist = document.getElementById("doubletake-p")
    const heroesArtist = document.getElementById("heroes-p");
    const nightchangesArtist = document.getElementById("nightchanges-p");
    const rightnowArtist = document.getElementById("rightnow-p");
    const shapeArtist = document.getElementById("shape-p");
    const youmakemeArtist = document.getElementById("youmakeme-p");

    const musicIcon = document.getElementById("musicIcon");
    const headphoneIcon = document.getElementById("headphoneIcon");
    const snowflakeIcon = document.getElementById("snowflakeIcon");
    const myPlaylist = document.getElementById("myPlaylist");
    const lastListening = document.getElementById("lastListening");
    const recommended = document.getElementById("recommended");

    
    const waveGif = document.getElementById("footer-left-img-1");

    const songDuration = document.getElementById("songDuration");
    const currentTime = document.getElementById("currentTime");

    

    // Cover Image Src for DOM manipulation
    const chequesImg = "images/songs%20cover%20image/cheques%20cover%20img.jpg";
    const bestofmeImg = "images/songs%20cover%20image/Best%20of%20me%20cover%20img.jpg";
    const akhiyaanImg = "images/songs%20cover%20image/akhiyaan%20cover%20img.jpg";
    const jannateinImg = "images/songs%20cover%20image/jannatein%20kahan%20cover%20img.jpg";
    const levelsImg = "images/songs%20cover%20image/levels%20cover%20img.jpg";
    const sakhiyaanImg = "/images/songs%20cover%20image/sakhiyaan%20cover%20img.jpg";
    
    const doubletakeImg = "images/songs%20cover%20image/double%20take%20cover%20img.jpg"
    const heroesImg = "images/songs%20cover%20image/heroes%20tonight%20cover%20img.jpg"
    const nightchangesImg = "images/songs%20cover%20image/night%20changes%20cover%20img.jpg"
    const rightnowImg = "images/songs%20cover%20image/right%20now%20cover%20img.jpg"
    const shapeImg = "images/songs%20cover%20image/shape%20of%20you%20cover%20img.jpg"
    const youmakemeImg = "images/songs%20cover%20image/you%20make%20me%20cover%20img.jpg"

    
    const paraChange = document.getElementById("p-change-js")

    const bestofmePara = "Neffex's 'Best of Me' captivates with dynamic rhythm, motivation, and empowering lyrics, igniting the pursuit of greatness."
    const chequesPara = "Shubh's song 'Cheque' harmonizes catchy beats, heartfelt lyrics, and his soulful voice, crafting a mesmerizing musical experience."
    const akhiyaanPara = "Mitraz's song 'Akhiyaan' captivates with melodious rhythms, evoking emotions of love and longing, a musical journey cherished."
    const jananteinPara = "KK's melodious voice in 'Jannatein Kahan' evokes emotions, weaving a tale of love, longing, and destiny's journey."
    const levelsPara = "Levels by Sidhu Moosewala captivates with its urban beats, evoking emotions and narratives through powerful Punjabi lyrics."
    const sakhiyaanPara = `"Sakhiyaan," a hit song by Maninder Buttar, beautifully captures love's essence with melodious tunes, evoking heartfelt emotions and memories.`

    const doubletakePara = `Lost in melodies, 'Double Take' sweeps hearts, Dhruv's voice a hypnotic journey, emotions entwined, leaving souls enchanted.`;
    const heroestonightPara = `Under starlit skies, we rise, heroes tonight. Uniting hearts, we chase the light, breaking limits, igniting the fight.`;
    const nightchangesPara = `Under moon's gentle glow, love's journey unfolds. Embracing shifts, hearts dance through night's changes, memories cherished.`;
    const rightnowPara = `"Right Now" by Akon captures love's urgency. Time's fleeting embrace, hearts intertwine, a passionate plea. Emotions ignite.`;
    const shapePara = `Two hearts entwined, dancing through the night. Your body's melody, my soul's delight. Love's rhythm ignites, in the Shape of You`;
    const youmakemePara = `In Avicii's song "You Make Me," vibrant melodies intertwine, igniting emotions; a musical journey of love's enchantment.`;


    // Some Default value to set to the Elements 
    waveGif.style.display = "none";
    imageChange.src = "none";

// For changing icon color while hovering playlist elements 
myPlaylist.addEventListener("mouseover", function() {
    musicIcon.style.color = "#00c2de";
});
lastListening.addEventListener("mouseover", function() {
    headphoneIcon.style.color = "#00c2de";
});
recommended.addEventListener("mouseover", function() {
    snowflakeIcon.style.color = "#00c2de";
});

myPlaylist.addEventListener("mouseout", function() {
    musicIcon.style.color = "#a9acbb";
});
lastListening.addEventListener("mouseout", function() {
    headphoneIcon.style.color = "#a9acbb";
});
recommended.addEventListener("mouseout", function() {
    snowflakeIcon.style.color = "#a9acbb";
});


    // Function for playng songs in side navbar
    function navPlay(songName, playButton, songTitle, songPara, artistName, coverImg, headName, artistPara) {
        
        songName.addEventListener('timeupdate', ()=>{ 
            // Update Seekbar
            progress = parseInt((songName.currentTime/songName.duration)* 100); 
            songRange.value = progress;
            songDurationMinutes = parseInt(songName.duration/60);
            songDurationSeconds = parseInt(songName.duration%60);
            songDurationMinutes = songDurationMinutes.toString().padStart(2, '0');
            songDurationSeconds = songDurationSeconds.toString().padStart(2, '0');
            songDuration.innerText = `${songDurationMinutes}:${songDurationSeconds}`;
        
            currentMinutes = Math.floor(songName.currentTime / 60);
            currentSeconds = Math.floor(songName.currentTime % 60);
            currentMinutes = currentMinutes.toString().padStart(2, '0');
            currentSeconds = currentSeconds.toString().padStart(2, '0');
            currentTime.innerText = `${currentMinutes}:${currentSeconds}`
        
        });
        
        songRange.addEventListener('input', ()=>{ 
            songName.currentTime = songRange.value * songName.duration/100;
        
        });
        
        playButton.addEventListener('click', () => {
            
            if (songName.paused) {
                songName.play();
                songRange.value = 0;
                songName.currentTime = 0;
                currentSong = songName;
                playButton.classList.toggle("animation-js-play");
                paraChange.innerText = songPara;

                nameChange.innerText = songTitle;
                nameChange2.innerText = songTitle;
                artistChange.innerText = artistName;
                playPauseText.value = 'PAUSE';
                imageChange.src = coverImg;
                waveGif.style.display = "block";

                headName.style.color = '#00ffd9';
                artistPara.style.color = 'white';

                playPauseIcon.classList.remove('fa-circle-play');
                playPauseIcon.classList.add('fa-circle-pause');

                currentSong = songName;
                
            }

            else{
                songName.pause();
                songRange.value = 0;
                songName.currentTime = 0;
                playButton.classList.toggle("animation-js-play");
                nameChange.innerText = 'No songs are Playing';
                nameChange2.innerText = 'No songs';
                paraChange.innerText = 'About Song';
                playPauseText.value = 'PLAY';
                artistChange.innerText = '';
                waveGif.style.display = "none";
                imageChange.src = "none";

                songRange.value = 0;
                // currentSong = null;

                headName.style.color = 'white';
                artistPara.style.color = '#a9acbb';

                playPauseIcon.classList.add('fa-circle-play');
                playPauseIcon.classList.remove('fa-circle-pause');
            }
        });
    }

    // Cheques song
    navPlay(cheques, chequesPlay, 'Cheques', chequesPara, 'Shubh', chequesImg, chequesHead, chequesArtist);
    // Best of me song
    navPlay(bestOfMe, bestofmePlay, 'Best of Me', bestofmePara, 'Neffex', bestofmeImg, bestofmeHead, bestofmeArtist);
    // Akhiyaan song
    navPlay(akhiyaan, akhiyaanPlay, "Akhiyaan", akhiyaanPara, 'Mitraz', akhiyaanImg, akhiyaanHead, akhiyaanArtist);
    // Jannatein Kahan song
    navPlay(jannateinKahan, jannateinPlay, 'Jannatein Kahan', jananteinPara, 'K.K.', jannateinImg, jannateinHead, jannateinArtist);
    // Levels song
    navPlay(levels, levelsPlay, 'Levels', levelsPara, 'Sidhu Moosewala', levelsImg, levelsHead, levelsArtist);
    // Sakhiyaan song
    navPlay(sakhiyaan, sakhiyaanPlay, 'Sakhiyaan', sakhiyaanPara, 'Maninder Buttar', sakhiyaanImg, sakhiyaanHead, sakhiyaanArtist);
    // Double Take song
    navPlay(doubleTake, doubletakePlay, 'Double Take', doubletakePara, 'Dhruv', doubletakeImg, doubletakeHead, doubletakeArtist);
    // Heroes Tonight Song 
    navPlay(heroesTonight, heroestonightPlay, 'Heroes Tonight', heroestonightPara, 'NCS', heroesImg, heroesHead, heroesArtist);
    // Night Changes Song 
    navPlay(nightChanges, nightchangesPlay, 'Night Changes', nightchangesPara, 'One Direction', nightchangesImg, nightchangesHead, nightchangesArtist);
    // Right Now song 
    navPlay(rightNow, rightnowPlay, 'Right Now', rightnowPara, 'Akon', rightnowImg, rightnowHead, rightnowArtist);
    // Shape of you song 
    navPlay(shapeOfYou, shapePlay, 'Shape of You', shapePara, 'Ed Sheeren', shapeImg, shapeHead, shapeArtist);
    // You make me song
    navPlay(youMakeMe, youmakemePlay, 'You Make Me', youmakemePara, 'Avicci', youmakemeImg, youmakemeHead, youmakemeArtist);
    // Aise Kyun song
    // navPlay(aiseKyun, aisekyunAnim, aisekyunPlay,  'Aise Kyun', 'Aise kyun Para here', '', '');
});



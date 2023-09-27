// ------------------- CONTROLS -----------------------
 

  const databaseMusic = [
      {imgSrc: 'IMG/music1profile.jpeg',
       musicName: 'To querendo',
       authorName: 'João Gomes',
       musicSrc: './musics/music1.mp3',
       likes: '1.5M'},

       {imgSrc: 'IMG/music2Profile.jpeg',
       musicName: 'Vai por mim',
       authorName: 'Péricles & Marilia',
       musicSrc: './musics/music2.mp3',
       likes: '2.3M'},

       {imgSrc: 'IMG/music3Profile.jpeg',
       musicName: 'Transbordar',
       authorName: 'Pluma',
       musicSrc: './musics/music3.mp3',
       likes: '360 Mil'}
  ]

  

    let numberMusic = 0

    const imgAlbun = document.querySelectorAll('img');
    imgAlbun.forEach(img => img.src = databaseMusic[numberMusic].imgSrc)
    const nameMusic = document.querySelector('.nameMusic');
    nameMusic.innerHTML = databaseMusic[numberMusic].musicName;
    const authorName = document.querySelector('.authorName');
    authorName.innerHTML = databaseMusic[numberMusic].authorName;
    const music = document.querySelector('audio');
    music.src = databaseMusic[numberMusic].musicSrc;
    const likes = document.querySelector('.likeSpan');
    likes.textContent = databaseMusic[numberMusic].likes;


  const playMusic = () => {
    musicIsPlay = true;
    btnPlay.innerHTML = '<i class="uil uil-play"></i>'
    setInterval(() => inptcurrentTime.value = music.currentTime, 1000) 
    imgAlbun.forEach(img => img.src = databaseMusic[numberMusic].imgSrc)
    nameMusic.innerHTML = databaseMusic[numberMusic].musicName;
    authorName.innerHTML = databaseMusic[numberMusic].authorName;
    music.src = databaseMusic[numberMusic].musicSrc;
    inptcurrentTime.setAttribute("max", music.duration)
    likes.textContent = databaseMusic[numberMusic].likes;
    
  }


    //------------- BUTTON PLAY ------------------------------------

    const inptcurrentTime = document.querySelector('.musicTime');
    inptcurrentTime.value = 0;
    
  
    inptcurrentTime.addEventListener('input', () => {
        music.currentTime = inptcurrentTime.value;
    })
  
    const btnPlay =  document.querySelector('.play');
  
    let musicIsPlay = true;
    btnPlay.addEventListener('click', () => { 
        if(musicIsPlay) {
            music.play()
            musicIsPlay = false;  
            inptcurrentTime.setAttribute("max", music.duration)   
            btnPlay.innerHTML = '<i class="uil uil-pause"></i>'
            setInterval(() => inptcurrentTime.value = music.currentTime, 1000)
        } else {
            music.pause()
            musicIsPlay = true;
            btnPlay.innerHTML = '<i class="uil uil-play"></i>'
        }
    })

    //------------- BUTTON NEXT ------------------------------------

   const btnNext =  document.querySelector('.next');
      btnNext.addEventListener('click', () => {
      if(numberMusic == databaseMusic.length -1 ) numberMusic = 0;
      else numberMusic += 1;
      
      playMusic(numberMusic) 
   })

   //------------- BUTTON PREVIOUS ------------------------------------

   const btnPrev =  document.querySelector('.previous');
      btnPrev.addEventListener('click', () => {
      if(numberMusic == 0 ) numberMusic = databaseMusic.length - 1;
      else numberMusic -= 1;

      playMusic(numberMusic)
   })

   //------------- INPUT VOLUME ------------------------------------
  
  const inptVolume = document.querySelector('#volume');
  inptVolume.addEventListener('input', () => {
    music.volume = inptVolume.value / 100
  })






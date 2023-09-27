export default function controls() {

    const databaseMusic = [
        {imgSrc: 'IMG/joaoGomesProfile.jpeg',
         musicName: 'To querendo te pegar',
         authorName: 'João Gomes',
         musicSrc: './musics/music1.mp3'}
    ]

     
    const imgAlbun = document.querySelector('img');
    imgAlbun.src = databaseMusic[0].imgSrc 
    const nameMusic = document.querySelector('.nameMusic');
    nameMusic.innerHTML = databaseMusic[0].musicName;
    const authorName = document.querySelector('.authorName');
    authorName.innerHTML = databaseMusic[0].authorName;
    const music = document.querySelector('audio');
    music.src = databaseMusic[0].musicSrc;
   


    const btnPlay =  document.querySelector('.uil-play');
    const btnPrev =  document.querySelector('.uil-previous');
    const btnNext =  document.querySelector('.uil-step-forward');
    const inptcurrentTime = document.querySelector('.musicTime');
    inptcurrentTime.value = 0;
    setInterval(() => inptcurrentTime.value = music.currentTime, 1000)


    inptcurrentTime.addEventListener('input', () => {
        music.currentTime = inptcurrentTime.value;
    })

    let musicIsPlay = true;
    btnPlay.addEventListener('click', () => { 
        if(musicIsPlay) {
            music.play()
            musicIsPlay = false;  
            inptcurrentTime.setAttribute("max", music.duration)   
        } else {
            music.pause()
            musicIsPlay = true;
        }
    })

    
}

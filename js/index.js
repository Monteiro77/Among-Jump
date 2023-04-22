'use strict'

const death = document.querySelector('.death')
const killer = document.querySelector('.killer')
const among = document.querySelector('.among')

const jump = () => {
    among.classList.add('jump')

    setTimeout(() => {
        among.classList.remove('jump')
    }, 500)
}

const loop = setInterval(() =>{
    const killerPosition = killer.offsetLeft
    const amongPosition = +window.getComputedStyle(among).bottom.replace('px', '')

    if(killerPosition <= 235 && killerPosition > 0 && amongPosition < 80){

        

        killer.style.animation = 'none'
        killer.style.left = `${killerPosition}px`

        among.style.animation = 'none'
        among.style.bottom = `${amongPosition}px`

        among.src = './img/White_ghost.webp'
        among.classList.add('dead-among')
        among.classList.remove('among')
        among.classList.remove('jump')
        
        death.style.display = 'flex'
       
    }
},10)
document.addEventListener('keydown', jump)
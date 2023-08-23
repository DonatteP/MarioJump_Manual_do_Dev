const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")

let nome_jogador = prompt("Digite seu nome")


const jump = () => {
  mario.classList.add("jump")

  setTimeout(() => {
   
    mario.classList.remove("jump")

  }, 500);
}

const loop = setInterval(() => {
  const pipeposition = pipe.offsetLeft;
  const marioposition = +window.getComputedStyle(mario).bottom.replace("px", "")


  if (pipeposition <= 120 && pipeposition > 0 && marioposition < 100) {
    pipe.style.animation = "none"
    pipe.style.left = `${pipeposition}px`

    mario.style.animation = "none"
    mario.style.bottom = `${marioposition}px`

    mario.src = "game-over.png"
    mario.style.width = "75px"
    mario.style.marginleft = "50px"

    setTimeout(() => {
   
      alert(nome_jogador + " bateu no cano, tente novamente ou deixe outra pessoa jogar")
  
    }, 100);


    clearInterval(loop);

  }
}, 10)

document.addEventListener("keydown", jump);
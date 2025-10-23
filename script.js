const playBtn = document.getElementById("play")
const musica = document.getElementById('musica')

let isPlaying = false

playBtn.onclick = () => {
    if (!isPlaying) {
    musica.play();
    } else {
    musica.pause();
    }
};

musica.onplay = () => {
    isPlaying = true;
    playBtn.textContent = '⏸';
};

musica.onpause = () => {
    isPlaying = false;
    playBtn.textContent = '▶';
};

function criarCoracao() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao');
    coracao.innerHTML = '❤️'; // você pode trocar por 💖 💘 💞 etc.

    // posição aleatória no eixo X
    coracao.style.left = Math.random() * 100 + 'vw';
    // tamanho aleatório
    coracao.style.fontSize = (Math.random() * 20 + 15) + 'px';
    // duração aleatória
    coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';

    document.body.appendChild(coracao);

    // remove o coração depois que a animação termina
    setTimeout(() => {
      coracao.remove();
    }, 6000);
  }

  // cria corações constantemente
  setInterval(criarCoracao, 300);

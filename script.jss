let video = document.getElementById("video");
let zoomLevel = 1;

// Função de zoom
function zoomIn() {
    zoomLevel += 0.1;
    video.style.transform = `scale(${zoomLevel})`;
}

function zoomOut() {
    if (zoomLevel > 1) {
        zoomLevel -= 0.1;
        video.style.transform = `scale(${zoomLevel})`;
    }
}

// Função de pausa/play
function pausePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Atualiza a barra de progresso
video.addEventListener("timeupdate", () => {
    let progressBar = document.getElementById("progressBar");
    progressBar.value = (video.currentTime / video.duration) * 100;
});

// Ajusta o tempo do vídeo ao clicar na barra de progresso
document.getElementById("progressBar").addEventListener("input", (e) => {
    video.currentTime = (e.target.value / 100) * video.duration;
});

// Navegação para o próximo vídeo
function navigateNext() {
    video.src = "assets/video2.mp4"; // Define o próximo vídeo; altere conforme necessário.
    video.play();
    zoomLevel = 1; // Redefine o zoom ao mudar o vídeo.
    video.style.transform = `scale(${zoomLevel})`;
}

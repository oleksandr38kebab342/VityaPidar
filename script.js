document.addEventListener("DOMContentLoaded", function () {
    createFireworks();
});

function openModal(src) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    modal.style.display = "flex"; 
    modalImage.src = src; 
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function createFireworks() {
    const container = document.getElementById("fireworks-container");
    const colors = ["#ff6666", "#ffcccc", "#ff3333", "#ffe6e6"];

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(firework);
    }
}

const style = document.createElement("style");
style.innerHTML = `
.firework {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    opacity: 0;
    animation: explode 1.5s ease-in-out forwards;
}

@keyframes explode {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    50% {
        transform: translateY(-150px) scale(2);
    }
    100% {
        transform: translateY(-300px) scale(3);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

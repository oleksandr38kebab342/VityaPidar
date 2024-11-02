document.addEventListener("DOMContentLoaded", function () {
    createFireworks();
});

function createFireworks() {
    const container = document.getElementById("fireworks-container");
    const colors = ["#ff6666", "#ffcccc", "#ff3333", "#ffe6e6"];

    for (let i = 0; i < 30; i++) {
        const firework = document.createElement("div");
        firework.classList.add("firework");
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 2}s`;
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(firework);
    }
}

const style = document.createElement("style");
style.innerHTML = `
.firework {
    position: absolute;
    bottom: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0;
    animation: explode 1s ease-in-out forwards;
}

@keyframes explode {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-200px) scale(2);
        opacity: 0;
    }
}
`;
document.head.appendChild(style);

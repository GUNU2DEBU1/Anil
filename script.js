


document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".balloons-container");

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.className = "balloon";
        balloon.style.left = Math.random() * 100 + "vw";
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.animationDuration = (Math.random() * 5 + 5) + "s"; // 5 to 10 seconds
        container.appendChild(balloon);

        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 10000);
    }

    
    function getRandomColor() {
        const colors = ["#ff6b6b", "#ffcc5c", "#99e9f2", "#cc5de8", "#f06595"];
        return colors[Math.floor(Math.random() * colors.length)];
    }
  

    setInterval(createBalloon, 500); // Create a new balloon every 500ms
});
document.addEventListener("mousemove", (e) => {
    const card = document.querySelector(".card");
    const { clientX: x, clientY: y } = e;
    const { innerWidth: width, innerHeight: height } = window;

    const rotateY = ((x / width) * 40 - 20).toFixed(2); // Adjust range (-20 to 20 degrees)
    const rotateX = (-(y / height) * 40 + 20).toFixed(2);

    card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});







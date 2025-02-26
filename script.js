const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartLoader = document.getElementById("heartLoader");
const resultContainer = document.getElementById("resultContainer");
const questionContainer = document.getElementById("questionContainer");
const initialGifContainer = document.getElementById("initialGifContainer");

noBtn.addEventListener("mouseover", () => {
    const maxX = questionContainer.clientWidth - noBtn.clientWidth;
    const maxY = questionContainer.clientHeight - noBtn.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
    noBtn.style.transition = "top 0.3s ease, left 0.3s ease";
});

yesBtn.addEventListener("click", () => {
    initialGifContainer.style.display = "none"; // Ẩn GIF ban đầu
    heartLoader.style.display = "block"; // Hiện hiệu ứng chờ

    setTimeout(() => {
        heartLoader.style.display = "none";
        resultContainer.style.display = "block";
    }, 2000);
});

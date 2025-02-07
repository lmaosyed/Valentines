const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and image when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "I knew you would say YES in the first click. I love you sweetheart. You're my Valentine hehe ❤️";

    // Change this to your actual downloaded image filename
    gif.src = "cat.jpg";

    // Hide the No button
    noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    // Ensure randomX and randomY are within the wrapper bounds
    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// Floating hearts effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Randomize position
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s"; // 3s to 5s duration

    document.querySelector(".hearts-container").appendChild(heart);

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// Create hearts at intervals
setInterval(createHeart, 400);

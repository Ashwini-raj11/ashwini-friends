const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const message = document.getElementById("message");

// NO button messages
const messages = [
    "Are you sure? 👀",
    "Think again 😂",
    "Wrong answer detected 💀",
    "Nice try 😌",
    "You really want to choose NO? 👀",
    "Okay... we both know the answer ❤️"
];

let messageIndex = 0;

// NO button
noBtn.addEventListener("click", function () {

    message.textContent = messages[messageIndex];

    messageIndex++;

    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }

    // Move the NO button
    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

// YES button
yesBtn.addEventListener("click", function () {

    message.textContent = "✨ ACCESS GRANTED ✨";

    setTimeout(function () {
        window.location.href = "page2.html";
    }, 1000);

});
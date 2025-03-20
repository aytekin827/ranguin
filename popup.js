const images = [
    "images/penguin1.jpg",
    "images/penguin2.jpg",
    "images/penguin3.jpg",
    "images/penguin4.jpg",
    "images/penguin5.jpg",
    "images/penguin6.jpg",
    "images/penguin7.jpg",
    "images/penguin8.jpg",
    "images/penguin9.jpg",
    "images/penguin10.jpg",
    "images/penguin11.jpg",
    "images/penguin12.jpg",
    "images/penguin13.jpg",
    "images/penguin14.jpg",
    "images/penguin15.jpg"
];

document.addEventListener("DOMContentLoaded", () => {
    const imgElement = document.getElementById("penguinImage");
    const randomImage = images[Math.floor(Math.random() * images.length)];
    imgElement.src = randomImage;
});
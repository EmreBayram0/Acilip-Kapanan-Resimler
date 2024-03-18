let images = document.querySelectorAll(".image")

images.forEach(image => {
    image.addEventListener("click", () => {
        removeActive();
        image.classList.add("image1");
    });
})

function removeActive() {
    images.forEach(image => {
        image.classList.remove("image1");
    })
}
let bigBox = document.getElementById("big-box")
let imgs = document.querySelectorAll(".images-container img")

function displayImg(e) {
    bigBox.style.backgroundImage = `url(${e.src})`;
    bigBox.style.backgroundColor = 'red'
    bigBox.innerHTML = e.alt
    console.log("Image src " + e.src)
}

function removeImg() {
    bigBox.style.backgroundImage = "url('')"
    bigBox.style.backgroundColor = ''
    bigBox.innerHTML = "Hover over an image below to display here"
}

for (var i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("tabindex","0")
}


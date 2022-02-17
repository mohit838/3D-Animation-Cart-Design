
const productBoxFlip = document.getElementById("productBox");
const frontImgBox = document.getElementById("frontImg");
const backImgBox = document.getElementById("backImg");

function flipRight(){
    productBoxFlip.style.transform = "rotateY(180deg)";
    frontImgBox.style.left = "20px";
    backImgBox.style.left = "-650px";
}

function flipLeft(){
    productBoxFlip.style.transform = "rotateY(0deg)";

    frontImgBox.style.left = "650px";
    backImgBox.style.left = "20px";
}

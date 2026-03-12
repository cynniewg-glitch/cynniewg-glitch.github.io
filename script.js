const images = [
"images/selfie/xyw.png",
"images/selfie/IMG_1702.JPG",
"images/selfie/IMG_1713.JPG",
"images/selfie/IMG_2133.JPG",
"images/selfie/IMG_2255.JPG"
];

let currentPhoto = 0;

function showPhoto(){
document.getElementById("gallery-photo").src = images[currentPhoto];
}

function nextPhoto(){
currentPhoto = (currentPhoto + 1) % images.length;
showPhoto();
}

function prevPhoto(){
currentPhoto = (currentPhoto - 1 + images.length) % images.length;
showPhoto();
}

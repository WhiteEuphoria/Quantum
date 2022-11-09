
const play = document.querySelector(".offer__video");
const closeVideo = document.querySelector(".close");
play.addEventListener("click", function (){   
    document.querySelector(".modal-video").classList.add("modal-vis");
});
closeVideo.addEventListener("click", function (){   
    document.querySelector(".modal-video").classList.remove("modal-vis");
});

const play = document.querySelector(".offer__video");
const closeVideo = document.querySelector(".close");
play.addEventListener("click", function (){   
    document.querySelector(".modal-video").classList.add("modal-vis");
});
closeVideo.addEventListener("click", function (){   
    document.querySelector(".modal-video").classList.remove("modal-vis");
});

// $(function () {
//     $('#phone').phonecode({
//         preferCo: 'ru'
//     });
// });
const questClose = document.querySelector("#questions-modal__close");
const questBtn = document.querySelector(".quest-btn");
const questBtn2 = document.querySelector(".quest-btn2");
const form = document.querySelector(".form");
// form.addEventListener('submit', function (event) {
    questBtn.addEventListener("click", function (){   
        document.querySelector(".questions-modal").classList.toggle("questions-modal--active");
    });
    questBtn2.addEventListener("click", function (){   
        document.querySelector(".questions-modal").classList.toggle("questions-modal--active");
    });
    questClose.addEventListener("click", function (){   
        document.querySelector(".questions-modal").classList.toggle("questions-modal--active");
    });
// },true);

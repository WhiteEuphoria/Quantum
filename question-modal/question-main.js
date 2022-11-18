const questClose = document.querySelector(".questions-modal__close");
const questBtn = document.querySelector(".quest-btn");
const questBtn2 = document.querySelector(".quest-btn2");
questBtn.addEventListener('submit', function (event) {
questBtn.addEventListener("click", function (){   
    document.querySelector(".questions-modal").classList.toggle("questions-modal--active");
});
questBtn2.addEventListener("click", function (){   
    document.querySelector(".questions-modal").classList.toggle("questions-modal--active");
});
questClose.addEventListener("click", function (){   
    document.querySelector(".questions-modal").classList.remove("questions-modal--active");
});
// console.log('Отправлено');
},true);
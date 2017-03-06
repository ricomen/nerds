;
var modalContent = document.querySelector(".modal-content");
var modalShow    = document.querySelector(".contact__link");
var modalClose   = document.querySelector(".modal-content__close");
var userName     = modalContent.querySelector("[name=userName]");
var eMail        = modalContent.querySelector("[name=email]");
var form         = modalContent.querySelector("form");
var storage      = localStorage.getItem("userName");

modalShow.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.add("modal-content__show");  
  if (storage) {
    userName.value = storage;
    eMail.focus();
  }else{
    userName.focus();
  }
});
modalClose.addEventListener("click", function(event) {
  event.preventDefault();  
  modalContent.classList.remove("modal-content__show");
});
window.addEventListener("keydown", function(event) {
  if(event.keyCode === 27) {
    modalContent.classList.remove("modal-content__show");
  }
});
form.addEventListener("submit", function(event) {  
  if(!userName.value || !eMail.value) {
    event.preventDefault();
    console.log("Поля пусты");
    userName.focus();
  }else{
    localStorage.setItem("userName", userName.value);
  }  
});
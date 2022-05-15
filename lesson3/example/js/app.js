const tabs = document.querySelectorAll(".tabheader__item"); 
const tabsParent = document.querySelector(".tabheader__items"); 
const tabsContent = document.querySelectorAll(".tabcontent"); 
 
const hideTabContent = () => { 
  tabsContent.forEach((item) => { 
    item.style.display = "none"; 
  }); 
  tabs.forEach((item) => { 
    item.classList.remove("tabheader__item_active"); 
  }); 
}; 
 
const showTabContent = (i = 1) => { 
  tabsContent[i].style.display = "block"; 
  tabs[i].classList.add("tabheader__item_active"); 
}; 
 
hideTabContent(); 
showTabContent(); 
 
tabsParent.addEventListener("click", (event) => { 
  const target = event.target; 
  if (target.classList.contains("tabheader__item")) { 
    tabs.forEach((item, i) => { 
      if (target === item) { 
        hideTabContent()
        showTabContent(i)
      } 
    }); 
  } 
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close")

// console.log(modal, "modal")
// console.log(modalTrigger, "btn_white")
// console.log(closeModalBtn, "modal__close")

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
} 
const closeModal = () => {
  modal.classList.remove("show");
  modal.classList.add("hide");
  document.body.style.overflow = "";
}

modalTrigger.addEventListener("click", openModal );

closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) =>{
  if(event.target === modal) {
    closeModal();
  }}
)

document.body.addEventListener("keydown", (event) => {
  if(event.code ==="Escape")
  closeModal()
})


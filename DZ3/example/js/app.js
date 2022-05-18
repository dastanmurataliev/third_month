const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};
hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.querySelectorAll(".tabheader__item");
    let sliderSlide = document.querySelectorAll(".tabcontent");
    if (n > slides.length && n > sliderSlide.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length && slideIndex == sliderSlide.length;
    }
    for (let slide of slides) {
      
    }
    
    for (let slide of sliderSlide) {
        slide.style.display = "none";
    }
    sliderSlide[slideIndex - 1].style.display = "block";
}

let timer = setInterval(function(){
    slideIndex++;
    showSlides(slideIndex);
  },5000);



const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
    console.log(event.target);
  }
});

closeModalBtn.addEventListener("click", closeModal);


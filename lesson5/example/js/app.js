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

let slideIndex = 0;
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.querySelectorAll(".tabheader__item");
  let sliderSlide = document.querySelectorAll(".tabcontent");
  if (n > slides.length && n > sliderSlide.length) {
    slideIndex += 1;
  }
  if (n < 0) {
    slideIndex = slides.length && slideIndex == sliderSlide.length;
  }
  for (let slide of slides) {
    slide.classList.remove("tabheader__item_active");
  }
  slides[n].classList.add("tabheader__item_active");

  for (let slide of sliderSlide) {
    slide.style.display = "none";
  }
  sliderSlide[slideIndex].style.display = "block";

}

let timer = setInterval(function () {
  {
    slideIndex++;
    if (slideIndex > 3) {
      slideIndex = 0
    }
  }
  showSlides(slideIndex);
}, 3000);

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const modalTriggerDark = document.querySelector(".btn_dark")
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
modalTriggerDark.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
    console.log(event.target);
  }
});

closeModalBtn.addEventListener("click", closeModal);

// window.addEventListener("scroll", () => {
//   let num = (window.pageYOffset)
//   if ( window.pageYOffset > 3605) {
//     openModal()
//   }}
// );

modal.addEventListener('click', (event) => {
	if (event.target === modal) {
		closeModal()
	}
})

function openModalScroll() {
	const page = document.documentElement

	if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
		openModal()

		window.removeEventListener('scroll', openModalScroll)
	}
}

const deadline = '2022-5-26'

function getTimeRemaining(deadline) {
	const t = new Date(deadline) - new Date(),
		days = Math.floor((t / (1000 * 60 * 60 * 24))),
		hours = Math.floor((t / (1000 * 60 * 60) % 24)),
		minutes = Math.floor((t / 1000 / 60) % 60),
		seconds = Math.floor((t / 1000) % 60);

	return {
		"total": t,
		"days": days,
		"hours": hours,
		"minutes": minutes,
		"seconds": seconds
	}
}


function setClock(element, deadline) {
	const elem = document.querySelector(element),
		days = elem.querySelector('#days'),
		hours = elem.querySelector('#hours'),
		minutes = elem.querySelector('#minutes'),
		seconds = elem.querySelector('#seconds');

	setInterval(updateClock, 1000)

	updateClock()

	function makeZero(num) {
		if (num > 0 && num < 10) {
			return `0${num}`
		} else {
			return num
		}
	}

	function updateClock() {
		const t = getTimeRemaining(deadline);
		days.innerHTML = makeZero(t.days);
		hours.innerHTML = makeZero(t.hours);
		minutes.innerHTML = makeZero(t.minutes);
		seconds.innerHTML = makeZero(t.seconds)
	}
}

setClock('.timer', deadline)

// card


class Menu {
	constructor(src, title, description, price) {
		this.src = src
		this.title = title
		this.price = price
		this.description = description
	}

	render() {
		const wrapper = document.querySelector('#cardWrapper')
		const elem = document.createElement('div')
		elem.classList.add('menu__item')

		elem.innerHTML = `
		<div class="menu__item">
			<img src=${this.src} alt="vegy">
			<h3 class="menu__item-subtitle">${this.title}</h3>
			<div class="menu__item-descr">${this.description}</div>
			<div class="menu__item-divider"></div>
			<div class="menu__item-price">
			<div class="menu__item-cost">Цена:</div>
			<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
			</div>
		</div>
		`
		wrapper.append(elem)
	}
}

const card1 = new Menu(
	"img/tabs/vegy.jpg",
	"Меню Фитнес",
	"Меню \"Фитнес\" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
	"229"
)
card1.render()

// form
const forms = document.querySelectorAll('form')
const message = {
	loading: 'Идет загрузка...',
	success: 'Спасибо, скоро свяжемся !',
	fail: 'Что-то пошло не так'
}

forms.forEach(item => {
	postData(item)
})

function postData (form) {
	form.addEventListener('submit', (e) => {
		e.preventDefault()

		const messageBlock = document.createElement('div')
		messageBlock.textContent = message.loading
		form.append(messageBlock)

		const request = new XMLHttpRequest()
		request.open('POST', 'server.php')
		request.setRequestHeader('Content-type', 'application/json')

		const formData = new FormData(form)
		const object = {}

		formData.forEach((item, i) => {
			object[i] = item
		})

		const json = JSON.stringify(object)

		request.send(json)

		request.addEventListener('load', () => {
			if(request.status === 200){
				console.log(request.response)
				messageBlock.textContent = message.success
			} else {
				messageBlock.textContent = message.fail
			}
		})
	})
}
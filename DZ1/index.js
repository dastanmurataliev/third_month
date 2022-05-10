const idInput= document.querySelector(".idInput");
const spanResult = document.querySelector(".spanResult");
const btnClick = document.querySelector(".btnClick");



const idReg = /^1\d{13}|2\d{13}$/;

btnClick.addEventListener("click", () => {
    if(idReg.test(idInput.value)) {
      alert("ok");
    }  
    else {
      alert("not ok");
    }
  });

  //Второе Задание

  const moving = document.querySelector(".moving")

let num = 0;
let nam = 50;
const move = function() {
    num += 30
    moving.style.left = `${num}px`;
    moving.style.top = `${nam}px`;
    if (num <50) {
        move();
    } else {
        num = 0;
    }
}
moving.addEventListener("click", move)


// let num = 10;

// const move = document.querySelector('.moving');

// move.addEventListener("click",() => {
//   num++
//   (move.style.left=`${num}px`)
//     if(num <20) {
//       return move()
//     }  
// })

// move()


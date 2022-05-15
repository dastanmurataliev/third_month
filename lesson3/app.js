// function varTest () {
//   var x = 1
//   if(true) {
//     var x = 2;
//     console.log(x)
//   }
//   console.log(x)
// }
// varTest()

// function letTest () {
//   let x = 1
//   if(true) {
//     let x = 2;
//     console.log(x)
//   }
//   console.log(x)
// }

// letTest()


// const doHomeTasks = (subject, callback) => {
//   alert(` do your ${subject}`);
//   callback()
// }

// const alertFinished = () => {
//   alert(`my homework is finished`)
// }

// doHomeTasks('Math', alertFinished)

const btn = document.querySelectorAll("button");
console.log(btn);


// const arr = [1,2,3,4,5];
// console.log(arr)


// btn.forEach((item) => {
//   // console.log(item)
//   item.addEventListener("click", (event) =>{
//     console.log(event.target);
//     if(event.target.classList.contains("red")){
//       event.target.classList.remove("red");
//     } else {
//       event.target.classList.add("red");
//     }
//   })
// });

const wrapper = document.querySelector(".btns");
const newBtn = document.createElement("button");

wrapper.append(newBtn)

wrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    if (event.target.classList.contains("red")) {
      event.target.classList.remove("red");
    } else {
      event.target.classList.add("red");
    }
  }
}
)


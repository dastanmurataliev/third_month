// // Lesson1
// // Regular Expression

// // let string = prompt("your name");

// let string = "1212312324312332";

// // let regExpr = /Y/gi;
// let regExpr = /\d/;

// // m g 

// // console.log(string.match(regExpr));

// const phoneInput = document.querySelector(".phoneInput");
// const phoneClick = document.querySelector(".phoneClick");
// const phoneResult = document.querySelector(".phoneResult");

// console.log(phoneInput);
// console.log(phoneClick);
const phoneReg = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/

phoneClick.addEventListener("click", () => {
  if(phoneReg.test(phoneInput.value)){
    phoneResult.innerText = "ok";
    phoneResult.style.color = "green";
  }else {
    phoneResult.innerText = " not ok";
    phoneResult.style.color = "red";
  }
});

// const letter = "122121212123213";

// const regExp = /\w/g;

// console.log(letter);
// console.log(letter.replace(regExp,"*"));

// /^\w{3}$/;

// match
// replace(regExp, "asasa")
// test;


// let num = 0;

// const count = () => {
//   num++
//   console.log(num);
//   if (num < 50) {
//     return count()
//   } 
// };

// count()

const people = { 
  John: { 
    age: 25, 
    parents: { 
      Kelly: { 
        age: 45, 
      }, 
      Tony: { 
        age: 45, 
      }, 
    }, 
  }, 
  Sam: { 
    age: 15, 
    parents: { 
      Jean: { 
        age: 35, 
      }, 
    }, 
  }, 
};

const parentsList = (obj) => {
  if(obj.parents) {
    for (let key in obj.parents) {
      console.log(key)
      parentsList(obj.parents[key]);
    }
  }
}

parentsList(people.John)
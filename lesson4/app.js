// const obj = {
//   name: "John",
//   age: "20"
// };

// console.log(obj);

// const  data = JSON.stringify(obj);
// console.log(data);

const btn = document.querySelector(".btn")

btn.addEventListener("click", () =>{
  const request = new XMLDocument();
  request.open("GET", "data.json");
  request.setRequestHeader("Content-type", "application/json")
})

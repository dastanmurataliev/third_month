// setTimeout(() => {
//   console.log("1");
//   setTimeout(() => {
//     console.log("2");
//     setTimeout(() => {
//       console.log("3");
//       setTimeout(() => {
//         console.log("4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// callback hell

// setTimeout(() => {
//   console.log("подготовка...");
//   const product = {
//     name: "Phone",
//     price: "4000",
//   };
//   setTimeout(() => {
//     product.status = "ordered";
//     console.log(product);
//   }, 2000);
// }, 2000);

// промис

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("подготовка...");
//     const product = {
//       name: "Phone",
//       price: "4000",
//     };

//     resolve(product);
//   }, 2000);
// });

// const resolveData = (product) => {
//   setTimeout(() => {
//     product.status = "ordered";
//     console.log(product);
//   }, 2000);
// };

// req.then(resolveData);

// req.then((product) => {
//   const req2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = "ordered";
//       console.log(product, "1");

//       resolve();
//     }, 2000);
//   });

//   req2.then(() => {
//     product.isModified = true;
//     console.log(product, "2");
//   });
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = "ordered";
//       console.log(product, "1");

//       //   resolve();
//       reject();
//     }, 2000);
//   })
//     .then(() => {
//       product.isModified = true;
//       console.log(product, "2");
//     })
//     .catch(() => {
//       console.log("error");
//     })
//     .finally(() => {
//       console.log("123");
//     });
// });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// запрос на сервер

// fetch("server.php", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(object),
// })
//   .then((response) => response.text())
//   .then((data) => {
//     console.log("success");
//   })
//   .catch(() => {
//     console.log("error");
//   })
//   .finally(() => {
//     console.log("finised");
//   });

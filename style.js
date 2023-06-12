 //Q1:

function calculate(num1,num2){
              return num1*num2;
}

function displayData(name,age){
              console.log(`${name} : age is ${age}`);
}

displayData("Piple",calculate(10,20));


//Q2:

setTimeout(() => {
             console.log("1"); 
             setTimeout(() => {
              console.log("2");
              setTimeout(() => {
                        console.log("3");  
                        setTimeout(() => {
                            console.log("4");
                            setTimeout(() => {
                                       console.log("5");
                                     setTimeout(() => {
                                          console.log("6");
                                          setTimeout(() => {
                                                        console.log("7");
                                          }, 7000);
                                     },6000);     
                            }, 5000);
                        },4000);  
              }, 3000);
             }, 2000);
}, 1000);


//Q3:
function printNumbersWithDelay() {
  let number = 1;
  function printNumberWithDelay(num) {
  return new Promise((resolve) => {
  setTimeout(() => {
  console.log(num);
  resolve();
  }, num * 1000);
  });
  }
  function printSequentially() {
  if (number <= 7) { printNumberWithDelay(number) .then(()=> {
      number++;
      printSequentially();
      });
      }
      }
      printSequentially();
      }
      printNumbersWithDelay();

//Q4:-

let variable = true;
 myPromise = new Promise((res,rej)=>{
   if(variable==true){
              res("Promise resolve Successfully....")
   }
   else{
              rej(Error("Promise rejected...."))
   }
})

myPromise
.then((data)=>console.log(data))
.catch((err)=>console.log(err))


//Q5:
function calculate(num1,num2){
  return num1*num2;
}
function displayData(name,age){
  console.log(`${name} : age is ${age}`);
}

displayData("Piple",calculate(10,20));



// Q6:Callback hell
setTimeout(() => {
  console.log("1");
setTimeout(() => {
  console.log("2");
  setTimeout(() => {
    console.log("3");
    setTimeout(() => {
      console.log("4")
    },4000);
  }, 3000);
}, 2000);
}, 1000);


//Q7:
function getUserData() {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
  const userId = 123;
  resolve(userId);
  }, 2000);
  });
  }
  function fetchUserDetails(userId) {
  return new Promise(function(resolve, reject) {
  setTimeout(function() {
  const userDetails = { name: "Alice", age: 25 };
  resolve(userDetails);
  }, 2000);
  });
  }


// Q8:Async await
function promiseChain(alpha,timeout){
  return new Promise((res,rej)=>{
    setTimeout(() => {
      console.log(alpha);
      res("This promise is resolved....")
    }, timeout);
  })
}

async function visible(){
  await promiseChain("A",2000)
  await promiseChain("E",5000)
  await promiseChain("I",3000)
  await promiseChain("O",1000)
  await promiseChain("U",4000)
}
visible()



// Q9:Promise.all

function Abc(){
  return new Promise((res,rej)=>{
    if(20 % 2==0){
      res("this is even number")
    }
    else{
      rej("this is an odd number")
    }
  })
}

const promiseVar = new Promise((res,rej)=>{
  if(true){
    res("HI EA23 !!!")
  }
  else{
    rej("Sorry!!")
  }
})

Promise.all([Abc(),promiseVar])
.then((data)=>console.log(data))
.catch((err)=>console.log(err))

//Promise chaining example:--

// function promiseChain(alpha,timeout){
//   return new Promise((res,rej)=>{
//     setTimeout(() => {
//       console.log(alpha);
//       res("This promise is resolved....")
//     }, timeout);
//   })
// }

// function visible(){
//   promiseChain("A",2000)
//   .then(() => promiseChain("E", 4000))
//   .then(() => promiseChain("I", 1000))
//   .then(() => promiseChain("O", 2000))
//   .then(() => promiseChain("U", 5000))
// }



// let promise = "false";
// function pro(p){
//    return new Promise((res,rej)=>{
//    if(p=="true"){
//     res("Work done")
//    }
//    else{
//     rej("Not done")
//    }
//    })
// }

// pro(promise)
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
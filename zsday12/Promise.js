

/*
const promise = new promise((resolve , reject) => {
    //async operation
    let success = true;
    if(success) {
        resolve ("Pizza delivered");
    } else{
        reject("Delivery failed");
    }
})



//Using .then() and .catch()
promise
.then((message) => {
console.log("Success:" , message)
})
.catch((error) => {
    console.log("Error:" , error);
})
.finally(() => {
    console.log("Order process complete")
})


//real world example
fetch("")
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Error fetching data:" , error));


//Promise + async/await (modern syntax)

async function getData() {
    try {
       const res = await fetch()
       const data = await res.json();
       console.log(data);
    } catch (error) {
     console.error("Error:" , error);   
    }
}

*/

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise was completed after 2 sec")
  },2000)
} )
promise1.then(message => console.log(message));



const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected after 2 sec")
    },2000)
})

promise2
.catch( error => console.log(error))



const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data 1 fetched")
    } , 1000)
});

const fetchData2 = new Promise(() => {
    setTimeout(() => resolve("Data 2 fetched") , 2000)
});

const fetchData3 = new Promise(() => {
    setTimeout(() => resolve("Data 3 fetched"), 3000);
});
fetchData1
.then(data => {
    console.log(data);
    return fetchData2
})
.then(data => {
    console.log(data);
    return fetchData3
})
.then(data => console.log(data));


//using async/await
async function getData1() {
    try {
        const res = await fetch()
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("Error" , err);
    }
}


async function getData2() {
    try {
        const res = await fetch()
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log("Error" , err);
    }
}




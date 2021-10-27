// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

fakeRequestCallback('books.com/page1', 
    function(response){
        console.log("IT WORKED(page1)!!!");
        console.log(response);
        fakeRequestCallback('books.com/page2', 
            function(response){
                console.log("IT WORKED AGAIN(page2)!!!");
                console.log(response);
                fakeRequestCallback('books.com/page3', 
        function(response){
         console.log("IT WORKED AGAIN(page3)!!!");
            console.log(response);
    
        }, function(err){
    console.log("ERROR(3rd request)!!!")
    console.log(err);
})
         }, function(err){
        console.log("ERROR(2nd request)!!!")
        console.log(err);
    })
    }, function(err){
    console.log("ERROR(1st request)!!!")
    console.log(err);
})

// fakeRequestPromise('starbucks.com/api/cappuccino/page1')
// .then(() => {
//             console.log("PROMISE FULFILLED(page1)!!!");
//             fakeRequestPromise('starbucks.com/api/cappuccino/page2').then(() => 
//             {
//                 console.log("PROMISE FULFILLED(page2)!!!");
//                 fakeRequestPromise('starbucks.com/api/cappuccino/page3').then(() => 
//                 {
//                     console.log("PROMISE FULFILLED(page3)!!!");
//                 }).catch(() => {
//                 console.log("PROMISE REJECTED(page3)!!!");
//                 })
//             }).catch(() => {
//             console.log("PROMISE REJECTED(page2)!!!");
//         })
//     })
// .catch(() => {
//     console.log("PROMISE REJECTED(page1)!!!");
// })

// ********************************* MAGIC OF PROMISES ************************************

fakeRequestPromise('starbucks.com/api/cappuccino/page1')
.then((data) => {
    console.log("IT WORKED!!! (page1)");
    console.log(data);
    return fakeRequestPromise('starbucks.com/api/cappuccino/page2')
})
.then((data) => {
    console.log("IT WORKED!!! (page2)");
    console.log(data);
    return fakeRequestPromise('starbucks.com/api/cappuccino/page3')
})
.then((data) => {
    console.log("IT WORKED!!! (page3)");
    console.log(data);
})
.catch((err) => {
console.log("OH NO A REQUEST FAILED!");
console.log(err);
})
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
        console.log("IT WORKED!!!");
        console.log(response);
        fakeRequestCallback('books.com/page2', 
            function(response){
                console.log("IT WORKED AGAIN!!!");
                console.log(response);
                fakeRequestCallback('books.com/page3', 
        function(response){
         console.log("IT WORKED AGAIN(3rd request)!!!");
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
    console.log("ERROR!!!")
    console.log(err);
})

fakeRequestPromise('starbucks.com/api/cappuccino')
.then(() => {
    console.log("PROMISE FULFILLED!!!");
    fakeRequestPromise('starbucks.com/api/cappuccino').then(() => 
    {
        console.log("PROMISE FULFILLED(2)!!!");
        }).catch(() => {
        console.log("PROMISE REJECTED!!!");
    })
})
.catch(() => {
    console.log("PROMISE REJECTED!!!");
})

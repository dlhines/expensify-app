const promise = new Promise((resolve, reject) => {
    resolve('This resolved...');
});

promise.then((data) => {
    console.log(data);
})
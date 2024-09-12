// function learning(callback) {
//     setTimeout(function () {
//         console.log(`learning`);
//         callback();
//     }, 2000);
// }

// function done(callback) {
//     setTimeout(function () {
//         console.log(`done`);
//         callback();
//     }, 3000);
// }

// function working(callback) {
//     setTimeout(function () {
//         console.log(`working`);
//     }, 1000);
// }

// learning(function () {
//     done(function () {
//         working();
//     });
// });

function learning() {
    setTimeout(function () {
        console.log("learning");
    }, 2000);
}

function done() {
    setTimeout(function () {
        console.log("done");
    }, 3000);
}

console.log("hello");

function working() {
    setTimeout(function () {
        console.log("working");
    }, 1000);
}
learning();
done();
console.log(12345);
working();

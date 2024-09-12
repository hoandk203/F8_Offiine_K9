var slider1 = document.querySelector(".slider-1");
//tao mot su kien co ten la finish voi logic khi nao user keo duoc 100
// su kien finish se duoc gan vao input range co class la slider-1
// co 3 yeu to:
//- ten su kien
//- logic
//- element
///////////////////////////////////////////////
// var finishEvent = new Event("finish");
// finishEvent.msg = `Hoc js khong kho`;
// slider1.addEventListener("mousedown", function (e) {
//     var rate = Math.round((e.offsetX * 100) / this.clientWidth);
//     finishEvent.initialRate = rate;
// });

//lang nghe
// slider1.addEventListener("finish", function (e) {
//     console.log(`logic 1`);
// });

// var slider2 = document.querySelector(".slider-2");
// slider2.addEventListener("finish", function () {
//     console.log(`logic 2`);
// });

slider1.addEventListener("fastdrag", function () {
    console.log("keo nhanh qua");
});

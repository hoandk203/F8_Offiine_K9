var inputRangeList = document.querySelectorAll('input[type="range"]');
var finishEvent = new Event("finish");

var fastDrag = new Event("fastdrag");
var startValue = null;
var startTime = null;
inputRangeList.forEach(function (inputRange) {
    inputRange.addEventListener("input", function () {
        if (!startValue) {
            startValue = this.value;
        }
        if (this.value !== startValue && !startTime) {
            startTime = new Date().getTime();
        }
        if (+this.value === 100) {
            this.dispatchEvent(finishEvent);

            var currentTime = new Date().getTime();
            if (currentTime - startTime < 1000) {
                this.dispatchEvent(fastDrag);
            }
        }
    });
});

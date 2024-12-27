const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const timerBlock = document.querySelector(".timer-block");

const endSaleTime = new Date(data.slider.saleEndDate);


if (isNaN(endSaleTime.getTime()) || !data.slider.saleEndDate) {
    timerBlock.style.display = "none";
} else {

    function updateTimer() {
        const currentDate = new Date();
        const differenceTime = endSaleTime - currentDate;

        if (differenceTime <= 0) {
            timerBlock.style.display = "none";
            return;
        }

        const daysLeft = Math.floor(differenceTime / 1000 / 60 / 60 / 24);
        const hoursLeft = Math.floor(differenceTime / 1000 / 60 / 60) % 24 - 2;
        const minuteLeft = Math.floor(differenceTime / 1000 / 60) % 60;
        const secondLeft = Math.floor(differenceTime / 1000) % 60;

        days.innerText = daysLeft;
        hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
        minute.innerText = minuteLeft < 10 ? "0" + minuteLeft : minuteLeft;
        second.innerText = secondLeft < 10 ? "0" + secondLeft : secondLeft;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}
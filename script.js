const milliSecOutput = document.getElementById(`milli-second`);
const secondOutput = document.getElementById(`second`);
const minuteOutput = document.getElementById(`minute`);
const hourOutput = document.getElementById(`hour`);
const lapResult = document.getElementById(`lap-data`);

let milliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;

let interval;

const buttonStart = document.getElementById(`start-button`);
const buttonStop = document.getElementById(`stop-button`);
const buttonReset = document.getElementById(`reset-button`);
const buttonLap = document.getElementById(`lap-button`);

buttonStart.addEventListener(`click`, () => {
  interval = setInterval(startTimer, 10);
  buttonStart.disabled = true;
});

buttonStop.addEventListener(`click`, () => {
  clearInterval(interval);
  buttonStart.disabled = false;
});

buttonReset.addEventListener(`click`, () => {
  clearInterval(interval);
  milliSecond = 0;
  second = 0;
  minute = 0;
  hour = 00;
  milliSecOutput.innerText = `000`;
  secondOutput.innerText = `00 :`;
  minuteOutput.innerText = `00 :`;
  hourOutput.innerText = `00 :`;
  lapResult.innerText = ``;
  buttonStart.disabled = false;
});

buttonLap.addEventListener(`click`, () => {
  const li = document.createElement(`li`);

  li.innerText = `${hour} : ${minute} : ${second} : ${milliSecond}`;
  lapResult.appendChild(li);
});

const startTimer = () => {
  milliSecond++;
  if (milliSecond < 9) {
    milliSecOutput.innerText = `00${milliSecond}`;
  }
  if (milliSecond > 9 && milliSecond < 99) {
    milliSecOutput.innerText = `0${milliSecond}`;
  }
  // milliSecOutput.innerText = milliSecond;
  // if (milliSecond < 9) {

  //   secondOutput.innerText = ` 0${second} : `;
  if (milliSecond > 99) {
    second++;
    milliSecond = 0;
    secondOutput.innerText = ` ${second} : `;
  }
  if (second < 10) {
    secondOutput.innerText = ` 0${second} : `;
  }
  if (second > 59) {
    second = 0;
    secondOutput.innerText = ` ${second} : `;
    minute++;
    minuteOutput.innerText = `  ${minute} : `;
  }

  if (minute > 59) {
    minute = 0;
    minuteOutput.innerText = `  ${minute} : `;
    hour++;
    minuteOutput.innerText = ` : ${hour} : `;
  }
};

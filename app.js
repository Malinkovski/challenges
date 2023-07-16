//______________________________________________________________________
//Variables
const buttonStart = $("#start");
const buttonRestart = $("#restart");
const progressContainer = $(".image-center-wrapper");
const image_finish = $(".finish-img");
const car_1 = $(".car-img").eq(0);
const car_2 = $(".car-img").eq(1);
const previousResultsTable = $("#previous-results table tbody");
const buttonHistoryClear = $("#reset-history");

const FADE_TIMER = 300;

let FirstCarFinishTime = 0;
let secondCarFinishTime = 0;
let carData = [];

//______________________________________________________________________
//Functions

const setButtonOff = (item) =>
  item.prop("disabled", true).addClass("disabled-button");
const setButtonOn = (item) =>
  item.prop("disabled", false).removeClass("disabled-button");
const setVisibilityOn = (item) => item.css("visibility", "visible");
const setVisibilityOff = (item) => item.css("visibility", "hidden");

buttonStart.on("click", startRace);
buttonRestart.on("click", restartRace);
buttonHistoryClear.on("click", resetHistory);

setButtonOff(buttonRestart);

function startRace() {
  restartRace();
  setButtonOff(buttonStart);
  setButtonOff(buttonRestart);
  setVisibilityOn(progressContainer);
  startCountdown();
}
function restartRace() {
  car_1.css("left", "0");
  car_2.css("left", "0");
  image_finish.css("display", "none");
  setButtonOn(buttonStart);
  setButtonOff(buttonRestart);
  setVisibilityOff(progressContainer);
}

function startCountdown() {
  const countdown = $(".counter");
  let count = 3;
  function updateCountdown() {
    if (count > 0) {
      countdown.text(count);
      countdown.fadeIn(FADE_TIMER);
      count--;
      setTimeout(updateCountdown, 1000);
      countdown.fadeOut(FADE_TIMER);
    } else {
      startRacing();
      setVisibilityOff(progressContainer);
    }
  }
  updateCountdown();
}

function startRacing() {
  const randomMilliseconds = () =>
    Math.floor(Math.random() * (8000 - 1000 + 1)) + 1000;

  FirstCarFinishTime = randomMilliseconds();
  secondCarFinishTime = randomMilliseconds();

  drivingInProgress(car_1, FirstCarFinishTime, secondCarFinishTime);
  drivingInProgress(car_2, secondCarFinishTime, FirstCarFinishTime);
}
//______________________________________________________________________
//Driving animation left to right method
function drivingInProgress(car, firstCarTime, secondCarTime) {
  const racingTrack = $("#racing-track");
  const racingTrackWidth = racingTrack.width() - car_1.width();
  car
    .css("position", "relative")
    .animate({ left: racingTrackWidth }, firstCarTime, function () {
      if (firstCarTime < secondCarTime) {
        //shows image_finish once the faster car finishes
        image_finish.css("display", "block");
        setVisibilityOn(progressContainer);
      } else {
        updateResults();
        setButtonOn(buttonRestart);
        setButtonOn(buttonStart);
        saveDataToLocalStorage();
      }
    });
}

function updateResults() {
  //storing car objects into carData
  const firstCarResults = {
    car: "Car 1",
    position: FirstCarFinishTime < secondCarFinishTime ? "first" : "second",
    time: FirstCarFinishTime,
  };
  const secondCarResults = {
    car: "Car 2",
    position: FirstCarFinishTime > secondCarFinishTime ? "first" : "second",
    time: secondCarFinishTime,
  };
  carData.push(firstCarResults);
  carData.push(secondCarResults);

  const firstCarResultRow = $("<tr>").html(
    `<td>Finished in: <span>${firstCarResults.position}</span> place with a time of: <span>${firstCarResults.time}</span> milliseconds!</td>`
  );
  const secondCarResultRow = $("<tr>").html(
    `<td>Finished in: <span>${secondCarResults.position}</span> place with a time of: <span>${secondCarResults.time}</span> milliseconds!</td>`
  );

  $(".car-1-results table tbody").append(firstCarResultRow);
  $(".car-2-results table tbody").append(secondCarResultRow);
}

//______________________________________________________________________
//Local storage methods

// Check if carData is in localStorage
const storedCarData = localStorage.getItem("carData");
if (storedCarData) {
  carData = JSON.parse(storedCarData);
  displayPreviousResults();
}
function saveDataToLocalStorage() {
  localStorage.setItem("carData", JSON.stringify(carData));
}

function displayPreviousResults() {
  $.each(carData, function (index, result) {
    const resultRow = $("<tr>").html(`<td>
		  <span>${result.car}</span>: Finished in <span>${result.position}</span> place with a time of <span>${result.time}</span> milliseconds!</td>`);

    previousResultsTable.append(resultRow);
  });
}

//clearing history from local storage and display
function resetHistory() {
  previousResultsTable.empty("");
  localStorage.removeItem("carData");
  carData = [];
}

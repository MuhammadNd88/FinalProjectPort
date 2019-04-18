function init() {
  var intro = [
    { heading: "I am Muhammad Nadeem." },
    { heading: "I am a Web Developer." },
    { heading: "I do HTML, CSS and JavaScript." },
    { heading: "I also have graphic design experience." }
  ];

  var counter = 0;

  function showIntro() {
    var chosenIntro = intro[counter];
    document.querySelector("#introHeading").innerHTML = chosenIntro.heading;
  }
  function chooseNextIntro() {
    if (counter < intro.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    showIntro();
  }

  function choosePrevIntro() {
    if (counter > 0) {
      counter--;
    } else {
      counter = intro.length - 1;
    }
    showIntro();
  }

  document.getElementById("next").addEventListener("click", chooseNextIntro);
  document.getElementById("prev").addEventListener("click", choosePrevIntro);
  showIntro();
  var quoteTimer = setInterval(chooseNextIntro, 10000);
}

init();
// good morning function in javascript
var show_Greeing = document.querySelector("#greetHeading");
var d = new Date();
var time = d.getHours();

if (time < 12) {
  show_Greeing = document.querySelector("#greetHeading").innerHTML =
    "Good Morning";
}
if (time >= 12 && time <= 17) {
  show_Greeing = document.querySelector("#greetHeading").innerHTML =
    "Good Afternoon";
}
if (time >= 17 && time <= 24) {
  show_Greeing = document.querySelector("#greetHeading").innerHTML =
    "Good Evening";
}


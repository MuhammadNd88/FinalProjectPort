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
  var quoteTimer = setInterval(chooseNextIntro, 3000);
}

init();

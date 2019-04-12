function init () {
    var intro = [
    {heading: "I am Muhammad Nadeem"},
    {heading:"I am Web Developer"}, 
    {heading:"I have a HTML CSS and JavaScript experience"}, 
    {heading: "I have a graphic designer experince"}
          ];
    
    var counter = 0;

    function showIntro() {
        var chosenIntro = intro[counter];
        document.querySelector('#introHeading').innerHTML = chosenIntro.heading;
        
    }
    function chooseNextIntro() {
        if (counter < intro.length -1) {
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
            counter = intro.length-1;
        }
        showIntro();
    }

    
    document.getElementById('next').addEventListener("click", chooseNextIntro);
    document.getElementById('prev').addEventListener("click", choosePrevIntro);
    showIntro();
    var quoteTimer = setInterval(chooseNextIntro, 3000);
}



init();
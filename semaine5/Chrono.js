function Chrono(){
    this.compteur = 0;
    var compte = 0;

    function addSecond(){
        compte += 1;
        this.compteur = compte;
        console.log(this.compteur);
    }

    this.start = function(){
        timer = setInterval(addSecond,1000); 
    },
    this.pause = function(){
        clearInterval(timer);
    },
    this.stop = function(){
        clearInterval(timer);
        compte = 0;
    }
}

chrono = new Chrono();
chrono.start();
setTimeout(chrono.pause, 5000);
setTimeout(chrono.start,10000);
setTimeout(chrono.stop, 15000);



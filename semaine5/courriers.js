function bal() {
    this.courriers = [],
    this.deposerCourrier = function(courrier){
        this.courriers.push(courrier);
    },
    this.retirerCourrier = function(courrier){
        this.courriers.splice(this.courriers.indexOf(courrier),1);
    }
}

function Habitation(adresse){
    this.adresse = adresse;
    this.bal = new bal();
}

maison1 = new Habitation("Chemin des developpeurs");
maison2 = new Habitation("Route de Castelnau");

maison1.bal.deposerCourrier('premierCourrier');
maison1.bal.deposerCourrier('secondCourrier');

console.log(maison1.bal.courriers[0]);

maison1.bal.retirerCourrier('premierCourrier');

console.log(maison1.bal.courriers.length);
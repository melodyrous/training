function Produit(nom, prix){
    this.nom = nom,
    this.prix = prix
}

function Panier() {

    var produits = [];
    function calculTTC(ht){
        total =  ht * (1+15/100);
        return total;
    }
    this.totalHT = 0 ,
    this.totalTTC = 0,
    this.ajoute = function (produit){
        produits.push(produit);
        this.totalHT += produit.prix;
        this.totalTTC = calculTTC(this.totalHT);
    },
    this.retire = function (produit) {
        produits.splice(produits.indexOf(produit),1)
        totalHT -= produit.prix;
    }
}

var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);

var panier = new Panier();
panier.ajoute(baguette);
panier.ajoute(croissant);

console.log(panier.totalHT);
console.log(panier.totalTTC); 
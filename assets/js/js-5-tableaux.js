// LE REGROUPEMENT DE VALEURS AVEC DES TABLEAUX

/**
 * 
 * Les tableaux, arrays
 * 
 * Les applications plus volumineuses regroupent des valeurs similaires,
 * comme les noms de vos amis sur un réseau social.
 * 
 * Créer une variable pour chacun de vos amis rendrait cotre code long et complexe.
 * 
 */

const FRIEND1 = "Tom";
const FRIEND2 = "Mia";
const FRIEND3 = "Lee";

/**
 * 
 * Plutôt que de créer une variable pour le nom de chaque ami,
 * nous pouvons regrouper toutes les valeur dans un tableau en utilisant "[ ]"
 * ou le mot array().
 * 
 * Les valeurs d'un tableau sont appelées éléments. Par exemple, "Tom, "Mia"  et "Lee"
 * sont des éléments de ce tableau. 
 * 
 * Nous utilisons les virgules "," pour séparer deux valeurs ou plus dans un tableau
 * comme "Tom" de "Mia". N'importe quel nombre de valeur tient dans le tableau. 
 * Nous ajoutons plus en codant une virgule puis une valeur.
 * 
 */

const FRIENDS = [
    "Tom",
    "Mia",
    "Lee"];
console.log(FRIENDS);

/**
 * 
 * Pour crée un tableau vide, on code [].
 * 
 */

const FRIENDS1 = [];
console.log(FRIENDS1);

/**
 * 
 * La modification des valeurs dans les tableaux grâce à l'indice.
 * 
 * Appronfondissons les valeurs qu'un tabelau peut stocker et comment
 * nous pouvons les mettre à jour. 
 * Comme la façon dont une application méto pourrait suivre les températures. 
 * 
 * Un tableau peut stocker différentes valeurs de température et être mis à jour au fur et à mesure
 * que de nouvelles données arrivent des stations météorologiques tout au long de la journée.
 * 
 */

/**
 * 
 * Imaginez un tableau comme une commode. Un tiroir peut stocker n'importe quelle variable ou valeur,
 * qu'il s'aggisse d'une string, d'un boolean ou d'un number comme 17.
 * 
 * Chaque élément d'un tableau a une position numérotée appelée index. 
 * Les index commencent à 0 et augmentent à chaque nouvelle valeur. 
 * Cela signifie que le deuxième élément du tableau TEMPERATURES est à l'index 1.
 * Codez cet index
 */

const TEMPERATURES = [17, 20, 26, 24];
console.log(TEMPERATURES[1]);


/**
 * 
 * Pour accéder à un élément comme 26, vous devez coder le nom du 
 * tabelau TEMPERATURES suivi de l'index de l'élement entre crochets [2].
 * 
 */

console.log(TEMPERATURES[2]);

/**
 * 
 * Pour mettre à jour la valeur de température au deuxième index, accédez-y via 
 * TEMPERATURES[2], puis utiliser "=" pour lui attribuer une valeur comme 32.
 *  
 */

TEMPERATURES[2] = 32;
console.log(TEMPERATURES[2]);

/**
 * 
 * Bien qu'il y ait quatre éléments dans le tableau, le dernier index auquel nous pouvons accéder 
 * est 3 car l'indexation commence à 0.
 */

TEMPERATURES[3] = 20;
console.log(TEMPERATURES);

/**
 * 
 * ? Quel index l'élément de ce tableau a-t-il ?
 * 
 * const FRIENDS = ["Kim"];
 * 
 * Il a pour index 0.
 * 
 */

/**
 * 
 * Comment ajouter et supprimer des éléments du tableau.
 * 
 * Apprenons à ajouter et à supprimier des valeurs des tableaux. 
 * Comme dans une application de liste de tâches, qui utilise un tableau pour ajouter et supprimer 
 * des tâches.
 * 
 */

/**
 * 
 * Pour ajouter une valeur comme "groceries" à un tableau, nous codons le nom du tableau 
 * "TODO", suivi d'un ".", puis la méthode de tableau push("groceries").
 * L'ajout d'une valeur avec la méthode .push() la place à la fin du tableau.
 * 
 */

const TODO = ["call mom", "dishes"];
TODO.push("groceries");
console.log(TODO);

/**
 * 
 * Nous pouvons ajouter plusieurs valeur avec .push() en les séparant par une virgule ",".
 * 
 */

TODO.push("Feed cat", "Go to gym");
console.log(TODO);

/**
 * 
 * Pour supprimer me dernier élément du tableau, nous codons le nom du tabelau 
 * "TODO", un point ".", et la méthode de tableau pop();
 *  
 */

TODO.pop();
console.log(TODO);

/**
 * 
 * Lorsque nous stockons TODO.pop() dans une variable, nous récupérons la valeur 
 * de la valeur supprimer.
 * 
 */

let feedCat = TODO.pop();
console.log(feedCat);
TODO.push(feedCat);
console.log(TODO);

/**
 * 
 * Comment connaître le nombre d'élément dans son tableau ? 
 * 
 * Découvrons comment nous pouvons compter les éléments dans les tabelaux
 * et utiliser ces informations de manière intelligente.
 * 
 */

/**
 * 
 * Nous utilisons le mot "length" après le nom du tabelau et un point "."
 * pour obtenir le nombre d'éléments d'un tableau.
 * 
 * Nous pouvons également stocker la longueu d'un tableau dans une variable.
 * Peu importe le nombre d'éléments qu'il y a dans un tableau, length les comptera pour nous.
 * 
 */

const TASKS = ["dishes", "widndows", "vacuum"];
console.log(TASKS.length);

TASKS.push("dusting", "laundry");
console.log(TASKS);

const LENGTH = TASKS.length;
console.log(LENGTH);

/**
 * 
 * Même si le tableau des TASKS1 est vide, TASKS1.length nous donnera le nombre 
 * d'éléments qu'il contient.
 * 
 */

const TASKS1 = [];
console.log(TASKS1.length);

/**
 * 
 * Nous pouvons utiliser la longueur d'un tableau pour créer des instructions conditionnelles
 * qui dépendent de son nombre d'éléments.
 * 
 */

TASKS;
if (TASKS.length > 0) {
    console.log("Ugh, more work!");
}

/**
 * 
 * Nous pouvons également utiliser la longueur d'un tableau pour créer des boucles for qui
 * parcourent tous les éléments.
 * 
 * Pour cela, on répète une boucle autant de fois qu'il y a d'éléments dans le tableau en 
 * utilisant la propriété lenght.
 * 
 * La variable compteur i, stocke les valeurs de 0, 1 et 2 au fur et à mesure que la boucle
 * se répète. Mais 0, 1 et 2 sont aussi les index des éléments de FRIENDS2.
 * 
 * Ainsi, chaque fois que la boucle se répète, i stocke un index d'un élément dans le 
 * tableau FRIENDS2. Et nous pouvons utiliser l'index pour accéder à l'élément.
 * 
 */

const FRIENDS2 = ["Ana", "Eve", "Sam"];
for (let i = 0; i < FRIENDS2.length; i++) {
    console.log(FRIENDS2[i])
}
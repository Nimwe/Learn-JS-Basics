// REGROUPENT DE VALEURS EN OBJETS

/**
 * 
 * Comment créer un objet en JavaScript ?
 * 
 * Disons que nous avons deux variables, name et favoritefood, 
 * qui sont toutes deux liées au même chat.
 * 
 */

const NAME = "Garfield";
const FAVORITE_FOOD = "Fish";

/**
 * 
 * Au lieu d'utiliser deux variables distinctes pour décrire notre chat,
 * nous pouvons les regrouper en une seule variable, appelée objet.
 * 
 * Nous créeons des objets de la même manière que des variables, avec le mot-clé
 * "const" suivi d'un nom, d'un signe "=" et d'accolades "{}".
 * Comme const CAT = {};.
 * 
 * Les informations contenues dans un objet sont appelées propriétés de l'objet.
 * Les propirétés vont à l'intérieur des accolades de l'objet "{}".
 * 
 * Nous créons des propriétés commençant par un nom, suivi de deux-points ":" et
 * d'une valeur, comme name: "Garfiled". 
 * 
 * Comme pour un tableau, nous séparons chaqu'une des propriétés par une virgule. 
 * 
 */

const CAT = {
    name: "Garfield",
    favoriteFood: "Lasagna"
};

/**
 * 
 * Pour ajouter plus de propriétés à un objet, commencez par une virgule, 
 * puis ajouter la propriété. 
 * 
 * Un objet peut avoir autant de propriétés que nous le souhaitons, 
 * tant que chaque propriété est séparée par une virgule.
 * 
 * Les propriétés d'un objet peuvent être des numbers, des strings, 
 * des booleans, des arrays(tableaux) ou même d'autres objets.
 * 
 * Nous définnisons la propriété age de l'objet sur le nombre 57.
 * 
 * Nous pouvons utiliser console.log() pour afficher le contenu de notre objet
 * person.
 * 
 */

const PERSON = {
    name: "Joe Exotic",
    nickname: "Tiger King",
    occupation: "Zookeeper",
    age: 57
}
console.log(PERSON)

/**
 * 
 * Nous accédons à la propriété d'un objet en utilisant le nom de l'objet, 
 * un "." et le nom de la propriété, comme PERSON.nickname.
 * 
 */

console.log(PERSON.nickname);

/**
 * 
 * Exemple 1:
 * 
 * Afficher l'occuation de l'objet PERSON1
 * 
 */

const PERSON1 = {
    name: "Carole Baskin",
    occupation: "Animal Rightd Activist",
    nationality: "USA",
    active: true
};
console.log(PERSON1.occupation);
/**
 * 
 * Qu'est-ce que JSON
 * 
 * Vous savez déja ce qu'est un objet JS.
 * Voyons maintenant ce qu'est JSON. 
 * 
 * JSON signifie JavaScript Object Notation. Nous pouvons utiliser ce format 
 * de données pour échanger des données entre applications Web et les serveurs. 
 * 
 * JSON ressemble à une version stringifiée d'un objet JS normal.
 * 
 * Nous pouvons créer JSON_VARIBLE comme un objet normal "{}",
 * mais entouré de guillemets simples " ' ".
 *  
 * Un objet JSON contient une collection de paires clé-valeur, similaire 
 * à un objet JS.
 * 
 * Cependant, dans JSON, nous devons inclure les clés entre guillemets, 
 * comme "times" ici.
 * 
 */

const JSON_VARIABLE = '{"story": "life", "times":2, "fiction": true}';

/**
 * 
 * Les objets JSON peuvent collecter des données statiques telle que des nombres, 
 * des tableaux, des booléens ou des strings. 
 * Cependant, ils ne peuvent pas stocker de fonctions à l'intérieur.
 * 
 */

const JSON_VARIABLE1 = '{"story": "life", "times":2, "fiction": function(){}}';

/**
 * 
 * Nous pouvons convertir un objet JS en JSON avec la méthode JSON.stringify().
 * 
 * Ici, nous pouvons convertir l'objet CONCERT JS en un objet JSON si nous utilisons
 * JSON.stringify(CONCERT).
 * 
 */

const CONCERT = {
    band: "Super Carrots",
    music: "Indie"
};
console.log(CONCERT);
console.log(JSON.stringify(CONCERT));
const CONCERT_JSON = JSON.stringify(CONCERT);


/**
 * 
 * Nous pouvons également transformer une string JSON en un objet JS 
 * avec la méthode JSON.parse(). 
 * 
 * Si nous incluons DOG entre parenthèses, nous transformerons la string JSON
 * en un objet JS.
 * 
 */

const DOG_JSON = '{"name":"Rocko", "age":3}';
console.log(JSON.parse(DOG_JSON));
const DOG = JSON.parse(DOG_JSON);
console.log(DOG.name);
const DOG_NAME = DOG.name; 

/**
 * 
 * Comment utiliser des méthodes d'objet
 * 
 * Parfois, nous avons des fcontions étroitement liées à nos objets.
 * comme une fonction bark() liée à un objet DOG.
 * 
 * Comme pour les propriété, nous pouvons regrouper les fonctions associées dans
 * des objets. 
 * Les fonctions à l'intérieur d'un objet sont appelées les méthodes de l'objet.
 * 
 */

const DOG1 = {
    name: "Bo"
};

function bark() {
    console.log("woof woof")
}

bark();

/**
 * 
 * Nous créeons des méthodes d'objet comme les propriétés, en commançant par
 * un nom et deux-points ":", suivis du mot-clé function, "()", et des accolades "{}". 
 *  
 */

const DOG_MASTER = {
    name: "Bo",
    bark: function () {
        console.log("woof woof")
    }
};
DOG_MASTER.bark()

/**
 * 
 * Les méthodes sont similaires aux fonctions régulières. 
 * Cela signifie que nous pouvons également inclure 
 * des paramètres et des instructions de return.
 * 
 */

DOG_SUPER_MASTER = {
    name: "Bo",
    bark: function (word) {
        return "woof woof, " + word;
    }
};
console.log(DOG_SUPER_MASTER.bark("hungry"));
const MY_DOG = DOG_SUPER_MASTER.bark("hungry");
console.log(MY_DOG); 


/**
 * 
 * Exemple 1:
 * 
 * Assemblez le code pour créer la méthode de l'objet
 * 
 */

const PHONE = {
    brand: "Apple",
    number: "555-555-5555",
    ring: function () { }
};

/**
 * 
 * Exemple 2: 
 * 
 * Comment dirions-nous à l'objet CAT d'exécuter la méthode meow ?
 * 
 */

const CAT1 = {
    name: "Kittens",
    meow: function () {
        console.log("meow");
    }
};
CAT.meow();

/**
 * 
 * Apprenons à utiliser les méthodes pour accéder et mettre à jour les propriétés
 * de notre objet.
 * 
 */

let myCereal = {
    name: "Trix",
    display: function () {
        console.log("Trix");
    }
};

myCereal.display();

/**
 * 
 * Le mot clé "this" fait référence à l'objet qui contient la méthode. 
 * Dans ce cas, myCereal.
 * 
 * Nous pouvons utiliser "this" suivi d'un "." pour obtenir les propriétés
 * de l'objet à partir de ses méthodes.
 * 
 */

const MY_CEREAL = {
    name: "Trix",
    display: function () {
        console.log(this.name);
    }
};
MY_CEREAL.display();

/**
 * 
 * De même, nous pouvons utiliser "this" suivi d'un "." pour mettre à jour
 * les propriétés de l'objet depuis ses méthodes.
 *  
 * Le mot-clé "this" ne peut être utilisé que pour accéder aux propriétés 
 * d'un objet à l'intérieur de la méthode de l'objet.
 * 
 */

const MY_CEREAL1 = {
    name: "Trix",
    changeAndDisplay: function () {
        this.name = "Cap'n Crunch";
        console.log(this.name);
    }
};
MY_CEREAL1.changeAndDisplay();


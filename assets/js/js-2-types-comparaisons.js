// TYPES ET COMPARAISONS

/**
 * 
 * Comparer des nombres
 * 
 * Nous pouvons utiliser des comparaisons pour vérifier si un nombre
 * est inférieur ou supérieur à un autre nombre.
 * 
 * Pour vérifier si un nombre est inférieur à un autre nombre, nous
 * utilisons l'opérateur inférieur à "<". 
 * 
 */


/**
 * Si le nombre de gauche est inférieur au nombre de droite, comme dans 
 * 1 < 90 le résultat est true.
 * 
 * Si le nombre de gauche n'est pas inférieur au nombre de droite, comme dans
 *  235 < 10, le résultat est false. 
 */
console.log(1 < 90);
console.log(235 < 10);

/**
 * 
 * Pour vérifier si un nombre est supérieur à un autre nombre,
 * nous utilisons l'opérateur supérieur à ">". 
 * 
 */

console.log(101 > 90);

/**
 * 
 * Vérification de l'égalité
 * 
 * Pour vérifier si un nombre est inférieur ou égal à un autre nombre, 
 * nous utilisons l'opérateur inférieur ou égale à, "<="
 *  
 */

/**
 * 
 * Si le nombre de gauche est inférieur ou égale au nombre de droite,
 * comme dans 1 <= 3, le résultat est true. 
 */
console.log(1 <= 3);

/**
 * 
 * Pour vérifier si un nombre est supérieur ou égale à un autre nombre, 
 * nous utilisons l'opérateur supérieur ou égal à, ">=".
 *  
 */

console.log(3099 >= 3099);

/**
 * 
 * Pour stocker le résultat d'une comparaison dans une variable,
 * on utilise le signe "=" qui est l'opérateur d'affectation.
 * 
 */

const RESULT1 = 1 <= 15;
console.log(RESULT1);

/**
 * 
 * Nous pouvons également utiliser un opérateur de comparaison pour
 * comparer une variable avec une autre variable comme dans min <= max
 * 
 */

const MIN = 5;
const MAX = 10;
const RESULT2 = MIN <= MAX;
console.log(RESULT2);

/**
 * 
 * Vérifier si batterylevel1 = 10 est inférieur ou égale à 20.
 * Afficher un message indiquant "Low battery:" suivie de false ou true. 
 * 
 */

const BATTERY_LEVEL1 = 10;
const LOW_BATTERY = BATTERY_LEVEL1 <= 20;
console.log("Low battery: " + LOW_BATTERY);

/**
 * 
 * Stokez le résultat des points = 12 pour qu'il soit supérieur ou égale à 10
 * dans la variable leveltwo. 
 * Affichez un message indiquant "Level 2: true".
 * 
 */
const POINTS = 12;
const LEVEL_TWO = POINTS >= 10;
console.log("Level 2: " + LEVEL_TWO);

/**
 * 
 * Vérifier si solved = 20 est inférieur ou égale au minimum = 10.
 * Et affichez le résultat.
 *  
 */


const SOLVED = 20;
const MINIMUM = 10;
const LOST_STREAK = SOLVED <= MINIMUM;
console.log(LOST_STREAK);

/**
 * 
 * Comparer des strings
 * 
 * Opérateur d'égalité
 * 
 * Nous pouvons utiliser des comparaisons pour vérifier si une string
 * est égale ou non à une autre string. 
 * 
 */

/**
 * 
 * Pour vérifier si une string est égale à une autre string,
 * nous pouvons utiliser l'opérateur d'égalité stricte, "==="
 * 
 */

/**
 * 
 * Si la string de gauche est égale à la string de droite,
 * comme dans "apple" === "apple", le résultat est true.
 * 
 */

console.log("apple" === "apple");

/**
 * 
 * Si la string de gauche n'est pas égale à la string de droite, 
 * comme dans "apple" === "orange", le résultat est false.
 * 
 */

console.log("apple" === "orange");

/**
 * 
 * Nous pouvons également comparer des variables qui stokent des strings
 * entre elles, comme dans fruit1 === fruit2.
 * 
 */

const FRUIT1 = "apple";
const FRUIT2 = "orange";
const SAME_FRUIT = FRUIT1 === FRUIT2;
console.log(SAME_FRUIT);


/**
 * 
 * Stockez une string dans l'item2 pour rendre le résultat de la comparaison false.
 * 
 */

const ITEM1 = "deerstalker hat";
const ITEM2 = "red hat"
const IS_DUPLICATE = ITEM1 === ITEM2;
console.log(IS_DUPLICATE);

/**
 * 
 * Opérateur d'inégalité
 * 
 * Pour vérifier si une string n'est pas égale à une autre string, 
 * nous utilisons l'opérateur d'inégalité stricte, "!==".
 * 
  */

/**
 * 
 * Si la string  de gauche n'est pas égale à la string de droite, 
 * comme dans "apple" !== "orange", le resultat est true.
 * 
 */

console.log("apple" !== "orange")

/**
 * 
 * Si la string de gauche est égale à la string de droite, 
 * comme dans "orange" !== "orange", le resulat est false. 
 * 
 */


console.log("orange" !== "orange")

/**
 *
 * Pour stocker le résultat d'une comparaison dans une variable, 
 * on utilise l'opérateur d'affection qui est le signe "=".
 *  
 */

const IS_DUPLICATE1 = "apple" !== "orange";
console.log(IS_DUPLICATE1);


/**
 * 
 * Stockez une string dans wallpaper pour afficher le résultat false dans la console. 
 * Le fichier à vérifier s'appelle bliss.png.
 * 
 */

const WALLPAPER = "bliss.png";
const IS_SAVED = WALLPAPER !== "bliss.png";
console.log(IS_SAVED);


/**
 * 
 * Stockez une string dans newleader pour rendre le résultat de la comparaison true.
 * previousleader est Anna.
 * 
 */

const PREVIOUS_LEADER = "Anna";
const NEW_LEADER = "Jim";
const LEADER_CHANGED = PREVIOUS_LEADER !== NEW_LEADER;
console.log(LEADER_CHANGED);

/**
 * 
 * Vérifier si bigcity = Tokyo n'est pas égal à smallcity = Zurich.
 *  
 */

const BIG_CITY = "Tokyo";
const SMALL_CITY = "Zurich";
const IS_DIFFERENT_CITY = BIG_CITY !== SMALL_CITY;
console.log(IS_DIFFERENT_CITY);

// DECOUVRIR LES TYPES

/**
 * 
 * Les types
 * 
 * Nous avons déjà vu et ulisé de nombreux types de valeurs. 
 * Dans le jargon de la programmation, ces différents types de valeurs
 * sont appelés types.
 * 
 */

/**
 * 
 * Type : String
 * 
 * Les strings ou chaînes de caractères sont des caractères entre guillemets "",
 * comme la valeur "Cookies".
 * 
 */

const DESSERT = "Cookies"; // Type : String

/**
 * 
 * Type : Number
 * 
 * Le number ou nombre est un autre type que nous avons déjà utilisé.
 * Il représente des valeurs numériques comme 42.
 *  
 */

const SCORE = 42; // Type : Number

/**
 * 
 * Type : Boolean
 * 
 * Le type boolean ne contient que deux valeurs : les valeurs spéciales
 * true et false.
 * 
 * Lors du stockage de true dans IS_ON, nous disons que nous attribuons une
 * valeur à une variable.
 * 
 */

const IS_ON = true; // type : Boolean

/**
 * 
 * Exemple 1 : 
 * 
 * Attribuer une string à la variable username, un number à age 
 * et un boolena à ismale. Afficher le résultat dans la console. 
 * 
 */

const USER_NAME = "Anna"; // type : string
const AGE = 25; // type : number
const IS_MALE = false; // type : boolean
console.log(USER_NAME, AGE, IS_MALE);

/**
 * 
 * Travailler avec des types
 * 
 * "+" est le signe de jonction ou d'ajout. En joignant deux variables, 
 * nous pouvons obtenir des résultats différents en fonction de leur types.
 * 
 * Joignez les valeurs et examinez la différence entre l'utilisation de "+"
 * avec des strings et avec des numbers.
 * 
 */

console.log("10" + "10"); // expected output : 1010
console.log(10 + 10); // expected output : 20

/**
 * 
 * Lorsque vous joignez des numbres à des strings, le nombre sera automatiquement
 * transformé en string. 
 * 
 */

const RESULT3 = "blop" + 10;
console.log(RESULT3);

/**
 * 
 * Combinez une string et un number pour afficher le score d'un joueur.
 * 
 * const RESULT = "Your score: " + 99;
 * console.log(RESULT);
 * 
 * L'ajout d'un nombre à une string fonctionne également lorsque nous 
 * utilisons une variable comme SCORE_NUMBER qui stocke un number, au
 * lieu d'une valeur numérique.
 * 
 */

const NAME_PLAYER = "Max ";
const SCORE_NUMBER = 100;
const SCORE_PLAYER = "ton score est de " + SCORE_NUMBER + " points!";
const SCORE_TOTAL = NAME_PLAYER + SCORE_PLAYER;
console.log(SCORE_TOTAL);

/**
 * 
 * Nous pouvons également joindre des strings et des booléens. 
 * 
 * const RESULT = "You passed: " + true;
 * console.log(RESULT);
 * 
 * Encore une fois, l'ajout d'un booléean à une string fonctionne
 * également lorsque nous utilisons une variable comme pass, qui
 * stocke un booléen.
 *  
 */

const NAME_STUDENT = "Aurel ";
const PASS = true;
const IS_PASSED = "Est-ce que " + NAME_STUDENT + "monte de classe ? : " + PASS;
console.log(IS_PASSED);

/**
 * 
 * Exemple 1 : 
 * 
 * Qu'est-ce que ce code affiche dans la console ? 
 * 
 * console.log(10 + " years old");
 * expected output : 10 years old 
 * 
 * const PRICE = 3;
 * const TAG = PRICE + "$"; 
 * console.log(TAG); 
 * expected output : 3$
 * 
 */

// OPERATEURS LOGIQUES

/**
 * 
 * Opérateur "AND" ou "&&"
 * 
 * Avec les opérateurs logiques, nous pouvons connecter deux ou plusieurs
 * conditions pour décider d'un résultat.
 * 
 * Un opérateur logique relie les deux conditions pour la batterie et l'interrupteur
 * pour décider si l'ampoule doit être allumée ou éteinte. 
 * 
 * L'opérateur "AND" ou "&&" renvoie true uniquement si toutes les conditions sont true.  
 * 
 */

let isBatteryOn = true;
let isSwitchOn = true;
console.log(isBatteryOn && isSwitchOn);

/**
 * 
 * L'opérateur && renvera false si une ou plusieurs conditions sont false. 
 * 
 */

isBatteryOn;
isSwitchOn = false; // Mise à jour de ma variable isSwitchOn qui passe de true à false.
console.log(isBatteryOn && isSwitchOn);

/**
 * 
 * Lorsque les opérandes et les opérateurs calculent une valeur booléenne ensemble, 
 * cela forme une expression logique, comme isBatteryOn && IsSwitchOn. 
 * 
 * Vous pouvez également stocker le résultat d'une expression logique dans une variable.
 */

isBatteryOn = false;
isSwitchOn;
let result4 = isBatteryOn && isSwitchOn;
console.log(result4);

/**
 * 
 * Exemple 1 :
 * 
 * Qu'est-ce que ce code affiche dans la console pour la variable result.
 * Parcourez le code étape par étape pour le comprendre. 
 * 
 * let cost = 50;
 * let sellPrice = 60;
 * const PROFIT  = sellPrice - cost; 
 * console.log(PROFIT);
 * expected output => 10
 * 
 * const RESULT = cost < sellPrice && PROFIT > 0;
 * console.log("result: " + RESULT);
 * expected output => result: true
 * 
 */

/**
 * 
 * Exemple 2: 
 * 
 * Vérifier si un permis de conduire peut être délivré à une personne. 
 * Ils doivent être âgés d'au moins 18 ans et réussir l'examen de conduite.
 * 
 */

let age = 21;
let examen = true;
const IS_ELIGIBLE = age >= 18 && examen;
console.log(IS_ELIGIBLE);

/**
 * 
 * Exemple 3:
 * 
 * Vérifier si l'utilisateur peut envoyer un e-mail. 
 * Pour cela, le destinataire doit être valide et le sujet doit être renseigné. 
 * Pour l'exemple, sujet = false. 
 * 
 */

let isRecipentValid = true;
let isSubjectFilled = false;
const IS_MAIL_SENT = isRecipentValid && isSubjectFilled;
console.log("Mail Sending Successful ?: " + IS_MAIL_SENT);

/**
 * 
 * Exemple 4:
 * 
 * Stockez une expression logique dans la variable willsiteload qui vérifie si le 
 * WIFI est connecté et si l'URL est valide pour charger un site Web. 
 * 
 */

let isWifiConnected = true;
let isUrlValid = true;
const WILL_SITE_LOAD = isWifiConnected && isUrlValid;
console.log(WILL_SITE_LOAD); 

/**
 * 
 * Opérateur "OR / ||" et "NOT / !"
 * 
 * Nous avons vu que l'opérateur AND / && exige que toutes les conditions soient vraies. 
 * Mais que se passe-t-il s'il suffit qu'une condition soit vraie ?
 * 
 * Par eemple, l'ampoule s'allume ici si la batterie est connectée ou si l'alimentation est connectée. 
 * 
 * Pour de telles conditions, nous utilisons l'opérateur "OR" / "||", qui renvoie true tant qu'au
 * moins une des conditions est true.
 * Si toutes les conditions sont false, alors l'opérateur "||" renvoie false.
 * 
 */

let isBatteryOn1 = true;
let isPowerOn = false;
console.log(isBatteryOn1 || isPowerOn);

/**
 * 
 * Nous savons que l'opérateur "NOT" / "!" nie une valeur booléenne.
 * Cela signifie qu'il renvoie true si une condition est false et vice versa.
 * 
 */

let isBulbOn = true;
console.log(!isBulbOn);

/**
 * 
 * Nous pouvons utiliser "!" pour nier également les expressions logiques.
 * Pour ce faire, nous plaçons l'expression logique entre parenthèses.
 * 
 * L'expression logique renvoie false mais en la niant, nous obtenons true. 
 * 
 */

isBatteryOn1;
isPowerOn;
console.log(!(isBatteryOn1 && isPowerOn));

/**
 * 
 * Exemple 1:
 * 
 * Qu'est-ce que ce code affiche dans la console ?
 * 
 * const CONDITION1 = 5 >= 6; // => false
 * const CONDITION2 = 9 === 10; // => false
 * console.log(CONDITION1 || CONDITION2);
 * expected output => false
 * 
 * let condition1 = true;
 * let condition2 = false;
 * const LOGICAL_EXPRESSION = condition1 || condition2;
 * console.log(!LOGICAL_EXPRESSION ||  LOGICAL_EXPRESSION);
 * expected output => true
 *
 */

/**
 * 
 * Exemple 2 :
 * 
 * Vérifier si une personne peut acheter une voiture selon que son prêt
 * est approuvé ou que son montant en espèces est supérieur au coût de la 
 * voiture.
 * 
 * Le prêt est approuvé. 
 * cash = 30000;
 * cost = 40000;
 * 
 */

let cash = 30000;
let cost = 40000;
let isLoanApproved = true;
const IS_CAR_BOUGHT = (cash > cost) || isLoanApproved;
console.log(IS_CAR_BOUGHT);

/**
 * 
 * Exemple 3 :
 * 
 * Enregistrer l'opposé de isloanrejected dans la constante isloangranted et afficher. 
 * 
 */

let isLoanRejected = false;
const IS_LOAN_GRANTED = !isLoanRejected;
console.log(IS_LOAN_GRANTED);

/**
 * 
 * Vérifier si une personne peut acheter une voiture ou non. 
 * En vérifiant si la personne à les fonds suffisant et 
 * 
 * canbuycar.
 * 
 */

isLoanRejected;
cash;
cost;
const INSUFFICENT_FUNDS = cash < cost;
const CAN_BUY_CAR = !(isLoanRejected && INSUFFICENT_FUNDS);
console.log(CAN_BUY_CAR);

/**
 * 
 * Exemple 4:
 * 
 * utiliser "||" et "!" pour déterminer si un utilisateur peut publier, 
 * en vérifiant si une pièce jointe est ajoutée ou si le champ de texte
 * n'est pas vide.
 * 
 * istextempty
 * isattachment
 * isposted
 * 
 */

let isTextEmpty = true;
let isAttachment = false;
const IS_POSTED = !isTextEmpty || isAttachment;
console.log(IS_POSTED);

/**
 * 
 * Exemple 5 :
 * 
 * Enreggistrez un fichier si le stockage cloud est supérieur à la taille du fichier
 * ou si le stockage système est supérieur à la taille du fichier.
 * 
 * cloudstorage = 4
 * systemestorage = 8
 * filesize = 5
 * 
 * "Saved ? : "
 *  
 */

const CLOUD_STORAGE = 4;
const SYSTEM_STORAGE = 8;
const FILE_SIZE = 5;
const IS_SAVED1 = (CLOUD_STORAGE > FILE_SIZE) || (SYSTEM_STORAGE > FILE_SIZE);
console.log("Saved: " + IS_SAVED1); 



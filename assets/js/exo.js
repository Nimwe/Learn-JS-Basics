/**
 'Double slash pour barrer les mauvaises reponses'
 
 * Exercice 1 
 * ? Quand peut-on utiliser console.log() pour afficher la valeur d’une variable ? 
 * Après avoir créé la variable
 * //Avant ou après la création de la variable.
 * //Avant de créer la variable. 
 * 
 * Exercice 2.
 * ? Pourquoi la valeur suivante n’est pas une valeur de string ?
 * New York 
 * //Parce qu’il y a un espace entre les mots.
 * ! Parce qu’il n y a pas de guillemets doubles autour. 
 * //Parce que les mots sont en majuscules. 
 * 
 * Exercice 3.
 * ? Vous devez déclarer une constante nommée spaceship est y stocker la string Entreprise. 
 * ! const spaceship = Entreprise
 * 
 * Exercice 4.
 * ? Vous devez afficher la string Atlanta dans la console. 
 * ! console.log("Atlanta"); ou console.log("Atlanta dans la console");
 * 
 * Exercice 5.
 * ? Vous devez afficher la string dans la console.
 * ! console.log(INGREDIENTS); 
 * 
 * Exercice 6.
 * ? Qu’est-ce que ce code affiche dans la console ?
 * //900
 * ! 1000
 * //1500
 * 
 * Exercice 7.
 * ? Vous devez afficher dans la console une phrase indiquant le nombre de kilomètres restant.
 * const GOAL= 5;
 * const KM_RAN = 3; 
 * ! console.log("Il reste " + KM_RAN + " Km");
 *  
 * Exercice 8.
 * ? Vous devez afficher le score total dans la console.
 * const SCORE = 1084;
 * const BONUS = 500;
 * ! console.log(BONUS + SCORE);
 * 
 * Exercice 9.
 * ? Vous devez définir et afficher le nouveau score total en prenant en compte le sens des noms des variables.
 * const SCORE = 1584;
 * const PENALTY = 1500;
 * ! console.log(SCORE-PENALTY);
 * 
 * Exercice 10.
 * ? Quelle est la valeur de number3 ?
 * const NUMBER1 = 3;
 * const NUMBER2 = 4;
 * let number3 = 10;
 * number3 = NUMBER1 + NUMBER2;
 * 
 * ! 7
 * //10
 * //4
 * 
 * Exercice 11.
 * ? Quelle signe permet de transformer le booléen true en false ? 
 * //?
 * !
 * //-
 * 
 * Exercice 12.
 * ? Quelle valeur n’est pas une string ?
 * //“true”
 * ! true
 * //“wrong”
 * 
 * Exercice 13.
 * ? Pouvez-vous vous assurer en mettant à jour la variable loggedIn que le booléen true apparaît dans la console ? 
 * let loggedIn = false;
 * console.log("Connecté: " + loggedIn);
 * ! let loggedIn = !false;
 * ! console.log("Connecté: " + loggedIn);
 * 
 * Exercice 14.
 * ? Utilisez le signe spécial pour annuler la valeur.
 * const IS_CONNECTED = true;
 * ! const IS_CONNECTED = !true;
 * 
 * Exercice 15.
 * ? Pouvez-vous terminer cet extrait de code ? 
 * 
 * const SPLIT = 15 / 5;
 * console.log(SPLIT); // =>3 
 * 
 * console.log("Est-ce divisible ?: "); // oui parce que 3 est un nombre entier
 * ! console.log(TRUE); 
 * 
 * Exercice 16.
 * ? Quel est le résultat de l’utilisation de l’opérateur d’égalité stricte ?
 * //Une valeur numérique.
 * //Une valeur “true” ou “false”.
 * ! Une valeur true ou false. 
 * 
 * Exercice 17.
 * ? Pouvez-vous vérifier si l’uploaded est égal à la valeur 100 ?
 * const UPLOADED = 15;
 * ! console.log(UPLOADED === 100); => False
 * 
 * Exercice 18.
 * ? Que va afficher ce code dans la console ?
 * console.log(906 === 9006);
 * //9069006
 * ! false
 * //true
 * 
 * Exercice 19.
 * ? Vous devez faire en sorte que le résultat de la comparaison soit true. 
 * const NEW_MESSAGES = 3;
 * ! console.log(NEW_MESSAGES  !== 0); =>True
 * 
 * Exercice 20.
 * ? Vous devez vérifier si le nombre choisi n’est pas égal à 0.
 * chosenNumber = 3;
 * ! notZero = chosenNumber !== 0;
 * ! console.log(notZero);
 * => True
 * 
 * Exercice 21. 
 * ? Quel opérateur stocke le résultat d’une comparaison dans une variable ? 
 * ! =
 * //<=
 * //===
 * 
 * Exercice 22. 
 * De quel opérateur avons-nous besoin pour vérifier si un nombre à gauche de l’énoncé 
 * est inférieur ou égale à 22 ?
 * //>=
 * //<
 * ! <=
 * 
 * Exercice 23. 
 * Nous voulons savoir si le score est supérieur ou égal au min score. Vous devez stocker 
 * le résultat de la comparaison dans la variable ispass et afficher le résultat dans la 
 * console. 
 * const SCORE = 32;
 * const MIN_SCORE = 30;
 * ! let ispass = SCORE >= MIN_SCORE ; 
 * ! console.log(ispass); // => True 
 * 
 * Exercice 24.
 * Vous devez faire en sorte que ce code affiche true dans la console. 
 * ! const AGE != 26;
 * console.log(AGE < 26);
 * 
 * Exercice 25.
 * Qu’est-ce que ce code affiche dans la console ? 
 * console.log("Nina" === "Nina");
 * //false
 * //NinaNina
 * ! true
 * 
 * Exercice 26.
 * Vous devez utiliser un opérateur de comparaison pour afficher le résultat false 
 * dans la console en comparant la variable score et la variable expected. 
 * const SCORE = "High";
 * const EXPECTED = "Low";
 * ! console.log(SCORE === EXPECTED);
 * 
 * Exercice 27. 
 * Que fait le signe !== ? 
 * ! Il vérifie si une string n’est pas égale à une autre string.
 * //Il vérifie si une string est égale à une autre string.
 * //Il vérifie si une string est inférieur à une autre string.  
 * 
 * Exercice 28.
 * Vous devez vérifier si “Apple” n’est pas égale à “Nokia”. 
 * ! console.log(Apple === Nokia);

 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 * 
 * 
 * 
 */
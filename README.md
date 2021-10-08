# JAVASCRIPT MORPION V2
## Excercice en Javascrit | 07/10/2021 | 2iTech Academy Aix-En-Provence
## Descritpion
Création du jeu du morpion, ou appelé Tic Tac Toe. HTML / JS

## Réalisation
Ce jeu a été réalisé dans le cadre d'un TP à la 2iTech Academy d'Aix-en-Provence, durant ma formation en javascript.

## Cahier des charges
Création d'un dossier images pour y stocker les images rond.png, croix.png, vide.png.
Création d'un ficher html.
Création d'un fichier JS pour y mettre le ficher javascript.

### Base du TP
Sur une grille de neuf cases (trois par trois), chaque joueur marque tour à tour une case.
Le vainqueur est celui qui réussi à aligner trois cases de sa couleur, en ligne, en colonne ou en 
diagonale.
0 1 2 
3 4 5 
6 7 8 
Le joueur qui marque les cases 0, 1, 2 ou 3, 4, 5 ou 6, 7, 8 ou 0, 3, 6 ou 1, 4, 7 ou 2, 5, 8 ou 0, 4, 8 
ou 2, 4, 6 de sa couleur remporte la partie.

### Préparation du HTML
Initialement il contient 9 cases avec des images transparentes (trouver une image blanche pour cela 
et vous savez maintenant dans quel balise les intégrer)
Attention à ne pas les aligner (<br> est votre ami)
Faites en sorte que ces images réagissent à l’évènement onclick avec une fonction.
### Script JS
#### Lisez attentivement jusqu’à la fin avant de commencer
Celle-ci sera écrite en JS et déterminera quoi faire si c’est le joueur 1 (Rond) ou le joueur 2 (Croix) 
qui aura joué sur cette case. (En changeant l’image par un Rond ou une Croix)
 - Le jeu doit gérer l’alternance des joueurs, il doit aussi déterminer, à chaque coup joué, s’il y a un 
vainqueur et donc que la partie est terminée.
 - Vérifier aussi si la case n’a pas déjà été jouée.
Une proposition de solution serait d’écrire une fonction verifier(a,b,c) qui contrôlera si les cases a,b 
et c ont été jouées par le même joueur.
 - Gagnant() qui contrôlera s’il y a un gagnant
 - Joue(n) qui marque la case n pour un joueur, cette fonction pourra aussi gérer l’alternance de joueur.

#### Commentaires
N'hésitez pas à me faire un commentaire. Toutes les remarques constructives sont bonnes à entendre.

##### N-rick


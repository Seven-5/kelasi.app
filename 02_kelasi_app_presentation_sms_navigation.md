# Fichier 02 — Site Kelasi : présentation, SMS, AppBar et navigation

## Projet concerné

- Projet principal : `kelasi.app`
- Type : site public de Kelasi
- Pages concernées :
  - Accueil
  - Page de présentation Kelasi
  - AppBar/navigation
  - Liens vers téléchargement, tarifs, tutoriels, contact

## Objectif général

Créer une présentation professionnelle de Kelasi et relier proprement les pages importantes sans casser le design existant.

---

# Règles obligatoires à donner à l’agent IA avant toute tâche

Tu travailles sur les projets de Seven 5 Software autour de Kelasi.

Règles générales :
1. Ne change pas l’architecture globale des projets.
2. Ne réécris pas tout le site, toute l’application ou tout le serveur.
3. Respecte le design actuel, les couleurs, les composants, les espacements, les boutons, les AppBar, les cards et les styles existants.
4. Avant de modifier, inspecte les fichiers existants pour comprendre la structure.
5. Réutilise les composants déjà présents au lieu d’en créer inutilement.
6. Ne casse pas les routes existantes.
7. Ne supprime aucun code existant sauf si c’est vraiment nécessaire et expliqué.
8. Tout texte visible doit être en français correct.
9. Le nom officiel est “Kelasi”.
10. Si une donnée comme un prix, une URL de téléchargement, un lien Play Store, une version ou une URL API n’existe pas clairement dans le code, crée une variable/configuration centralisée au lieu de mettre une valeur dispersée partout.
11. Le résultat doit être responsive : mobile, tablette et desktop.
12. À la fin, explique exactement les fichiers modifiés et pourquoi.
13. Ne jamais mettre “Iron Man” comme titre principal.
14. Ne jamais utiliser d’image, logo ou élément visuel Marvel, Iron Man, Tony Stark ou Spider-Man.
15. Ne jamais inventer des prix, URLs, versions ou fonctionnalités.
16. Ne jamais exposer inutilement l’API serveur ou les IP brutes.
17. Tout tracking doit être silencieux, non bloquant et protégé contre les appels trop fréquents.


---

# Tâche 1 — Créer la page de présentation professionnelle de Kelasi

## But

Créer une page qui présente Kelasi comme une solution avancée, intelligente et moderne.  
La comparaison avec Iron Man doit être seulement dans la description, jamais dans le titre principal.

## Titres possibles

```text
Kelasi, la nouvelle génération de gestion scolaire intelligente
```

```text
L’écosystème intelligent de gestion scolaire conçu pour simplifier l’éducation
```

```text
Une application scolaire pensée pour simplifier la gestion des écoles
```

## Texte important à intégrer

```text
Kelasi n’est pas seulement une application de gestion scolaire. C’est un écosystème pensé pour aider les écoles à travailler plus simplement, plus rapidement et avec plus de contrôle.
```

## Description avec analogie prudente

```text
Kelasi peut être considéré comme l’Iron Man des applications de gestion scolaire, non pas parce que ce nom doit devenir son titre, mais parce que chaque partie de l’application a été pensée comme une armure intelligente autour de l’école. Comme Tony Stark conçoit ses systèmes pour anticiper les besoins, protéger, assister et automatiser, Kelasi a été conçu pour accompagner les écoles dans leurs réalités quotidiennes : finances, paiements, présences, bulletins, communication avec les parents, suivi des élèves, rapports et assistance intégrée.
```

## Sections à créer

- Présentation courte de Kelasi.
- Une application pensée pour les écoles.
- Assistance intégrée pour les utilisateurs.
- Agent intelligent intégré.
- Communication avec les parents par SMS.
- Gestion financière et suivi des paiements.
- Rapports, bulletins, présences et suivi scolaire.
- Pourquoi Kelasi est différent.
- Bouton vers la page de téléchargement.
- Bouton vers les tutoriels.
- Bouton vers la page des tarifs.

## Étapes techniques

1. Inspecter la structure du site `kelasi.app`.
2. Identifier le système de routing.
3. Identifier les composants existants : boutons, cards, layout, AppBar, footer.
4. Créer la page de présentation dans le dossier approprié.
5. Réutiliser les composants existants.
6. Ajouter la route sans casser les routes existantes.
7. Ajouter les boutons d’action vers téléchargement, tutoriels et tarifs.
8. Vérifier le rendu mobile, tablette et desktop.
9. Vérifier que l’analogie Iron Man n’est pas dans le titre principal.

## Prompt à donner à l’agent

```text
Je veux ajouter une nouvelle page de présentation marketing pour Kelasi dans le projet kelasi.app.

Objectif :
Créer une page professionnelle qui présente Kelasi comme une application de gestion scolaire intelligente, moderne et très bien pensée.

Attention :
Le titre principal ne doit PAS être “Iron Man des applications de gestion scolaire”.
Le titre doit rester professionnel, par exemple :
“Kelasi, la nouvelle génération de gestion scolaire intelligente”
ou
“Une application scolaire pensée pour simplifier la gestion des écoles”.

Dans le contenu descriptif seulement, ajoute une analogie disant que Kelasi peut être considéré comme l’Iron Man des applications de gestion scolaire, parce que tout a été pensé en détail : assistance, automatisation, guide intégré, agent intégré, communication avec les parents, finances, rapports, cotations, bulletins et accompagnement des utilisateurs.

Éléments à mettre dans la page :
- Présentation courte de Kelasi.
- Section “Une application pensée pour les écoles”.
- Section “Assistance intégrée pour les utilisateurs”.
- Section “Agent intelligent intégré”.
- Section “Communication avec les parents par SMS”.
- Section “Gestion financière et suivi des paiements”.
- Section “Rapports, bulletins, présences et suivi scolaire”.
- Section “Pourquoi Kelasi est différent”.
- Bouton vers la page de téléchargement.
- Bouton vers les tutoriels.
- Bouton vers la page des tarifs.
Il faut aussi prévoir les tags au nombre recomendé pour une meilleur SEO. exemple : application de cotation, meuilleur app pour école... application scolaire en 2026, app scolaire avec IA
Style :
Respecte exactement le design actuel du site.
Réutilise les composants existants.
Ne crée pas un design totalement différent.
La page doit être responsive.
Le ton doit être professionnel, convaincant et clair.

Texte important à intégrer :
“Kelasi n’est pas seulement une application de gestion scolaire. C’est un écosystème pensé pour aider les écoles à travailler plus simplement, plus rapidement et avec plus de contrôle.”

Ne modifie pas les autres pages sauf pour ajouter la route et le lien de navigation si nécessaire.
À la fin, donne la liste des fichiers modifiés.
```

---

# Tâche 2 — Ajouter la partie communication parent-école par SMS

## But

Montrer que Kelasi utilise une méthode accessible, économique et réaliste pour communiquer avec les parents.

## Texte à intégrer

```text
Kelasi facilite la communication entre l’école et les parents grâce aux SMS. C’est une méthode simple, économique et accessible, même lorsque les parents n’ont pas de smartphone ou de connexion internet. L’école peut informer les parents sur les paiements, les présences, les absences, les conduites, les rappels importants ou d’autres communications scolaires.
```

## Étapes techniques

1. Ouvrir la page de présentation créée ou existante.
2. Ajouter une section SMS sous forme de card/bloc cohérent avec le design actuel.
3. Ne pas modifier la logique SMS existante.
4. Ne pas dire que l’envoi est automatique si le code ne le permet pas.
5. Utiliser une formulation prudente : “Kelasi facilite l’envoi de SMS”.
6. Tester l’affichage responsive.

## Prompt à donner à l’agent

```text
Dans la page de présentation de Kelasi du projet kelasi.app, ajoute une section spéciale sur la communication entre l’école et les parents par SMS.

Objectif :
Montrer que Kelasi propose une méthode économique et adaptée aux réalités locales.

Contenu à intégrer :
- Les SMS permettent de joindre les parents même sans internet.
- C’est plus accessible que de dépendre uniquement d’une application parent.
- L’école peut envoyer ou faciliter l’envoi d’informations sur les paiements, présences, absences, conduites, rappels et annonces importantes.
- Le texte doit rester professionnel et rassurant.
- Ne promets pas que l’envoi est automatique si le code actuel ne le permet pas déjà.
- Si l’app prépare seulement les messages ou facilite l’envoi, utilise une phrase prudente comme “Kelasi facilite l’envoi de SMS”.
- Ne touche pas à la logique SMS existante.

Style :
La section doit ressembler aux autres sections de la page.
Utilise une card ou un bloc similaire au design existant.
```

---

# Tâche 3 — Ajouter les boutons Tutoriels, Téléchargement et Tarifs dans l’AppBar

## But

Faciliter l’accès aux pages importantes depuis l’accueil sans surcharger la barre de navigation.

## Étapes techniques

1. Inspecter l’AppBar actuelle.
2. Vérifier si les liens Tutoriels, Téléchargement ou Tarifs existent déjà.
3. Ajouter seulement les liens manquants.
4. Sur desktop, afficher les liens si le style actuel le permet.
5. Sur mobile, utiliser le menu/drawer/hamburger existant.
6. Ne pas dupliquer les liens.
7. Vérifier les routes.

## Prompt à donner à l’agent

```text
Je veux modifier l’AppBar ou la barre de navigation de la page d’accueil du site Kelasi dans kelasi.app.

Objectif :
Ajouter des boutons/liens visibles vers :
- Tutoriels
- Télécharger Kelasi
- Tarifs si la page tarifs existe déjà ou si elle est créée dans cette série de tâches

Contraintes :
1. Ne casse pas le design actuel de l’AppBar.
2. Sur desktop, les boutons peuvent être visibles directement si le style actuel le permet.
3. Sur mobile, respecte le comportement actuel : menu, drawer, bouton hamburger ou navigation responsive existante.
4. Ne duplique pas les liens si ces boutons existent déjà ailleurs.
5. Utilise les routes existantes si elles existent.
6. Si les routes n’existent pas encore, ajoute-les proprement dans le système de routing actuel.
7. Ne modifie pas le contenu principal de l’accueil sauf si nécessaire pour harmoniser les liens.
8. Ne surcharge pas la navigation : les liens secondaires peuvent aller dans le menu mobile ou dans un menu plus discret.

Résultat attendu :
L’utilisateur doit pouvoir accéder rapidement aux tutoriels, au téléchargement et aux tarifs depuis l’accueil.
```

---

# Tâche 4 — Relier proprement toutes les pages

## Pages concernées

- Accueil.
- Présentation de Kelasi.
- Téléchargement.
- Tutoriels.
- Tarifs.
- Contact si existant.

## Étapes techniques

1. Vérifier toutes les routes.
2. Ajouter des boutons d’action dans les sections importantes.
3. Mettre “Télécharger Kelasi” dans la page de présentation.
4. Mettre “Voir les tarifs” dans la page de présentation.
5. Mettre “Voir les tutoriels” dans la page téléchargement.
6. Mettre “Demander une démo” ou “Contacter Seven 5” dans la page tarifs.
7. Ne pas dupliquer trop de boutons.
8. Tester desktop et mobile.

## Prompt à donner à l’agent

```text
Je veux relier proprement les nouvelles pages du site Kelasi dans kelasi.app.

Pages concernées :
- Accueil
- Présentation de Kelasi
- Téléchargement
- Tutoriels
- Tarifs
- Contact si existant

Objectif :
L’utilisateur doit pouvoir naviguer facilement entre ces pages.

À faire :
1. Ajouter les liens dans l’AppBar si nécessaire.
2. Ajouter les boutons d’action dans les sections importantes.
3. Ajouter un bouton “Télécharger Kelasi” dans la page de présentation.
4. Ajouter un bouton “Voir les tarifs” dans la page de présentation.
5. Ajouter un bouton “Voir les tutoriels” dans la page de téléchargement.
6. Ajouter un bouton “Demander une démo” ou “Contacter Seven 5” dans les tarifs.

Contraintes :
- Ne duplique pas trop les boutons.
- Ne surcharge pas l’interface.
- Respecte le design actuel.
- Vérifie que toutes les routes fonctionnent.
- Sur mobile, la navigation doit rester propre.
```

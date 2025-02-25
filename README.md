# README - Visualisation de la Météo

## Description
Ce projet est une page web permettant d'afficher la météo actuelle d'une ville en utilisant l'API OpenWeatherMap.

## Installation et Configuration
1. **Téléchargez ou clonez ce projet** sur votre machine.
2. **Assurez-vous d'avoir une connexion Internet** pour récupérer les données météo.

## Structure du Projet
- `script.js` : Le fichier contenant la logique JavaScript pour récupérer et afficher les données.

## Utilisation
1. **Assurez-vous que le fichier `script.js` est bien inclus dans le HTML** :

   ```html
    <!-- Div où les données seront chargées -->
    <div id="api-meteo-div">
      <p>
        Ville: <span id="meteo-city"></span> - Température: <span id="meteo-temperature"></span>°C - Humidité: <span id="meteo-humidity"></span>% - Conditions: <span id="meteo-description"></span>
      </p>
    </div>

    <!-- Inclusion du fichier JavaScript externe -->
    <script src="script.js"></script>
   ```

2. **Ouvrez le fichier HTML dans un navigateur**.

Le script est configuré pour récupérer la météo à l'ouverture de la page. Toutefois, il est possible d'ajouter un event qui appelle `getWeather()` pour mettre à jour l'affichage.





## Personnalisation
- Pour changer la ville par défaut, modifiez la variable `city` dans `script.js` :

  ```javascript
  const city = "VotreVille";
  ```

- Remplacez `cf8b56bcf8ecb228cc4abae0346663be` par votre propre clé API OpenWeatherMap. ou gardez la mienne.


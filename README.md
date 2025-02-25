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

Sortie JSON de l'API :
```json
  {
    "coord":
    {
      "lon":6.0075,
      "lat":43.1228
    },
    "weather": [
      {
        "id":500,
        "main": "Rain",
        "description": "légère pluie",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 13.74,
      "feels_like": 13.52,
      "temp_min": 13.37,
      "temp_max": 15.91,
      "pressure": 1017,
      "humidity": 90,
      "sea_level": 1017,
      "grnd_level": 996
    },
    "visibility": 10000,
    "wind": {
      "speed": 1.03,
      "deg":0
    },
    "rain": {
      "1h": 0.41
    },
    "clouds": {
      "all":75
    },
    "dt": 1740490604,
    "sys": {
      "type": 2,
      "id": 2005831,
      "country": "FR",
      "sunrise": 1740464327,
      "sunset": 1740503977
    },
    "timezone": 3600,
    "id": 3009223,
    "name": "La Garde",
    "cod": 200
  }
```

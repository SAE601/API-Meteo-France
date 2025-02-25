# README - Visualisation de la Météo

## Description
Ce projet est une page web permettant d'afficher la météo actuelle d'une ville en utilisant l'API OpenWeatherMap.

## Installation et Configuration
1. **Téléchargez ou clonez ce projet** sur votre machine.
2. **Assurez-vous d'avoir une connexion Internet** pour récupérer les données météo.

## Structure du Projet
- `index.html` : La page principale qui affiche la météo.
- `script.js` : Le fichier contenant la logique JavaScript pour récupérer et afficher les données.

## Utilisation
1. **Assurez-vous que le fichier `script.js` est bien inclus dans `index.html`** :

   ```html
   <!-- Inclusion du fichier JavaScript externe -->
   <script src="script.js"></script>
   ```

2. **Ouvrez le fichier `index.html` dans un navigateur**.
3. **Cliquez sur le bouton "Obtenir la météo"** pour voir les données de la ville configurée.

## Remarque
Si vous testez en local et que l'API ne fonctionne pas à cause des restrictions CORS, utilisez un serveur local :

- Avec Node.js :
  ```sh
  npx http-server
  ```
- Avec Python :
  ```sh
  python -m http.server
  ```

Puis ouvrez `http://localhost:8000` dans votre navigateur.

## Personnalisation
- Pour changer la ville par défaut, modifiez la variable `city` dans `script.js` :

  ```javascript
  const city = "VotreVille";
  ```

- Remplacez `cf8b56bcf8ecb228cc4abae0346663be` par votre propre clé API OpenWeatherMap.

## Licence
Ce projet est libre d'utilisation et de modification.


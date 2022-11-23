# La Poste Tracking

<a href="https://packagephobia.now.sh/result?p=laposte-tracking-fr"><img src="https://badgen.net/packagephobia/install/laposte-tracking-fr" alt="Install size"></a>
<a href="https://www.npmjs.com/package/laposte-tracking-fr"><img src="https://img.shields.io/npm/v/laposte-tracking-fr" alt="npm version"></a>
<a href="https://security.snyk.io/package/npm/laposte-tracking-fr"><img src="https://snyk.io/test/npm/laposte-tracking-fr/badge.svg" alt="Known Vulnerabilities"></a>

Get package delivery tracking informations from la Poste (Lettre Recommandée, Colissimo, Chronopost)<br/>
| Lettre Recommandée | Colissimo | Chronopost |
|---|---|---|
| <a href="https://www.laposte.fr/outils/suivre-vos-envois"><img src="https://www.laposte.fr/_ui/logo/logo-light.svg" alt="laposte" width="45"></a> | <a href="https://www.laposte.fr/outils/suivre-vos-envois"><img src="https://www.laposte.fr/_ui/eboutique/images/suivi/logo-colissimo.svg" alt="Colissimo" width="125"></a> | <a href="https://www.chronopost.fr/"><img src="https://www.chronopost.fr/sites/all/themes/chronopost/images/chronopost_logo.png" alt="Chronopost" width="150"></a> |

## Installation

ApiKey from LaPoste is required to use the API.<br/>
Please visit https://developer.laposte.fr/products/suivi/2 to create one.

In your application root directory, enter this command to install the connector:
```bash
npm install laposte-tracking --save
```

This installs the module from npm and adds it as a dependency to the application's `package.json` file.

## Method available

### getTracking
Returns everything in one object
```js
const laposteTracking = require('laposte-tracking');
const trackingAPI = laposteTracking({ apiKey: 'secretApiKey' });

// Using Promise
await trackingAPI.getTracking('6A24796812345').then(tracking => {
    console.log(tracking);
});

// Using async/await
console.log(await trackingAPI.getTracking('6A24796812345'));
/*
{
    trackingId: '6A24796812345',
    type: 'colissimo',
    currentStatus: "Votre colis a été livré",
    duration: 4,
    isComplete: true,
    lastUpdated: "2022-06-03T16:23:00.000Z",
    created: "2022-05-31T03:08:00.000Z",
    history: [{
        datetime: "2022-05-31T03:08:00.000Z",
        text: "Votre Colissimo va bientôt nous être confié ! Il est en cours de préparation chez votre expéditeur."
    }, {
        datetime: "2022-06-03T09:45:00.000Z",
        text: 'Votre colis est en transit sur nos plateformes logistiques.'
    }, {
        datetime: "2022-06-03T05:05:00.000Z",
        text: "Votre colis est pris en charge",
    }, {
        datetime: "2022-06-03T09:42:00.000Z",
        text: 'Votre colis est dans le site de livraison qui dessert votre adresse. Nous le préparons pour le mettre en livraison.'
    }, {
        datetime: "2022-06-03T16:23:00.000Z",
        text: "Votre colis a été livré"
    }]
}
*/
```

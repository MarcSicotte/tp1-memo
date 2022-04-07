/**
 * Fonction qui retourne une date en français dans le format Fr suivant
 *  26 mai 1999
 * @param {Number} tsSecondes timestamp en secondes
 * @return {String} Chaine représentant le timestamp dans le format spécifié
 */

 export function formaterDate(tsSecondes){
    let dateJS = new Date(tsSecondes*1000);
    let nomsDesMois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aout', 'septembre', 'octobre', 'novembre', 'décembre']
    return `${dateJS.getDate()} ${nomsDesMois[dateJS.getMonth()]} ${dateJS.getFullYear()}`
}
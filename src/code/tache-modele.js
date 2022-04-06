import { bdFirestore } from "./init";
import { getDocs, collection, addDoc, Timestamp, getDoc} from "firebase/firestore"
import { deepCopy } from "@firebase/util";

/**
 * Obtenir tous les taches d'un utilisateur
 * @param {string} idUitlisateur Identifiant Firebase de l'utilisateur connecté
 * @return {Promise<any[]>} Promesse avec le tableau des signets lorsque complèté 
 */

 export async function lireTout(idUtilisateur){
    return getDocs(collection(bdFirestore, 'memo', idUtilisateur, 'taches')).then(
         res => res.docs.map(doc => ({id: doc.id, ...doc.data}))
     );
 }

 /**
 * Ajouter une tache pour un utilisateur
 * @param {string} idUtilisateur Identifiant Firebase de l'utilisateur connecté
 * @param {object} tache Objet représentant la tache à ajouter 
 * @returns 
 */

  export async function creer(idUtilisateur, tache) {
    // ajouter dateModif à l'objet tache
    
    tache.dateModif = Timestamp.now();
    // Référence à la collection taches ou on ajoute une tache 
    let coll = collection(bdFirestore, 'memo', idUtilisateur, 'taches');
    // Ajout de la tache avec addDoc : retourne une promesse
   
    let refDoc = await addDoc(coll, tache);
    return await getDoc(refDoc);
}
import Tache from './Tache';
import './Taches.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import *as tacheModele from '../code/tache-modele';

export default function Taches({utilisateur, taches, setTaches, gererAjoutTache }) {
   
  //Lire les taches de l'utilisateur connectecté dans Firestore
    useEffect(
      () => tacheModele.lireTout(utilisateur.uid).then(
        lesTaches => setTaches(lesTaches)
      )
      , [utilisateur]
    ); 
    
    function gererAjouTache(e){
      //1 prevent.default
      e.preventDefault();
      //attrapper la valeur du text dans form
      e.target.value;
      // faire appel la function creer de tacheModele
      
    }

  return (
    <section className="Taches">
      <form onSubmit={e => gererAjouTache(e)}>
        <input 
          type="text"   
          placeholder="Ajoutez une tâche ..." 
          
          name="texteTache"
          autoComplete="off" 
        />
      </form>
      <div className="liste-taches">
      {
        taches.map( 
          // Remarquez l'utilisation du "spread operator" pour "étaler" les 
          // propriétés de l'objet 'dossier' reçu en paramètre de la fonction
          // fléchée dans les props du composant 'Dossier' !!
          tache =>  <li key={tache.id}><Tache {...tache} /></li>
        )
      }
      </div>
    </section>
  );
}
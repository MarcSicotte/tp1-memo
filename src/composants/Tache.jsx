import './Tache.scss';

export default function Tache({id, titre, dateModif}) {
  return (
    <div className="Tache">
      Basculer
      <span className="texte">{titre}</span>
      <span className="date">{dateModif}</span>
      Supprimer
    </div>
  );
}
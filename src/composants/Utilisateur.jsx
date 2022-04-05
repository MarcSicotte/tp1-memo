import './Utilisateur.scss';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deconnexion } from '../code/utilisateur-modele'

export default function Utilisateur({util}) {
  console.log(util);
  return (
    <div className="Utilisateur">
      <span className="nom">{Utilisateur.displayName}</span>
      <Avatar className="avatar" alt="Le même Monsieur Untel" title="Email de l'utilisateur ici" />
      
      <Button 
        variant="outlined"
        size="small"
        className="btn-deconnexion"
        onClick={deconnexion}
      >
        Déconnexion
      </Button>
    </div>
  );
}
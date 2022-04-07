import './Tache.scss';
import { formaterDate } from '../code/conversion-date';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from '@mui/material';

export default function Tache({id, titre, dateModif}) {
  return (
    <div className="Tache">
      {/* Button completer */}
      <IconButton className='complete'> 
          <CheckCircleIcon/>
      </IconButton>
      <span className="texte">{titre}</span>
      <span className="date">{formaterDate(dateModif)}</span>
      {/* Button supprimer */}
      <IconButton className='supprime'>
          <RemoveCircleIcon/>
      </IconButton>
    </div>
  );
}
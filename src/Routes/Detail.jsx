import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';
import './Detail.scss';

const Detail = () => {
  const { id } = useParams(); 
  const { state } = useContext(GlobalContext);
  const { data } = state;
  const dentist = data.find(dentist => dentist.id === parseInt(id));

  if (!dentist) {
    return <div>No se encontró información para este dentista.</div>;
  }

  return (
    <div className="dentist-detail">
      <h2>Detalles del Dentista</h2>
      <p>Nombre: {dentist.name}</p>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Sitio Web: {dentist.website}</p>
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
};

export default Detail;

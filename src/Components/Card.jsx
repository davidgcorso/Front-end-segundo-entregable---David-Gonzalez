import { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../Components/utils/global.context';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ userId }) => {
  const { state, addToFavorites } = useContext(GlobalContext);
  const { data } = state;
  const user = data.find(user => user.id === userId);

  if (!user) {
    return null; 
  }

  const handleAddToFavorites = () => {
    addToFavorites(user);
  };

  return (
    <div className="card">
      <Link to={`/dentist/${user.id}`}>
        <h2>{user.name}</h2>
        </Link>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <button onClick={handleAddToFavorites}>Agregar a favoritos</button>
    </div>
  );
};

Card.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Card;








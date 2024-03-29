import { useContext } from "react";
import { GlobalContext } from "../Components/utils/global.context";
import Card from "../Components/Card";

import "./Favs.scss"; 

const Favs = () => {
  const { state, removeFromFavorites } = useContext(GlobalContext);
  const { favorites } = state;

  const handleRemoveFromFavorites = (userId) => {
    removeFromFavorites(userId);
  };

  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favorites.map((user) => (
          <div key={user.id} className="fav-container">
            <Card userId={user.id} />
            <button className="remove-button" onClick={() => handleRemoveFromFavorites(user.id)}>
             ✖ 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favs;








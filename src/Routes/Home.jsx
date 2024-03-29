import { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';
import './Home.scss';


const Home = () => {
  const { state } = useContext(GlobalContext);
  const { data } = state;

  return (
    <div className="home">
      <h1>Lista de Dentistas</h1>
      <div className="card-container">
        {data.map(user => (
          <div key={user.id} className="card-item">
            <Card userId={user.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;


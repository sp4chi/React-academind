import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/products');
  };

  return (
    <>
      <h1>My home page!</h1>
      <p>
        Go to the list of <Link to="products">products</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default Home;

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>My home page!</h1>
      <p>
        Go to the list of <Link to="/products">products</Link>
      </p>
    </>
  );
};

export default Home;

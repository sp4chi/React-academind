import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', title: 'Shirts' },
  { id: 'p2', title: 'Jeans' },
  { id: 'p3', title: 'Tracks' },
  { id: 'p4', title: 'Jackets' },
];
const Products = () => {
  return (
    <>
      <h1>This is the products page!</h1>
      <ul>
        {PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;

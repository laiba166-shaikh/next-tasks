import ProductCard from "../components/ProductCard";
import styles from "../styles/Products.module.css";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return {
    props: { products: data },
  };
};

const Products = ({ products }) => {
  return (
    <div className={styles.productsPage}>
      <h1 className={styles.productsTitle}>All Products</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

import styles from "../styles/Products.module.css";
const ProductCard = ({ title, price, image }) => {
  return (
    <div className={styles.productCard}>
      <img src={image} className={styles.productcardImage} />
      <div className={styles.productDetails}>
        <h2>{title}</h2>
        <h2>{price}$</h2>
      </div>
    </div>
  );
};

export default ProductCard;

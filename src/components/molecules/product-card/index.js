import React from "react";
import styles from "./style.module.css";

export const ProductCard = ({
  img = "",
  title = "",
  desc = "",
  price = "",
  id,
}) => {
  return (
    <div
      className={`${styles.productCard}`}
      onMouseEnter={() => {
        document.getElementById(`product${id}`).style.marginTop = "60px";
      }}
      onMouseLeave={() => {
        document.getElementById(`product${id}`).style.marginTop = "0px";
      }}
    >
      <div className={`${styles.productset}`}>
        <div className={`${styles.productsetimg}`}>
          <img src={img} alt="img" className={styles.productImage} />
          <h6 id={`product${id}`}>Qty: 1.00</h6>
        </div>
        <div className={`${styles.checkProduct}`}>
          <i class="fa fa-check"></i>
        </div>
        <div className={`${styles.productsetcontent}`}>
          <h5>{title}</h5>
          <h4>{desc}</h4>
          <h6>{price}</h6>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./style.module.css";
export const Categorycard = ({
  OnclickCategoryCard,
  img,
  title,
  selectedCategory,
}) => {
  return (
    <div
      className={`${styles.categorycard}`}
      onClick={() => {
        OnclickCategoryCard(title);
      }}
      style={{
        backgroundColor: selectedCategory === title ? "#7367f0" : "white",
      }}
    >
      <div class={`${styles.categorycardDiv}`}>
        <img
          src={img}
          alt="img"
          style={{ marginBottom: 10 }}
          height={31}
          width={31}
        />
        <h6>{title}</h6>
      </div>
    </div>
  );
};

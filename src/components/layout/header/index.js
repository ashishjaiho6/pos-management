import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header
      className={`${styles.headerContainer}`}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: 20,
        paddingBlock: 10,
      }}
    >
      <div>
        <Image
          src={"/images/logo.png"}
          alt="site_logo"
          width={140}
          height={42}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "16%",
        }}
      >
        <div>
          <Image
            src={"/images/search.svg"}
            alt="search"
            width={25}
            height={25}
          />
        </div>
        <div>
          <Image src={"/images/us.png"} alt="country" width={30} height={25} />
        </div>
        <div>
          <Image
            src={"/images/notification-bing.svg"}
            alt="notification"
            width={25}
            height={25}
          />
        </div>
        <div>
          <Image
            src={"/images/avatar-06.jpg"}
            alt="user_image"
            width={38}
            height={38}
            style={{ borderRadius: 100 }}
          />
        </div>
      </div>
    </header>
  );
};

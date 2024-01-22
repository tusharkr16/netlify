import React from "react";
import styles from "./layout.module.scss";

const Layout = (props) => {
  return (
    <div className={styles.layoutContainer}>
      {props.children}
    </div>
  );
};

export default Layout;

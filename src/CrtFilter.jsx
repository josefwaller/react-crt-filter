import React from "react";
import classnames from "classnames";
import styles from "./style.module.scss";

export default ({ classes = {}, children }) => (
  <div className={classnames(styles.crtFilterRoot, classes.wrapper)}>
    <div className={styles.backlight}>
      <div className={styles.grid}></div>
      <div className={styles.filter}>
        <div className={styles.scanlines}></div>
      </div>
    </div>
    <div className={classnames(styles.content, classes.content)}>
      {children}
    </div>
  </div>
);

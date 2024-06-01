import React, { FC } from "react";
import styles from "./index.module.scss";
import { Man } from "../../img/man";

interface IBtn {
  text: string;
}

export const Btn: FC<IBtn> = ({ text }) => {
  return (
    <section className={styles.block}>
      <div className={styles.body}>
        <div className={styles.border}></div>
        <div className={styles.img}>
          <Man />
        </div>
        {text}
      </div>
    </section>
  );
};

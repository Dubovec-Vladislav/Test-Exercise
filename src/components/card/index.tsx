import React, { FC } from "react";
import styles from "./index.module.scss";

export interface ICard {
  number: number;
  text: string;
  img: React.ComponentType<any>;
  borderColor: string;
  startColor: string;
  endColor: string;
}

export const Card: FC<ICard> = ({
  number,
  text,
  img: Img,
  borderColor,
  startColor,
  endColor,
}) => {
  const cardStyles = {
    backgroundImage: `linear-gradient(to bottom, ${startColor}, ${endColor})`,
    borderColor: borderColor,
  };

  return (
    <div className={styles.block} style={cardStyles}>
      <div className={styles.body}>
        <div className={styles.header}>
          <div className={styles.number} style={{ borderColor: borderColor }}>
            {number}
          </div>
          <div className={styles.text}>{text}</div>
        </div>
        <div className={styles.img}>
          <Img />
        </div>
      </div>
    </div>
  );
};

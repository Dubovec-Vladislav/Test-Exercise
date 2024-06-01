import React from "react";
import styles from "./App.module.scss";
import { Img1 } from "./img/img-1";
import { Img2 } from "./img/img-2";
import { Img3 } from "./img/img-3";
import { Card, ICard } from "./components/card";
import { Btn } from "./components/btn";

const texts: ICard[] = [
  {
    number: 1,
    text: "Получите партнерскую ссылку",
    img: Img1,
    startColor: "#6073DE",
    endColor: "#2C24A8",
    borderColor: "#95A2EA",
  },
  {
    number: 2,
    text: "Расскажите iiii.COM",
    img: Img2,
    startColor: "#DD60DE",
    endColor: "#781898",
    borderColor: "#E895EA",
  },
  {
    number: 3,
    text: "Получайте хороший процент покупок по вашей ссылке!",
    img: Img3,
    startColor: "#51C901",
    endColor: "#06551B",
    borderColor: "#8BDB53",
  },
];

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {texts.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
      <div className={styles.btn}>
        <Btn text="Стать партнером" />
      </div>
    </div>
  );
}

export default App;

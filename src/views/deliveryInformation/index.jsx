import React from "react";
import styles from "./index.module.scss";
import cn from "classnames";

export const DeliveryInformation = () => {
  return (
    <div className={styles.deliveryInfoWrapper}>
      <h2 className={styles.title}>Koszty i terminy dostaw</h2>
      <ul>
        <li className={styles.description}>
          Wysyłka Inpost paczkomaty 18,99zł
        </li>
        <p className={styles.descriptionFooter}>
          paczka średnia do 25 kg o wymiarach 19 x 38 x 64 cm
        </p>
        <li className={styles.description}>
          Wysyłka Inpost paczkomaty 20,99zł
        </li>
        <p className={styles.descriptionFooter}>
          paczka duża do 25 kg o wymiarach 41 x 38 x 64 cm
        </p>
        <li className={styles.description}>Wysyłka Inpost kurier 20,99zł</li>
        <p className={styles.descriptionFooter}>
          paczka średnia do 25 kg o wymiarach 19 x 38 x 64 cm
        </p>
        <li className={styles.description}>Wysyłka Inpost kurier 25,99zł</li>
        <p className={styles.descriptionFooter}>
          paczka duża do 25 kg o wymiarach 41 x 38 x 64 cm
        </p>
      </ul>
      <p className={styles.description}>
        Czas dostawy zazwyczaj wynosi 1-2 dni.
      </p>
      <p>W przypadku większych zamówien termin realizacji może ulec wydłużeniu, natomiast dołożymy wszelkich starań, aby ten czas skrócić do minimum.</p>
    </div>
  );
};

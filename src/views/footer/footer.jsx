import React, { useContext } from "react";
import styles from "./index.module.scss";
import { InstagrammIcon, WhatsappIcon } from "../../assets/icons.jsx";
import { Map } from "../../components/map/map.jsx";
import { themeContext } from "../../context/theme.jsx";
import cn from "classnames";

export const Footer = () => {
  const { theme, switchTheme } = useContext(themeContext);
  return (
    <footer
      className={cn(styles.footerWrapper, {
        [styles.dark]: theme === "dark",
      })}
    >
      <h2
        className={cn(styles.footerHeader, {
          [styles.dark]: theme === "dark",
        })}
      >
        Wszystkie INFORMACJE
      </h2>
      <div className={styles.contactWrapper}>
        <div
          className={cn(styles.contactsDivBackground, {
            [styles.dark]: theme === "dark",
          })}
        >
          <div className={styles.contactsFontHeader}></div>
          <p
            className={cn(styles.contactsFont, {
              [styles.dark]: theme === "dark",
            })}
          >
            O nas
          </p>
        </div>

        <div
          className={cn(styles.contactsDivBackground, {
            [styles.dark]: theme === "dark",
          })}
        >
          <div className={styles.contactsFontHeader}>Social</div>
          <div className={styles.instWhatWrapper}>
            <InstagrammIcon
              className={cn(styles.instagramm, {
                [styles.dark]: theme === "dark",
              })}
            />
            <WhatsappIcon
              className={cn(styles.whatsapp, {
                [styles.dark]: theme === "dark",
              })}
            />
          </div>
        </div>
        <div
          className={cn(styles.contactsDivBackground, {
            [styles.dark]: theme === "dark",
          })}
        >
          <div className={styles.contactsFontHeader}>Adress</div>
          <p
            className={cn(styles.contactsFont, {
              [styles.dark]: theme === "dark",
            })}
          >
            Gdańsk, Polska
          </p>
        </div>
        <div
          className={cn(styles.contactsDivBackground, {
            [styles.dark]: theme === "dark",
          })}
        >
          <div className={styles.contactsFontHeader}></div>
          <p
            className={cn(styles.contactsFont, {
              [styles.dark]: theme === "dark",
            })}
          >
            Koszty i terminy dostaw
          </p>
        </div>
      </div>
      {/* <div
        className={cn(styles.mapWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <Map />
      </div> */}
    </footer>
  );
};

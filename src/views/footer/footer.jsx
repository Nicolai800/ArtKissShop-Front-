import React, { useContext } from "react";
import styles from "./index.module.scss";
import { InstagrammIcon, FacebookIcon } from "../../assets/icons.jsx";
import artKissLogo from "../../assets/artKissLogo.png";
import { Map } from "../../components/map/map.jsx";
import { themeContext } from "../../context/theme.jsx";
import cn from "classnames";
import { DeliveryInformation } from "../deliveryInformation/index.jsx";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  const { theme, switchTheme } = useContext(themeContext);
  return (
    <>
      <h2
        className={cn(styles.footerHeader, {
          [styles.dark]: theme === "dark",
        })}
      >
        Wszystkie INFORMACJE
      </h2>

      <footer
        className={cn(styles.footerWrapper, {
          [styles.dark]: theme === "dark",
        })}
      >
        <div
          className={styles.logoWrapper}
          style={{ backgroundImage: `url(${artKissLogo})` }}
        ></div>
        <div className={styles.infoWrapper}>
          <NavLink to="about-the-company">
            <p
              className={cn(styles.contactsFont, {
                [styles.dark]: theme === "dark",
              })}
            >
              O nas
            </p>
          </NavLink>

          {/* <div className={styles.contactsFontHeader}>Social</div> */}
          <div className={styles.instWhatWrapper}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/_art_kiss_design/"
            >
              <InstagrammIcon
                className={cn(styles.instagramm, {
                  [styles.dark]: theme === "dark",
                })}
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100066490130748"
            >
              <FacebookIcon
                className={cn(styles.facebook, {
                  [styles.dark]: theme === "dark",
                })}
              />
            </a>
          </div>
          <p
            className={cn(styles.contactsFont, {
              [styles.dark]: theme === "dark",
            })}
          >
            NastiaDemon@gmail.hell
          </p>
          {/* <div className={styles.contactsFontHeader}>Adress</div> */}
          <p
            className={cn(styles.contactsFont, {
              [styles.dark]: theme === "dark",
            })}
          >
            Gdańsk, Polska
          </p>

          <NavLink to="delivery-information">
            {" "}
            <p
              className={cn(styles.contactsFont, {
                [styles.dark]: theme === "dark",
              })}
            >
              Koszty i terminy dostaw
            </p>
          </NavLink>
        </div>
      </footer>
    </>
  );
};

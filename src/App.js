import { Fragment } from "react";
import { ReactComponent as Logo } from "./assets/svgs/Yetti.svg";
import google from "./assets/images/google.png";
import styles from "./scss/app.module.scss";

const App = function () {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className="container">
          <Logo />
        </div>
      </header>
      <section className={styles.section__login}>
        <form action="" className={styles.form}>
          <h1 className={styles.form__header}>Login</h1>
          <div className={styles.form__container}>
            <div className={styles.form__group}>
              <input
                type="text"
                className={styles.form__input}
                placeholder="someone@gmail.com"
              />
            </div>
            <div className={styles.form__group}>
              <input
                type="password"
                className={styles.form__input}
                placeholder="password"
              />
            </div>
            <button className={styles.form__button} type="submit">
              Login
            </button>
          </div>
          <div className={styles.form__extra}>
            <p className={styles.form__paragraph}>Continue with</p>
            <button className={styles.form__link}>
              <span className={styles.form__imageBox}>
                <img
                  src={google}
                  alt="login with google"
                  className={styles.form__image}
                />
              </span>
            </button>
          </div>
        </form>
      </section>{" "}
    </Fragment>
  );
};

export default App;

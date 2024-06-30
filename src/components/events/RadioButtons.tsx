import React from "react";
import styles from "./RadioButtons.module.css";

const RadioButtons = () => {
  return (
    <div
      className={`${styles.container} mx-8 flex flex-wrap items-center justify-center gap-8 md:mx-4`}
    >
      <div className={styles.radioWrapper}>
        <input className={styles.input} name="btn" id="value-3" type="radio" />
        <div className={styles.btn}>
          2017-2020<p className="hidden sm:inline-block" aria-hidden="true"></p>
        </div>
      </div>

      <div className={styles.radioWrapper}>
        <input className={styles.input} name="btn" id="value-3" type="radio" />
        <div className={styles.btn}>
          2020-2021<p className="hidden sm:inline-block" aria-hidden="true"></p>
        </div>
      </div>

      <div className={styles.radioWrapper}>
        <input className={styles.input} name="btn" id="value-3" type="radio" />
        <div className={styles.btn}>
          2021-2022<p className="hidden sm:inline-block" aria-hidden="true"></p>
        </div>
      </div>

      <div className={styles.radioWrapper}>
        <input className={styles.input} name="btn" id="value-3" type="radio" />
        <div className={styles.btn}>
          2022-2023<p className="hidden sm:inline-block" aria-hidden="true"></p>
        </div>
      </div>

      <div className={styles.radioWrapper}>
        <input className={styles.input} name="btn" id="value-3" type="radio" />
        <div className={styles.btn}>
          2023-2024<p className="hidden sm:inline-block" aria-hidden="true"></p>
        </div>
      </div>
    </div>
  );
};

export default RadioButtons;

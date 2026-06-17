import React from "react";
import FormikCamp from "../components/FormikCamp/FormikCamp";
import styles from "./Pages.module.scss";
const CampPage = () => {
  return (
    <section className={styles.container}>
      <h1>Teen Creator Camp</h1>
      <FormikCamp />
    </section>
  );
};

export default CampPage;
